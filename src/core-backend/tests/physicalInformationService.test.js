const physicalInformationService = require('../services/physicalInformationService');

describe('Get Physical Information by Gymgoer Id', () => {
    it('should return the Physical Information of an Gymgoer if Id match', async () => {
        //todo: implement
    })

    it('should return an error 404 if Id does not match any Gymgoer', async () => {
        //todo: implement
    })
})

describe('Upsert Physical Information by Gymgoer Id', () => {
    it('should return an error 404 if Id does not match any Gymgoer', async () => {
        //todo: implement
    })

    it('should keep same properties if they are not given', async () => {
        //todo: implement
    })

    it('should update properties if they are given', async () => {
        //todo: implement
    })

    it('should return an error 500 if any properties are to be saved as null', async () => {
        //todo: implement
    })

    it('should actual tbm cannot be equal previous tbm if weight, height or age changes', async () => {
        //todo: implement
    })

    it('should actual imc cannot be equal previous imc if weight or height changes', async () => {
        //todo: implement
    })

    it('should actual Daily Kcal Consumption cannot be equal previous Daily Kcal Consumption if Tbm or Weight Goal changes', async () => {
        //todo: implement
    }) 
})