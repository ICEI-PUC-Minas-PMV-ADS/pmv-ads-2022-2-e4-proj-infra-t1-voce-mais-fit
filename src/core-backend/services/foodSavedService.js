const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
const foodApi = require('../external-services/foodApi');
const mongoose = require('mongoose');

async function getFoodSavedById(foodSavedId){
    let gymgoer = await Gymgoer.Model.findOne({'foodSaved._id': foodSavedId});

    if(gymgoer == null)
        return {errorType: 404, errorMessage: 'Food not found'};

    let foodSaved = gymgoer.foodSaved.filter(foodSaved => foodSaved._id == foodSavedId)[0];

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
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    //todo buscar pra ver se nao existe comida igual

    let newFoodSaved = {
        _id: mongoose.Types.ObjectId(),
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
    let oldFoodSaved = await getFoodSavedById(foodSavedId);

    if(oldFoodSaved.errorMessage)
        return {errorType: oldFoodSaved.errorType, errorMessage: oldFoodSaved.errorMessage};

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

    if(!updateResult.acknowledged || updateResult.matchedCount == 0)
        return {errorType: 500, errorMessage: "Cannot update Food Saved"};

    return await getFoodSavedById(foodSavedId);        
}

async function searchFoodByGymgoerId(gymgoerId, query){
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};
        
    let resultByGymgoer = gymgoer.foodSaved;
    if(query) resultByGymgoer = gymgoer.foodSaved.filter(p => new RegExp(query, 'i').test(p.name));

    let resultByFoodApi = await foodApi.searchFood(query);

    let totalResult  = resultByGymgoer.concat(resultByFoodApi);

    return totalResult;
}

async function searchFood(query){
    let result = await foodApi.searchFood(query);

    if(!result || result.length == 0)
        return {errorType: 404, errorMessage: 'Foods not found'};

    return result;
}

module.exports.createNewFoodSaved = createNewFoodSaved;
module.exports.getAllFoodSavedByGymgoerId = getAllFoodSavedByGymgoerId;
module.exports.getFoodSavedById = getFoodSavedById;
module.exports.updateFoodSavedById = updateFoodSavedById;
module.exports.searchFood = searchFood;
module.exports.searchFoodByGymgoerId = searchFoodByGymgoerId;