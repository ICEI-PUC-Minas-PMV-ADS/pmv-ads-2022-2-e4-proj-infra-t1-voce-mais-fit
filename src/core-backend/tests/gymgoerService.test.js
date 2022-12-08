const gymgoerService = require('../services/gymgoerService');
const Gymgoer = require('../models/Gymgoer');

const databaseMock = [
    {
        _id: "637c2e4d907bed0e49c1de07",
        name: "Felipe Bohm",
        whatsapp: "999999",
        dailyRegisters: [],
        exerciseModels: [],
        foodSaved: [],
        authCodes: [{
            code: 'abc123',
            expirationDate: 1670261690092
        }]
    },
    {
        _id: "637c2a13907bed0e49c1dde8",
        name: "Gabriel ilidio",
        whatsapp: 319888666,
        dailyRegisters: [],
        exerciseModels: [],
        foodSaved: [],
        authCodes: [{
            code: 'def456',
            expirationDate: new Date(Date.now + 300000)
        }]
    },
]

describe('Get all Gymgoers', () => {
    it('should return an array of Gymgoers if database has data', async () => {
        let functionMock = jest
        .spyOn(Gymgoer.Model, 'find')
        .mockImplementation(() => {
            return databaseMock;
        })
    
        let data = await gymgoerService.getAllGymgoers();
    
        expect(data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.anything(),
                    name: expect.any(String),
                    whatsapp: expect.any(String),
                    dailyRegisters: [],
                    exerciseModels: [],
                    foodSaved: [],
                    authCodes: [expect.objectContaining({
                        code: expect.any(String),
                        expirationDate: expect.any(Number)
                    })]
                })
            ])
        )
        
        functionMock.mockRestore();
    })

    it('should return an error 404 if database is null', async () => {
        Gymgoer.Model.find = jest.fn(() => {
            return null;
        })
    
        let data = await gymgoerService.getAllGymgoers();
    
        expect(data).toMatchObject({
                errorType: 404
        })      
    })
})

describe('Get Gymgoer by Id', () => {
    Gymgoer.Model.findById = jest.fn((gymgoerId) => {
        return databaseMock.filter(gymgoers => gymgoers._id == gymgoerId)[0];
    })

    it('should return a Gymgoer if Id match', async () => {
        let data = await gymgoerService.getGymgoerById('637c2e4d907bed0e49c1de07');

        expect(data).toMatchObject({
            _id: expect.anything(),
            name: expect.any(String),
            whatsapp: expect.any(String),
            dailyRegisters: [],
            exerciseModels: [],
            foodSaved: [],
            authCodes: [expect.objectContaining({
                code: expect.any(String),
                expirationDate: expect.any(Number)
            })]
        })
    })

    it('should return an error 404 if Id does not match', async () => {
        let data = await gymgoerService.getGymgoerById('637c2e4d907bed0e49c1de08');

        expect(data).toMatchObject({
            errorType: 404
        })   
    })
})

describe('Get Gymgoer by Valid Auth Code', () => {
    it('should return a Gymgoer if a valid (existent and not expired) Auth Code is given', async () => {
        Gymgoer.Model.findOne = jest.fn(() => { return databaseMock[1] })

        let data = await gymgoerService.getGymgoerByValidAuthCode('def456');

        expect(data._id).toBe('637c2a13907bed0e49c1dde8')

    })

    it('should return an error 404 if Auth Code doest match any Gymgoer', async () => {
        Gymgoer.Model.findOne = jest.fn(() => { return null })

        let data = await gymgoerService.getGymgoerByValidAuthCode('abc234234234123');

        expect(data).toMatchObject({
            errorType: 404
        })   
    })

    it('should return an error 403 if Auth Code match a Gymgoer, but is expired', async () => {
        Gymgoer.Model.findOne = jest.fn(() => { return databaseMock[0] })

        let data = await gymgoerService.getGymgoerByValidAuthCode('abc123');

        expect(data).toMatchObject({
            errorType: 403
        })   
    })
})

describe('Create New Gymgoer', () => {
    it('should add a new Gymgoer to the database if Model is correct', async () => {
        //todo: implement
    })

    it('should return an error if Model is incorrect', async () => {
        //todo: implement
    })
})

describe('Update Gymgoer by Id', () => {
    it('should return an error 404 if Id doesnt match any Gymgoer', async () => {
        //todo: implement
    })

    it('should keep same properties if they are not given', async () => {
        //todo: implement
    })

    it('should update properties if they are given', async () => {
        //todo: implement
    })
})

describe('Generate AuthCode', () => {
    it('should return an error 404 if Id doesnt match any Gymgoer', async () => {
        //todo: implement
    })

    it('should create expirationDate with the exact time difference between minutes given and createdDate', async () => {
        //todo: implement
    })

    it('should add the Auth Code to the Gymgoer', async () => {
        //todo: implement
    })
})