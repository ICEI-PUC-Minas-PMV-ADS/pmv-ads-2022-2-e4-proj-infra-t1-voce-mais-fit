const axios = require('axios');
const translateApi = require('./translateApi');

//todo criar varias api key
const getApiKey = () => {
    let apiKeyList = [
        '95f6fa5e5c9d4f0a9d1a9f92d970ee01'
    ];

    let randomKey = apiKeyList[Math.floor(Math.random() * apiKeyList.length)];

    return randomKey;
};

async function searchFood(queryPortuguese){
    let queryEnglish = await translateApi.portugueseToEnglish(queryPortuguese);

    let result = [];

    try{
        let response = await await axios.get('https://api.spoonacular.com/food/ingredients/search?query=' + queryEnglish + '&number=1', {
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