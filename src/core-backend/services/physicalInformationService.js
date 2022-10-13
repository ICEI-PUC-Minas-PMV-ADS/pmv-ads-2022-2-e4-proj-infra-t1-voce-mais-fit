const PhysicalInformation = require('../models/PhysicalInformation');
const gymgoerService = require('../services/gymgoerService');

async function getByGymgoerId(gymgoerId){
    let gymgoerDb = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoerDb._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    if(gymgoerDb.physicalInformation == null)
        return {errorType: 404, errorMessage: 'Physical Information not found'};

    return gymgoerDb.physicalInformation;
}

async function createNewPhysicalInformation(gymgoerId, physicalInformation){
    let gymgoerDb = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoerDb._id == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    gymgoerDb.physicalInformation = physicalInformation;

    return gymgoerDb.save();
}

async function upsertPhysicalInformation(gymgoerId, physicalInformation) {    
    let physicalInformationDb = await this.getByGymgoerId(gymgoerId);

    if(physicalInformationDb._id == null)
        return await this.createNewPhysicalInformation(gymgoerId, physicalInformation);
    
    physicalInformationDb.geneticSex = physicalInformation.geneticSex != null ? physicalInformation.geneticSex : physicalInformationDb.geneticSex;
    physicalInformationDb.weightGoal = physicalInformation.weightGoal != null ? physicalInformation.weightGoal : physicalInformationDb.weightGoal;
    physicalInformationDb.age = physicalInformation.age != null ? physicalInformation.age : physicalInformationDb.age;
    physicalInformationDb.weigth = physicalInformation.weigth != null ? physicalInformation.weigth : physicalInformationDb.weigth;
    physicalInformationDb.heigth = physicalInformation.heigth != null ? physicalInformation.heigth : physicalInformationDb.heigth;

    return await physicalInformationDb.save();
}

module.exports.upsertPhysicalInformation = upsertPhysicalInformation;