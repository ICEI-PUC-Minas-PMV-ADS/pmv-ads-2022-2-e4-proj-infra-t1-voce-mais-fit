const trainerService = require('../services/trainerService');

describe('Get All Trainers', () => {
    it('should return an array of Trainers if database has data', () => {
        //todo: implement
    })

    it('should return an error 404 if database is null', () => {
        //todo: implement
    })
})

describe('Get Trainer by Id', () => {
    it('should return a Trainer if Id match', async () => {
        //todo: implement
    })

    it('should return an error 404 if Id does not match', async () => {
        //todo: implement
    })
})

describe('Create New Trainer', () => {
    it('should add a new Trainer to the database if Model is correct', async () => {
        //todo: implement
    })

    it('should return an error if Model is incorrect', async () => {
        //todo: implement
    })
})

describe('Update Trainer by Id', () => {
    it('should return an error 404 if Id doesnt match any Trainer', async () => {
        //todo: implement
    })

    it('should keep same properties if they are not given', async () => {
        //todo: implement
    })

    it('should update properties if they are given', async () => {
        //todo: implement
    })
})