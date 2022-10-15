const gymgoerService = require('../services/gymgoerService');
const trainerService = require('../services/trainerService');
const User = require('../models/User');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = "opsdfpsdfPAMAOSDNVSVMkdspamdvpaskdmvm";

async function createNewUser(user) {
    let trainerInfo;
    let gymgoerInfo;

    //TODO: transaction

    if(user.userType == 'gymgoer'){
        let gymgoer = {
            name: user.name, 
            whatsapp: user.whatsapp,
        };

        gymgoerInfo = await gymgoerService.createNewGymgoer(gymgoer);
    }
    
    if(user.userType == 'trainer'){
        let trainer = {
            name: user.name, 
            whatsapp: user.whatsapp,
            workHoursDescription: user.workHoursDescription
        };

        trainerInfo = await trainerService.createNewTrainer(trainer);
    }
    

   // const salt = await bcrypt.genSalt(10);
   // const passwordHash = await bcrypt.hash(user.password, salt)

    let newUser = new User.Model({
        email: user.email,
        password: user.password,
        userType: user.userType,
        gymgoerInfo: user.userType == 'gymgoer' ? gymgoerInfo._id : null,
        trainerInfo: user.userType == 'trainer' ? trainerInfo._id : null,
    });

    let userDb = await newUser.save();

    return userDb;
}

async function getAllUsers(){
    let users = await User.Model.find();

    if(users == null || users.length == 0)
        return {errorType: 404, errorMessage: 'There is no user in database'};

    return users;
}


async function deleteUserById(userId){
    try{
        let user = await User.Model.findByIdAndDelete(userId);
        return {error: false, message: "Excluido com sucesso"}

    }catch(err){
        return {errorType: 404, errorMessage: 'There is no user in database'};
    }
    
}


async function getUserById(userId){
    let user = await User.Model.findById(userId);

    if(user == null)
        return {errorType: 404, errorMessage: 'User not found'};

    return user;
}

async function updateUserById(userId, user){
    let userDb = await this.getUserById(userId);

    if(userDb == null)
        return {errorType: 404, errorMessage: 'User not found'};

    if(user.userType != null && user.userType != userDb.userType)
        return {errorType: 500, errorMessage: 'Cannot change user type'};

    userDb.email = user.email != null ? user.email : userDb.email;
    userDb.password = user.password != null ? user.password : userDb.password;

    return userDb.save();
}


module.exports.createNewUser = createNewUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;