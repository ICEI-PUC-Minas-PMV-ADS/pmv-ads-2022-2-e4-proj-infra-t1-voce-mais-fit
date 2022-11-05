const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
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

    //todo ordenar pelo mais recente

    return gymgoer.dailyRegisters;   
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
    //TODO
}

async function addFoodEatenInDailyRegister(dailyRegisterId, foodEaten){
    //TODO, adicionar comida na lista, alem disso, recalcular os macros
}

async function deleteFoodEatenInDailyRegister(foodId){
    //TODO, remover comida da lista, alem disso, recalcular os macros
}
//#endregion

module.exports.getDailyRegisterById = getDailyRegisterById;
module.exports.createNewDailyRegister = createNewDailyRegister;
module.exports.getDailyRegisterByDate = getDailyRegisterByDate;
module.exports.getAllDailyRegistersByGymgoerId = getAllDailyRegistersByGymgoerId;
