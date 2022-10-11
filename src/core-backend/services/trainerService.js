const Trainer = require('../models/Trainer');

async function createNewTrainer(trainer) {    
    let newTrainer = new Trainer.Model({
        name: trainer.name,
        whatsapp: trainer.whatsapp,
        workHoursDescription: trainer.workHoursDescription
    });

    let trainerDb = await newTrainer.save();

    return trainerDb;
}

module.exports.createNewTrainer = createNewTrainer;