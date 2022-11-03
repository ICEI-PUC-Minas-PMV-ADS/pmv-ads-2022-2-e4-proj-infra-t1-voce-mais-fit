const axios = require('axios');

const getRapidApiKey = () => {
    let rapidApiKeyList = [
        'f925efd88dmshe8f7e399c56488ep1fb094jsn2e1fe75385f3',
        '7b8abc1f81mshb7b8ca514a09a92p11a08ejsnf1cc8b90009a',
        'ec01fa8e35mshc22af4dc5bbd3bcp14c77ajsn775ea72335a9',
    ];

    let randomKey = rapidApiKeyList[Math.floor(Math.random() * rapidApiKeyList.length)];

    return randomKey;
};

async function searchVideo(text){
    let options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
        params: {query: text + ' execução correta', geo: 'BR', lang: 'pt'},
        headers: {
          'X-RapidAPI-Key': getRapidApiKey(),
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    try{
        response = await axios.request(options);

        let youtubeUrl = 'https://www.youtube.com/watch?v=' + response.data.data[0].videoId;

        return youtubeUrl;
    }catch(e){
        console.log("Erro ao obter vídeo do Youtube: " + e.response.data.message);
        return null;
    }
}

module.exports.searchVideo = searchVideo;