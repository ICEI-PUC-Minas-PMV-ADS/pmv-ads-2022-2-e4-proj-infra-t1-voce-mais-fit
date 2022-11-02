const axios = require("axios");

const getRapidApiKey = () => {
    let rapidApiKeyList = [
        'f925efd88dmshe8f7e399c56488ep1fb094jsn2e1fe75385f3',
        '7b8abc1f81mshb7b8ca514a09a92p11a08ejsnf1cc8b90009a'
    ];

    let randomKey = rapidApiKeyList[Math.floor(Math.random() * rapidApiKeyList.length)];

    return randomKey;
};

async function translate(optionsData){
    let options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': getRapidApiKey(),
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: optionsData
    };

    let response;

    try{
        response = await axios.request(options);

        if(!response || !response.data || !response.data.data || !response.data.data.translations || response.data.data.translations.length == 0)
            return optionsData.get('q');

        return response.data.data.translations[0].translatedText;

    }catch(e){
        console.log("Erro ao traduzir: " + e.response.data.message);
        return optionsData.get('q');
    }
}

async function portugueseToEnglish(text){
    let optionsData = new URLSearchParams();
    optionsData.append("source", "pt");
    optionsData.append("target", "en");
    optionsData.append("q", text);

    let result = await translate(optionsData);

    return result;
}

async function englishToPortuguese(text){
    let optionsData = new URLSearchParams();
    optionsData.append("source", "en");
    optionsData.append("target", "pt");
    optionsData.append("q", text);

    let result = await translate(optionsData);

    return result;
}

module.exports.portugueseToEnglish = portugueseToEnglish;
module.exports.englishToPortuguese = englishToPortuguese;