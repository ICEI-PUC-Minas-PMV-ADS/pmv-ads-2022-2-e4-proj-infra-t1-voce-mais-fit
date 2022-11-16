const gymgoerService = require('../services/gymgoerService');

async function getPhysicalInformationByGymgoerId(gymgoerId){
    let gymgoerDb = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoerDb.errorMessage)
        return {errorType: gymgoerDb.errorType, errorMessage: gymgoerDb.errorMessage};

    return gymgoerDb.physicalInformation;
}

async function upsertPhysicalInformationByGymgoerId(gymgoerId, physicalInformation) {    
    let gymgoerDb = await gymgoerService.getGymgoerById(gymgoerId);

    if(gymgoerDb.errorMessage)
        return {errorType: gymgoerDb.errorType, errorMessage: gymgoerDb.errorMessage};
    
    gymgoerDb.physicalInformation.geneticSex = physicalInformation.geneticSex != null ? physicalInformation.geneticSex : gymgoerDb.physicalInformation.geneticSex;
    gymgoerDb.physicalInformation.weightGoal = physicalInformation.weightGoal != null ? physicalInformation.weightGoal : gymgoerDb.physicalInformation.weightGoal;
    gymgoerDb.physicalInformation.age = physicalInformation.age != null ? physicalInformation.age : gymgoerDb.physicalInformation.age;
    gymgoerDb.physicalInformation.weight = physicalInformation.weight != null ? physicalInformation.weight : gymgoerDb.physicalInformation.weight;
    gymgoerDb.physicalInformation.height = physicalInformation.height != null ? physicalInformation.height : gymgoerDb.physicalInformation.height;

    if(!gymgoerDb.physicalInformation.geneticSex)
        return {errorType: 500, errorMessage: 'Genetic Sex is required'};

    if(!gymgoerDb.physicalInformation.weightGoal)
        return {errorType: 500, errorMessage: 'Weight Goal is required'};

    if(!gymgoerDb.physicalInformation.age)
        return {errorType: 500, errorMessage: 'Age is required'};

    if(!gymgoerDb.physicalInformation.weight)
        return {errorType: 500, errorMessage: 'Weight is required'};

    if(!gymgoerDb.physicalInformation.height)
        return {errorType: 500, errorMessage: 'Height is required'};

    gymgoerDb.physicalInformation.tmb = calculateTmb(gymgoerDb.physicalInformation.geneticSex, gymgoerDb.physicalInformation.weight, gymgoerDb.physicalInformation.height, gymgoerDb.physicalInformation.age);
    gymgoerDb.physicalInformation.imc = calculateImc(gymgoerDb.physicalInformation.weight, gymgoerDb.physicalInformation.height);
    gymgoerDb.physicalInformation.dailyKcal = calculateDailyKcalConsumption(gymgoerDb.physicalInformation.tmb, gymgoerDb.physicalInformation.weightGoal);

    return await gymgoerDb.save();
}

function calculateTmb(geneticSex, weight, height, age){
    //usando altura em centímetros
    height = height * 100;

    //equação de Mifflin St. Jeor
    if(geneticSex == 'female')
        return (10 * weight) + (6.25 * height) + (5 * age) - 161;
    
    return (10 * weight) + (6.25 * height) + (5 * age) + 5;
}

function calculateImc(weight, height){
    return weight / (height * height);
}

function calculateDailyKcalConsumption(tmb, weightGoal){
    let factor = 1;

    if(weightGoal == 'lose')
        factor = 0.85;

    if(weightGoal == 'gain')
        factor = 1.15;
    
    //1.375 considerado modificador para nível atividade média/moderada
    return tmb * 1.375 * factor;
}

module.exports.upsertPhysicalInformationByGymgoerId = upsertPhysicalInformationByGymgoerId;
module.exports.getPhysicalInformationByGymgoerId = getPhysicalInformationByGymgoerId;