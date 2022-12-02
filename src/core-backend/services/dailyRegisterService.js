const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
const foodSavedService = require('./foodSavedService');
const mongoose = require('mongoose');

//#region DailyRegister
async function getDailyRegisterById(dailyRegisterId){
    let gymgoer = await Gymgoer.Model.findOne({'dailyRegisters._id': dailyRegisterId});

    if(gymgoer == null)
        return {errorType: 404, errorMessage: 'Daily Register not found'};

    let dailyRegister = gymgoer.dailyRegisters.filter(dailyRegister => dailyRegister._id == dailyRegisterId)[0];

    return dailyRegister;
}

async function getDailyRegisterByDate(gymgoerId, dateString){
    var date = new Date(dateString);

    if(isNaN(Date.parse(dateString)))
        return {errorType: 500, errorMessage: 'Error in date format, must be YYYY-MM-DD'};

    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    let savedDailyRegister = gymgoer.dailyRegisters.filter(dailyRegister => Date.parse(dailyRegister.date) == Date.parse(date))[0];

    if(!savedDailyRegister){
        let newDailyRegister = {
            date: date
        }

        savedDailyRegister = await createNewDailyRegister(gymgoerId, newDailyRegister);
    }

    return savedDailyRegister;
}

async function getAllDailyRegistersByGymgoerId(gymgoerId){
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    let result = gymgoer.dailyRegisters.sort(function(a, b){return a.date - b.date}).reverse(); 

    return result;   
}

async function createNewDailyRegister(gymgoerId, dailyRegister){
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    let newDailyRegister = {
        _id: mongoose.Types.ObjectId(),
        date: dailyRegister.date ? dailyRegister.date : new Date(),
        totalCarb: dailyRegister.totalCarb ? dailyRegister.totalCarb : 0,
        totalProtein: dailyRegister.totalProtein ? dailyRegister.totalProtein : 0,
        totalFat: dailyRegister.totalFat ? dailyRegister.totalFat : 0,
        totalKcal: dailyRegister.totalKcal ? dailyRegister.totalKcal : 0,
        foods: dailyRegister.foods,
        exercises: dailyRegister.exercises
    };

    if(newDailyRegister.totalKcal == 0)
        newDailyRegister.totalKcal = newDailyRegister.totalCarb * 4 + newDailyRegister.totalProtein * 4 + newDailyRegister.totalFat * 9

    gymgoer.dailyRegisters.push(newDailyRegister);
        await gymgoer.save();

    return {gymgoerId: gymgoer._id, newDailyRegister};
}
//#endregion

//#region Food Eaten in day
async function getAllFoodEatenInDailyRegister(dailyRegisterId){
    let dailyRegister = await getDailyRegisterById(dailyRegisterId);

    if(dailyRegister.errorMessage)
        return {errorType: dailyRegister.errorType, errorMessage: dailyRegister.errorMessage};

    return dailyRegister.foods;
}

async function addFoodEatenInDailyRegister(dailyRegisterId, foodEaten){
    let dailyRegister = await getDailyRegisterById(dailyRegisterId);

    if(dailyRegister.errorMessage)
        return {errorType: dailyRegister.errorType, errorMessage: dailyRegister.errorMessage};

    if(!foodEaten.kcal || foodEaten.kcal == 0)
        foodEaten.kcal = foodEaten.carb * 4 + foodEaten.protein * 4 + foodEaten.fat * 9;

    dailyRegister.foods.push(foodEaten);

    let totalCarb = dailyRegister.foods.map(item => item.carb).reduce((prev, next) => prev + next);
    let totalProtein = dailyRegister.foods.map(item => item.protein).reduce((prev, next) => prev + next);
    let totalFat = dailyRegister.foods.map(item => item.fat).reduce((prev, next) => prev + next);
    let totalKcal = dailyRegister.foods.map(item => item.kcal).reduce((prev, next) => prev + next);
 
    const session = await Gymgoer.Model.startSession();
    session.startTransaction();
    let updateResult;
    
    try{
        //Salvando alimento em dailyRegister
        updateResult = await Gymgoer.Model.updateOne(
            {'dailyRegisters._id': dailyRegisterId}, 
            {'$set': {
                'dailyRegisters.$.totalCarb': totalCarb,
                'dailyRegisters.$.totalProtein': totalProtein,
                'dailyRegisters.$.totalFat': totalFat,
                'dailyRegisters.$.totalKcal': totalKcal,
                'dailyRegisters.$.foods': dailyRegister.foods
            }}, 
            {runValidators: true});

        //Salvando alimento em foodSaved
        let newFoodSaved = {
            name: foodEaten.name,
            description: foodEaten.description,
            carbPer100g: foodEaten.carb / foodEaten.gramsAmount * 100,
            proteinPer100g: foodEaten.protein / foodEaten.gramsAmount * 100,
            fatPer100g: foodEaten.protein / foodEaten.gramsAmount * 100,
            kcalPer100g: foodEaten.kcal / foodEaten.gramsAmount * 100
        }

        let gymgoerDb = await Gymgoer.Model.findOne({'dailyRegisters._id': dailyRegisterId});
        await foodSavedService.createNewFoodSaved(gymgoerDb._id, newFoodSaved);

        await session.commitTransaction();
        session.endSession();
    } catch (err) {
        return {errorType: 500, errorMessage: err}; 
    }

    return updateResult;
}

async function deleteFoodEatenInDailyRegister(dailyRegisterId, foodId){
    let dailyRegister = await getDailyRegisterById(dailyRegisterId);

    if(dailyRegister.errorMessage)
        return {errorType: dailyRegister.errorType, errorMessage: dailyRegister.errorMessage};

    let foodInArray = dailyRegister.foods.filter(food => food._id == foodId)[0];

    if(!foodInArray)
        return {errorType: 404, errorMessage: 'Food not found'};

    let indexToRemove = dailyRegister.foods.indexOf(foodInArray);

    dailyRegister.foods.splice(indexToRemove, 1);

    let totalCarb = dailyRegister.foods.map(item => item.carb).reduce((prev, next) => prev + next);
    let totalProtein = dailyRegister.foods.map(item => item.protein).reduce((prev, next) => prev + next);
    let totalFat = dailyRegister.foods.map(item => item.fat).reduce((prev, next) => prev + next);
    let totalKcal = dailyRegister.foods.map(item => item.kcal).reduce((prev, next) => prev + next);

    let updateResult = await Gymgoer.Model.updateOne(
                                {'dailyRegisters._id': dailyRegisterId}, 
                                {'$set': {
                                    'dailyRegisters.$.totalCarb': totalCarb,
                                    'dailyRegisters.$.totalProtein': totalProtein,
                                    'dailyRegisters.$.totalFat': totalFat,
                                    'dailyRegisters.$.totalKcal': totalKcal,
                                    'dailyRegisters.$.foods': dailyRegister.foods
                                }}, 
                                {runValidators: true});

    return updateResult;
}
//#endregion

module.exports.getDailyRegisterById = getDailyRegisterById;
module.exports.createNewDailyRegister = createNewDailyRegister;
module.exports.getDailyRegisterByDate = getDailyRegisterByDate;
module.exports.getAllDailyRegistersByGymgoerId = getAllDailyRegistersByGymgoerId;
module.exports.getAllFoodEatenInDailyRegister = getAllFoodEatenInDailyRegister;
module.exports.addFoodEatenInDailyRegister = addFoodEatenInDailyRegister;
module.exports.deleteFoodEatenInDailyRegister = deleteFoodEatenInDailyRegister;