const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
const mongoose = require('mongoose');

//#region DailyRegister
async function getDailyRegisterById(dailyRegisterId){
    //TODO get by id
}

async function getDailyRegisterByDate(date){
    //TODO: get pela data (sempre vai haver um unico registro para cada dia), se nao existir, criar na hora e devolver
}

async function getAllDailyRegistersByGymgoerId(gymgoerId){
    //TODO pegar todos os daily register pelo gymgoerid
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

