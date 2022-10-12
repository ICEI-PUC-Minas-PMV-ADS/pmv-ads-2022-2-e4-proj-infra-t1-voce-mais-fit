const Trainer = require('../models/Trainer');

async function getTrainerById(trainerId){
    let trainer = await Trainer.Model.findById(trainerId);

    if(trainer == null)
        return {errorType: 404, errorMessage: 'Trainer not found'};

    return trainer;
}

async function createNewTrainer(trainer) {    
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

module.exports.createNewTrainer = createNewTrainer;
module.exports.getTrainerById = getTrainerById;
module.exports.updateTrainerById = updateTrainerById;