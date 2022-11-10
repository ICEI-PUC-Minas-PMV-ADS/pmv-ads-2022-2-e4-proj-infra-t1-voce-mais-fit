const Gymgoer = require('../models/Gymgoer');
const stringUtils = require('../utils/string');

async function getAllGymgoers(){
    let gymgoers = await Gymgoer.Model.find();

    if(!gymgoers || gymgoers.length == 0)
        return {errorType: 404, errorMessage: 'There is no Gymgoer in database'};

    return gymgoers;
}

async function getGymgoerById(gymgoerId){
    let gymgoer = await Gymgoer.Model.findById(gymgoerId);

    if(gymgoer == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    return gymgoer;
}

async function getGymgoerByValidAuthCode(authCode){
    let gymgoerDb = await Gymgoer.Model.findOne({'authCodes.code': authCode});

    if(gymgoerDb == null)
        return {errorType: 404, errorMessage: 'Gymgoer not found'};

    let authCodeDb = gymgoerDb.authCodes.filter(authCodes => authCodes.code == authCode)[0];

    if(authCodeDb.expirationDate < Date.now())
        return {errorType: 403, errorMessage: 'Auth code expired'};   

    return gymgoerDb;
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

async function generateAuthCode(gymgoerId, minutes = 5){
    let gymgoerDb = await getGymgoerById(gymgoerId);

    if(gymgoerDb.errorMessage)
        return {errorType: gymgoerDb.errorType, errorMessage: gymgoerDb.errorMessage};

    let now = Date.now();

    let authCode = {
        code: stringUtils.generateRandomText(6),
        createdDate: new Date(now),
        expirationDate: new Date(now + (minutes * 60000))
    }

    gymgoerDb.authCodes.push(authCode);

    await gymgoerDb.save();

    return authCode;
}

module.exports.createNewGymgoer = createNewGymgoer;
module.exports.getAllGymgoers = getAllGymgoers;
module.exports.getGymgoerById = getGymgoerById;
module.exports.updateGymgoerById = updateGymgoerById;
module.exports.generateAuthCode = generateAuthCode;
module.exports.getGymgoerByValidAuthCode = getGymgoerByValidAuthCode;