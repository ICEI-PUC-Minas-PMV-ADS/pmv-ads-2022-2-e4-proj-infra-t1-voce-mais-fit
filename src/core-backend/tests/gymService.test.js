const gymService = require('../services/gymService');
const Gym = require('../models/Gym');

describe('Get All Gyms', () => {
    it('should return an array of Gyms if database has data', () => {
        //todo: implement
    })

    it('should return an error 404 if database is empty', () => {
        //todo: implement
    })
})

describe('Get Gym by Id', () => {
    it('should return an Gym if Id match', () => {
        //todo: implement
    })

    it('should return an error 404 if Id does not match', () => {
        //todo: implement
    })
})

describe('Create New Gyms', () => {
    it('should add a new Gym to the database if Model is valid', () => {
        //todo: implement
    })

    it('should return an exception if model is invalid', () => {
        //todo: implement
    })
})

describe('Update Gym by Id', () => {
    it('should return an error 404 if Id doesnt match any Gym', async () => {
        //todo: implement
    })

    it('should keep same properties if they are not given', async () => {
        //todo: implement
    })

    it('should update properties if they are given', async () => {
        //todo: implement
    })
})