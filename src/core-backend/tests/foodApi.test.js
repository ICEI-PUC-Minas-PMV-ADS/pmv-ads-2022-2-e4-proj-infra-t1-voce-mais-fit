const foodApi = require('../external-services/foodApi');
const axios = require('axios');
const translateApi = require('../external-services/translateApi');

describe('Search Food', () => {
    let responseMock = {
        data: { 
            results: [ { id: 1123, name: 'egg', image: 'egg.png' } ]
        }
    }

    let responseDetailsMock = {
        data: {
            id: 1123,
            name: "eggs",
            nutrition: {
                nutrients: [
                    {
                        "name": "Fat",
                        "amount": 9.51,
                        "unit": "g",
                        "percentOfDailyNeeds": 14.63
                    },
                    {
                        "name": "Protein",
                        "amount": 12.6,
                        "unit": "g",
                        "percentOfDailyNeeds": 25.2
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.72,
                        "unit": "g",
                        "percentOfDailyNeeds": 0.24
                    },
                    {
                        "name": "Calories",
                        "amount": 143.0,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 7.15
                    }
                ]
            }
        }
    }

    axios.get = jest.fn((endpoint) => {
        if(endpoint.includes('search'))
            return responseMock;
        
        if(endpoint.includes('information'))
            return responseDetailsMock;
    })

    translateApi.portugueseToEnglish = jest.fn((text) => {
        if(text == "ovo")
            return "egg";

        else return null;
    })

    translateApi.englishToPortuguese = jest.fn((text) => {
        if(text == "egg")
            return "ovo";

        else return null;
    })

    it('should return an arry of food passing a portuguese query', async () => {
        let data = await foodApi.searchFood('ovo');

        expect(data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    carbPer100g: expect.any(Number),
                    proteinPer100g: expect.any(Number),
                    fatPer100g: expect.any(Number),
                    kcalPer100g: expect.any(Number)
                })
            ])
        )

    })

    it('should return an empty array if no food is found', async () => {
        axios.get = jest.fn((endpoint) => {
            if(endpoint.includes('search'))
                return {data: {results: []}};
            
            if(endpoint.includes('information'))
                return {status: "failure", code: 404 }
        })

        let data = await foodApi.searchFood('teste teste teste');       

        expect(data).toEqual(expect.arrayContaining([]));
    })

    it('should return null if an error is thrown', async () => {
        axios.get = jest.fn(() => {
            throw "Exception test"
        })

        let data = await foodApi.searchFood('teste'); 

        expect(data).toBeNull();
    })
});