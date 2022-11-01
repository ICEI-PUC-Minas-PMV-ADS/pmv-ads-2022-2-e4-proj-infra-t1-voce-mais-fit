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

async function getDailyRegisterByDate(date){
    //TODO: get pela data (sempre vai haver um unico registro para cada dia), se nao existir, criar na hora e devolver
}

async function getAllDailyRegistersByGymgoerId(gymgoerId){
    //TODO pegar todos os daily register pelo gymgoerid
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

//#region Exercise in day
async function getAllExercisesInDaybyDailyRegisterId(dailyRegisterId){
    //TODO get all por id
}

async function addExerciseInDailyRegister(dailyRegisterId, exercise){
    //TODO adicionar exercicio no dia
}

async function deleteExerciseInDailyRegister(exerciseId){
    //TODO deletar exercicio no dia
}

//#endregion

module.exports.getDailyRegisterById = getDailyRegisterById;
module.exports.createNewDailyRegister = createNewDailyRegister;
