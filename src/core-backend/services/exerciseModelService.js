const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
const mongoose = require('mongoose');

async function getExerciseModelById(exerciseModelId){
    let exerciseModel = await Gymgoer.Model.find({'exerciseModel._id': exerciseModelId});

    if(exerciseModel == null)
        return {errorType: 404, errorMessage: 'Exercise Model not found'};

    return exerciseModel;
}

async function getAllExerciseModelsByGymgoerId(gymgoerId){
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    return gymgoer.exerciseModels;
}

async function createNewExerciseModel(gymgoerId, exerciseModel) {
    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    let newExerciseModel = {
        _id: mongoose.Types.ObjectId(),
        name: exerciseModel.name,
        description: exerciseModel.description,
        exercises: exerciseModel.exercises
    };

    gymgoer.exerciseModels.push(newExerciseModel);
        await gymgoer.save();

    return {gymgoerId: gymgoer._id, newExerciseModel};
}

async function updateExerciseModelById(exerciseModelsId, exerciseModels){
    let updateResult = await Gymgoer.Model.updateOne(
                                    {'exerciseModels._id': exerciseModelsId}, 
                                    {'$set': {
                                        'exerciseModels.$.name': exerciseModels.name,
                                        'exerciseModels.$.description': exerciseModels.description,
                                        'exerciseModels.$.exercises': exerciseModels.exercises
                                    }}, 
                                    {runValidators: true});

    return updateResult;
}

    
async function getAllExerciseByExerciseModelId(exerciseModelId){
    let exercises = await Gymgoer.Model.aggregate([
        { $unwind: "$exerciseModels" },
        { $match: { 'exerciseModels._id': mongoose.Types.ObjectId(exerciseModelId)} },
        { $replaceRoot: { newRoot: "$exerciseModels" }},
        { $project: { exercises: 1}}
    ]);

    return exercises;
}

module.exports.createNewExerciseModel = createNewExerciseModel;
module.exports.getAllExerciseModelsByGymgoerId = getAllExerciseModelsByGymgoerId;
module.exports.getExerciseModelById = getExerciseModelById;
module.exports.updateExerciseModelById = updateExerciseModelById;
module.exports.getAllExerciseByExerciseModelId = getAllExerciseByExerciseModelId;