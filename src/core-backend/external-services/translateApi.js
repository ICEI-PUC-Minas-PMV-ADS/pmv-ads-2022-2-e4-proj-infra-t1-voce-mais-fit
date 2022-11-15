const axios = require("axios");
const internalDictionary = require('../utils/dictionaryEnPt');

const getRapidApiKey = () => {
    let rapidApiKeyList = [
        'f925efd88dmshe8f7e399c56488ep1fb094jsn2e1fe75385f3',
        '7b8abc1f81mshb7b8ca514a09a92p11a08ejsnf1cc8b90009a',
        'ec01fa8e35mshc22af4dc5bbd3bcp14c77ajsn775ea72335a9'
    ];

    let randomKey = rapidApiKeyList[Math.floor(Math.random() * rapidApiKeyList.length)];

    return randomKey;
};

async function translate(optionsData){
    let options = {
        method: 'POST',
        url: 'https://translo.p.rapidapi.com/api/v3/translate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': getRapidApiKey(),
          'X-RapidAPI-Host': 'translo.p.rapidapi.com'
        },
        data: optionsData
    };

    let response;

    try{
        response = await axios.request(options);

        if(!response || !response.data || !response.data.ok)
            return optionsData.get('text');

        return response.data.translated_text;

    }catch(e){
        console.log("Erro ao traduzir: " + e.response.data.message);
        return optionsData.get('text');
    }
}

async function portugueseToEnglish(text){
    let optionsData = new URLSearchParams();
    optionsData.append("from", "pt");
    optionsData.append("to", "en");
    optionsData.append("text", text);

    let result = internalDictionary.portugueseToEnglish(text);

    if(!result)
        result = await translate(optionsData);

    return result;
}

async function englishToPortuguese(text){
    let optionsData = new URLSearchParams();
    optionsData.append("from", "en");
    optionsData.append("to", "pt");
    optionsData.append("text", text);

    let result = internalDictionary.englishToPortuguese(text);

    if(!result)
        result = await translate(optionsData);

    return result;
}

module.exports.portugueseToEnglish = portugueseToEnglish;
module.exports.englishToPortuguese = englishToPortuguese;