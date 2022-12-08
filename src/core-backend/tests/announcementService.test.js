const announcementService = require('../services/announcementService');
const Gym = require('../models/Gym');

describe('Get Announcement by Id', () => {
    it('should return an Announcement if Id match', () => {
        //todo: implement
    })

    it('should return error 404 if Id does not match', () => {
        //todo: implement
    })
})

describe('Get All Announcements by Gym Id', () => {
    it('should return an array of Announcements if there are Announcements in Gym', () => {
        //todo: implement
    })

    it('should return an empty array if there are no Announcements in Gym', () => {
        //todo: implement
    })

    it('should return error 404 if Id does not match any Gym', () => {
        //todo: implement
    })
})

describe('Create New Announcement', () => {
    it('should add a new Announcement, with Id, in Gym', () => {
        //todo: implement
    })

    it('should return an error 404 if Id does not match any Gym', () => {
        //todo: implement
    })
})

describe('Update Announcement by Id', () => {
    it('should return an error 404 if Id does not match any Announcement', () => {
        //todo: implement
    })

    it('should return an exception if Model.Description is null', () => {
        //todo: implement
    })

    it('should return an update result if Model.Description is not null', () => {
        //todo: implement
    })
})