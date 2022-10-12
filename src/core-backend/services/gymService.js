const Gym = require('../models/Gym');

async function getGymById(gymId){
    let gym = await Gym.Model.findById(gymId);

    if(gym == null)
        return {errorType: 404, errorMessage: 'Gym not found'};

    return gym;
}

async function createNewGym(gym) { 
    let newGym = new Gym.Model({
        name: gym.name,
        description: gym.description,
        address: gym.address
    });

    let gymDb = await newGym.save();

    return gymDb;
}

async function getAllGyms(){
    let gyms = await Gym.Model.find();

    if(gyms == null || gyms.length == 0)
        return {errorType: 404, errorMessage: 'There is no gym in database'};

    return gyms;
}

async function updateGymById(gymId, gym){
    let gymDb = await this.getGymById(gymId);

    if(gymDb._id == null)
        return {errorType: 404, errorMessage: 'Gym not found'};

    gymDb.name = gym.name != null ? gym.name : gymDb.name;
    gymDb.description = gym.description != null ? gym.description : gymDb.description;
    gymDb.address = gym.address != null ? gym.address : gymDb.address;

    return gymDb.save();
}

module.exports.createNewGym = createNewGym;
module.exports.getAllGyms = getAllGyms;
module.exports.getGymById = getGymById;
module.exports.updateGymById = updateGymById;