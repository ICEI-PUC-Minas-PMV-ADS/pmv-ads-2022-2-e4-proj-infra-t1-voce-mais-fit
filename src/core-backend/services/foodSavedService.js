const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
const mongoose = require('mongoose');

async function getFoodSavedById(foodSavedId){
    let foodSaved = await Gymgoer.Model.find({'foodSaved._id': foodSavedId});

    if(foodSaved == null)
        return {errorType: 404, errorMessage: 'Food not found'};

    return foodSaved;
}

async function getAllFoodSavedByGymgoerId(gymgoerId){
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    return gymgoer.foodSaved;
}

async function createNewFoodSaved(gymgoerId, foodSaved) {
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gym not found'};

    let newFoodSaved = {
        _id: mongoose.Types.ObjectId(), //inserindo _id manualmente para poder retornar no response
        name: foodSaved.name,
        carbPer100g: foodSaved.carbPer100g,
        proteinPer100g: foodSaved.proteinPer100g,
        fatPer100g: foodSaved.fatPer100g,
        kcalPer100g: foodSaved.kcalPer100g
    };

    gymgoer.foodSaved.push(newFoodSaved);
        await gymgoer.save();

    return {gymgoerId: gymgoer._id, newFoodSaved};
}


async function updateFoodSavedById(foodSavedId, foodSaved){
    if(!foodSaved.kcalPer100g || foodSaved.kcalPer100g == 0)
        foodSaved.kcalPer100g = ((foodSaved.carbPer100g * 4) + (foodSaved.proteinPer100g * 4) + (foodSaved.fatPer100g * 9));

    let updateResult = await Gymgoer.Model.updateOne(
                                    {'foodSaved._id': foodSavedId}, 
                                    {'$set': {
                                        'foodSaved.$.name': foodSaved.name,
                                        'foodSaved.$.carbPer100g': foodSaved.carbPer100g,
                                        'foodSaved.$.proteinPer100g': foodSaved.proteinPer100g,
                                        'foodSaved.$.fatPer100g': foodSaved.fatPer100g,
                                        'foodSaved.$.kcalPer100g': foodSaved.kcalPer100g
                                    }}, 
                                    {runValidators: true});

    return updateResult;
}

module.exports.createNewFoodSaved = createNewFoodSaved;
module.exports.getAllFoodSavedByGymgoerId = getAllFoodSavedByGymgoerId;
module.exports.getFoodSavedById = getFoodSavedById;
module.exports.updateFoodSavedById = updateFoodSavedById;