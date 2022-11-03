const Gymgoer = require('../models/Gymgoer');
const gymgoerService = require('./gymgoerService');
const youtubeApi = require('../external-services/youtubeApi');
const mongoose = require('mongoose');

//#region ExerciseModel
async function getExerciseModelById(exerciseModelId){
    let gymgoer = await Gymgoer.Model.findOne({'exerciseModel._id': exerciseModelId});

    if(gymgoer == null)
        return {errorType: 404, errorMessage: 'Exercise Model not found'};

    let exerciseModel = gymgoer.exerciseModels.filter(exerciseModel => exerciseModel._id == exerciseModelId)[0];

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

    for(const exercise of exerciseModel.exercises)
        exercise.youtubeUrl = await youtubeApi.searchVideo(exercise.name);

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
//#endregion

//#region Exercise inside Exercise Model
async function getAllExerciseByExerciseModelId(exerciseModelId){
    let exercises = await Gymgoer.Model.aggregate([
        { $unwind: "$exerciseModels" },
        { $match: { 'exerciseModels._id': mongoose.Types.ObjectId(exerciseModelId)} },
        { $replaceRoot: { newRoot: "$exerciseModels" }},
        { $project: { exercises: 1}}
    ]);

    if(exercises == null || exercises.length == 0)
        return {errorType: 404, errorMessage: 'Exercises not found'};

    return exercises[0];
}

async function addExerciseInModel(exerciseModelId, exercise){
    let gymgoer = await Gymgoer.Model.findOne({'exerciseModels._id': mongoose.Types.ObjectId(exerciseModelId)});
    
    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    gymgoer.exerciseModels.filter(exerciseModel => exerciseModel._id == exerciseModelId)[0].exercises.push({
        name: exercise.name, 
        description: exercise.description,
        youtubeUrl: await youtubeApi.searchVideo(exercise.name),
    });

    let gymgoerDb = await gymgoer.save()

    return gymgoerDb.exerciseModels.filter(exerciseModel => exerciseModel._id == exerciseModelId)[0].exercises;
}

async function deleteExerciseInModel(exerciseId){
    let result = await Gymgoer.Model.updateOne(
        {'exerciseModels.exercises._id': mongoose.Types.ObjectId(exerciseId)},
        {      
            "$pull": {
                "exerciseModels.$.exercises":{
                "_id": mongoose.Types.ObjectId(exerciseId)
                }
            }
        }
    )

    if(result.modifiedCount == 0)
        return {errorType: 404, errorMessage: 'Exercise in Model not found'};

    return result;
}
//#endregion

module.exports.createNewExerciseModel = createNewExerciseModel;
module.exports.getAllExerciseModelsByGymgoerId = getAllExerciseModelsByGymgoerId;
module.exports.getExerciseModelById = getExerciseModelById;
module.exports.updateExerciseModelById = updateExerciseModelById;
module.exports.getAllExerciseByExerciseModelId = getAllExerciseByExerciseModelId;
module.exports.addExerciseInModel = addExerciseInModel;
module.exports.deleteExerciseInModel = deleteExerciseInModel;