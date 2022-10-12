const Gymgoer = require('../models/Gymgoer');

async function getGymgoerById(gymgoerId){
    let gymgoer = await Gymgoer.Model.findById(gymgoerId);

    if(gymgoer == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    return gymgoer;
}

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

async function updateGymgoerById(gymgoerId, gymgoer){
    let gymgoerDb = await this.getGymgoerById(gymgoerId);

    if(gymgoerDb._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    gymgoerDb.name = gymgoer.name != null ? gymgoer.name : gymgoerDb.name;
    gymgoerDb.whatsapp = gymgoer.whatsapp != null ? gymgoer.whatsapp : gymgoerDb.whatsapp;

    return gymgoerDb.save();
}

module.exports.createNewGymgoer = createNewGymgoer;
module.exports.getGymgoerById = getGymgoerById;
module.exports.updateGymgoerById = updateGymgoerById;