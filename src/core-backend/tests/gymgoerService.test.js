const gymgoerService = require('../services/gymgoerService');
const Gymgoer = require('../models/Gymgoer');

const databaseMock = [
    {
        "_id": "637c2e4d907bed0e49c1de07",
        "name": "Felipe Bohm",
        "whatsapp": "999999",
        "dailyRegisters": [],
        "exerciseModels": [],
        "foodSaved": [],
        "authCodes": []
    },
    {
        "_id": "637c2a13907bed0e49c1dde8",
        "name": "Gabriel ilidio",
        "whatsapp": "319888666",
        "dailyRegisters": [],
        "exerciseModels": [],
        "foodSaved": [],
        "authCodes": []
    },
]

describe('Get all Gymgoers', () => {
    it('should return a list of gymgoer if database has data', async () => {
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
                    authCodes: []
                })
            ])
        )
        
        functionMock.mockRestore();
    })

    it('should return 404 if database is null', async () => {
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
            authCodes: []
        })
    })

    it('should return 404 if Id doesnt match', async () => {
        let data = await gymgoerService.getGymgoerById('637c2e4d907bed0e49c1de08');

        expect(data).toMatchObject({
            errorType: 404
        })   
    })
})

describe('Get Gymgoer by Valid Auth Code', () => {
    it('should return a Gymgoer if a valid (existent and not expired) Auth Code is given', async () => {
        //todo: implement
    })

    it('should return 404 if Auth Code doest match any Gymgoer', async () => {
        //todo: implement
    })

    it('should return 403 if Auth Code match a Gymgoer, but is expired', async () => {
        //todo: implement
    })
})