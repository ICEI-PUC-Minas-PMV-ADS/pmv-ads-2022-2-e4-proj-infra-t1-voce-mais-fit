const gymService = require('../services/gymService');
const Gym = require('../models/Gym');

let databaseMock = [
    {
        _id: "637c2a13907bed0e49c1dde9",
        name: "Academia 1",
        description: "Descrição 1",
        address: "Endereço 1",
        announcements: [],
        trainers: []
    },
    {
        _id: "637c2a13907bed0e49c1dde0",
        name: "Academia 2",
        description: "Descrição 2",
        address: "Endereço 2",
        announcements: [],
        trainers: []
    }
]

describe('Get All Gyms', () => {
    it('should return an array of Gyms if database has data', async () => {
        Gym.Model.find = jest.fn(() => { return databaseMock })

        let data = await gymService.getAllGyms();

        expect(data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.anything(),
                    name: expect.any(String),
                    description: expect.any(String),
                    address: expect.any(String),
                    announcements: [],
                    trainers: []
                })
            ])
        )
    })

    it('should return an error 404 if database is empty', async () => {
        Gym.Model.find = jest.fn(() => { return [] })

        let data = await gymService.getAllGyms();

        expect(data).toMatchObject({
            errorType: 404
        }) 
    })
})

describe('Get Gym by Id', () => {
    Gym.Model.findById = jest.fn((gymId) => {
        return databaseMock.filter(gyms => gyms._id == gymId)[0];
    })
    
    it('should return an Gym if Id match', async () => {
        let data = await gymService.getGymById('637c2a13907bed0e49c1dde9');

        expect(data).toMatchObject({
            _id: expect.anything(),
            name: expect.any(String),
            description: expect.any(String),
            address: expect.any(String),
            announcements: [],
            trainers: [],
        })
    })

    it('should return an error 404 if Id does not match', async () => {
        let data = await gymService.getGymById('637c2a13907bed0e49c1ddf9');

        expect(data).toMatchObject({
            errorType: 404
        }) 
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