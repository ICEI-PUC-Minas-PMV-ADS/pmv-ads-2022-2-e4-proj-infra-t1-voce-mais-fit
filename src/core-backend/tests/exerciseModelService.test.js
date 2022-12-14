const exerciseModelService = require('../services/exerciseModelService');

//#region ExerciseModel
describe('Get Exercise Model by Id', () => {
    it('should return a Exercise Model if Id match', async () => {
        //todo: implement
    })

    it('should return an error 404 if Id does not match', async () => {
        //todo: implement
    })
})

describe('Get all Exercise Models by GymgoerId', () => {
    it('should return an array of Exercise Models if database has data', async () => {
        //todo: implement
    })

    it('should return an array of empty array if database is null', async () => {
        //todo: implement
    })

    it('should return an error 404 if Gymgoer not found', async () => {
        //todo: implement
    })
})

describe('Create new Exercise Model', () => {
    it('should return an error 404 if Gymgoer not found', async () => {
        //todo: implement
    })

    it('should add a new Exercise Model to the database if Model is correct', async () => {
        //todo: implement
    })

    it('should add a YoutubeUrl for each exercise in ExerciseModel', async () => {
        //todo: implement
    })
})

describe ('Update Exercise Model by Id', () => {
    it('should return an error 404 if Id does not match', async () => {
        //todo: implement
    })

    it('should keep same properties if they are not given', async () => {
        //todo: implement
    })

    it('should update properties if they are given', async () => {
        //todo: implement
    })
})
//#endregion

//#region Exercise inside Exercise Model
describe('Get All Exercise By Exercise Model Id', () => {
    it('should return an array of Exercises if database has data', async () => {
        //todo: implement
    })

    it('should return an error 404 if there is no Exercise', async () => {
        //todo: implement
    })
})

describe('Add Exercise in Exercise Model', () => {
    it('should return an error 404 if there is no Exercise Model', async () => {
        //todo: implement
    })

    it('should return the Exercises in the Exercise Model, with the newly added Exercise', async () => {
        //todo: implement
    })
})

describe('Delete Exercise from Exercise Model', () => {
    it('should return an error 404 if there is no Exercise Model', async () => {
        //todo: implement
    })

    it('should return an Update Result', async () => {
        //todo: implement
    })
})
//#endregion