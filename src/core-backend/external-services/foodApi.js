const axios = require('axios');
const translateApi = require('./translateApi');

const getApiKey = () => {
    let apiKeyList = [
        '95f6fa5e5c9d4f0a9d1a9f92d970ee01',
        'db25d27c98294c198e717f75a2dac0ea',
        '33b02dfadb374ea3a3ba225f2cba7ad1',
        '63da49a598fe490fbd99e456385a360c',
        '691a9f1c34ba426295b91954525445ff',
        '94474dedf900449a80f7f8f7c91bdf47',
        'ad5acbc70e0844059e916bc6d56d8c47',
        'bd11e2db4f0945d4a78638499885a7f3',
        '287e04ca903f46acb58828bc5f2e7d73',
        '722a7e6d0ddf476b88d4573b537cea2e',
        '13a8b82ad6e44f7fa7a293e9b5440aa8',
        'c5286c526f23421aa3f68b949f7aefc6',
        '1862a75132ca4c04803b3c0ce60a60e5',
        '39814dfcc686468fada51532f843f6e2',
        '0b5c59737bda48cda59abbbeb9c71b5f',
        'b283d16f8b044b3e908a4a63ecff637b'
    ];

    let randomKey = apiKeyList[Math.floor(Math.random() * apiKeyList.length)];

    return randomKey;
};

async function searchFood(queryPortuguese){
    let queryEnglish = await translateApi.portugueseToEnglish(queryPortuguese);

    let result = [];

    try{
        let response = await axios.get('https://api.spoonacular.com/food/ingredients/search?query=' + queryEnglish + '&number=3', {
            headers: { 'x-api-key': getApiKey() }
        });

        for(let apiFood of response.data.results){
            let apiFoodDetails = await axios.get('https://api.spoonacular.com/food/ingredients/' + apiFood.id + '/information?amount=100&unit=grams', {
                headers: { 'x-api-key': getApiKey() }
            });

            result.push({
                name: await translateApi.englishToPortuguese(apiFoodDetails.data.name) || apiFoodDetails.data.name,
                carbPer100g: apiFoodDetails.data.nutrition.nutrients.filter(p => p.name == 'Carbohydrates').map(p => p.amount)[0],
                proteinPer100g: apiFoodDetails.data.nutrition.nutrients.filter(p => p.name == 'Protein').map(p => p.amount)[0],
                fatPer100g: apiFoodDetails.data.nutrition.nutrients.filter(p => p.name == 'Fat').map(p => p.amount)[0],
                kcalPer100g: apiFoodDetails.data.nutrition.nutrients.filter(p => p.name == 'Calories').map(p => p.amount)[0],
            })
        }
    
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
}

module.exports.searchFood = searchFood;