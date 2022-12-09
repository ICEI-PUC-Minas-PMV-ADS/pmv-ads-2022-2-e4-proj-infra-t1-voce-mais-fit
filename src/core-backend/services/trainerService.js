const Trainer = require('../models/Trainer');
const gymgoerService = require('../services/gymgoerService');

async function getAllTrainers(){
    let trainers = await Trainer.Model.find();

    if(!trainers || trainers.length == 0)
        return {errorType: 404, errorMessage: 'There is no Trainer in database'};

    return trainers;
}

async function getTrainerById(trainerId){
    let trainer = await Trainer.Model.findById(trainerId);

    if(trainer == null)
        return {errorType: 404, errorMessage: 'Trainer not found'};

    return trainer;
}

async function createNewTrainer(trainer) {    

    //TODO: receber Id da academia e salvar dentro da academia o id do trainer

    let newTrainer = new Trainer.Model({
        name: trainer.name,
        whatsapp: trainer.whatsapp,
        workHoursDescription: trainer.workHoursDescription
    });

    let trainerDb = await newTrainer.save();

    return trainerDb;
}

async function updateTrainerById(trainerId, trainer){
    let trainerDb = await this.getTrainerById(trainerId);

    if(trainerDb._id == null)
        return {errorType: 404, errorMessage: 'Trainer not found'};

    trainerDb.name = trainer.name != null ? trainer.name : trainerDb.name;
    trainerDb.whatsapp = trainer.whatsapp != null ? trainer.whatsapp : trainerDb.whatsapp;
    trainerDb.workHoursDescription = trainer.workHoursDescription != null ? trainer.workHoursDescription : trainerDb.workHoursDescription;

    return trainerDb.save();
}

async function linkGymgoerAndTrainer(trainerId, gymgoerId){
    let trainerDb = await this.getTrainerById(trainerId);
    
    if(trainerDb._id == null)
        return {errorType: 404, errorMessage: 'Trainer not found'};

    let gymgoer = await gymgoerService.getGymgoerById(gymgoerId);
    
    if(gymgoer._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};
        
    trainerDb.gymgoers.push(gymgoerId);

    return trainerDb.save();
}

module.exports.createNewTrainer = createNewTrainer;
module.exports.getTrainerById = getTrainerById;
module.exports.updateTrainerById = updateTrainerById;
module.exports.getAllTrainers = getAllTrainers;
module.exports.linkGymgoerAndTrainer = linkGymgoerAndTrainer;