const Gym = require('../models/Gym');
const gymService = require('./gymService');
const mongoose = require('mongoose');

async function getAnnouncementById(announcementId){
    let announcement = await Gym.Model.find({'announcements._id': announcementId});

    if(announcement == null)
        return {errorType: 404, errorMessage: 'Announcement not found'};

    return announcement;
}

async function getAllAnnouncementsByGymId(gymId){
    let gym = await gymService.getGymById(gymId);

    if(gym._id == null)
        return {errorType: 404, errorMessage: 'Gym not found'};

    return gym.announcements;
}

async function createNewAnnouncement(gymId, announcement) {
    let gym = await gymService.getGymById(gymId);

    if(gym._id == null)
        return {errorType: 404, errorMessage: 'Gym not found'};

    let newAnnouncement = {
        _id: mongoose.Types.ObjectId(), //inserindo _id manualmente para poder retornar no response
        description: announcement.description,
        date: Date.now()
    };

    gym.announcements.push(newAnnouncement);
        await gym.save();

    return {gymId: gym._id, newAnnouncement};
}


async function updateAnnouncementById(announcementId, announcement){
    let updateResult = await Gym.Model.updateOne(
                                    {'announcements._id': announcementId}, 
                                    {'$set': {'announcements.$.description': announcement.description}}, 
                                    {runValidators: true});

    return updateResult;
}

module.exports.createNewAnnouncement = createNewAnnouncement;
module.exports.getAllAnnouncementsByGymId = getAllAnnouncementsByGymId;
module.exports.getAnnouncementById = getAnnouncementById;
module.exports.updateAnnouncementById = updateAnnouncementById;