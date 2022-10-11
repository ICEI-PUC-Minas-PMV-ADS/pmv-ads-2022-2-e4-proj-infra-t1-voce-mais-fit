const Gymgoer = require('../models/Gymgoer');

async function createNewGymgoer(gymgoer) {    
    let newGymgoer = new Gymgoer.Model({
        name: gymgoer.name,
        whatsapp: gymgoer.whatsapp,
        physicalInformation: gymgoer.physicalInformation,
        foodModels: gymgoer.foodModels,
        exerciseModels: gymgoer.exerciseModels,
        dailyRegisters: gymgoer.dailyRegisters
    });

    let gymgoerDb = await newGymgoer.save();

    return gymgoerDb;
}

module.exports.createNewGymgoer = createNewGymgoer;