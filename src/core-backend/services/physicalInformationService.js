const gymgoerService = require('../services/gymgoerService');

async function upsertPhysicalInformationByGymgoerId(gymgoerId, physicalInformation) {    
    let gymgoerDb = await gymgoerService.getGymgoerById(gymgoerId);
    
    gymgoerDb.physicalInformation.geneticSex = physicalInformation.geneticSex != null ? physicalInformation.geneticSex : gymgoerDb.physicalInformation.geneticSex;
    gymgoerDb.physicalInformation.weightGoal = physicalInformation.weightGoal != null ? physicalInformation.weightGoal : gymgoerDb.physicalInformation.weightGoal;
    gymgoerDb.physicalInformation.age = physicalInformation.age != null ? physicalInformation.age : gymgoerDb.physicalInformation.age;
    gymgoerDb.physicalInformation.weight = physicalInformation.weight != null ? physicalInformation.weight : gymgoerDb.physicalInformation.weight;
    gymgoerDb.physicalInformation.height = physicalInformation.height != null ? physicalInformation.height : gymgoerDb.physicalInformation.height;

    //TODO: calcular automaticamente valores de kcal, tmb e imc

    return await gymgoerDb.save();
}

module.exports.upsertPhysicalInformationByGymgoerId = upsertPhysicalInformationByGymgoerId;