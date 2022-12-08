const translateApi = require('../external-services/translateApi');
const axios = require("axios");

describe('Portuguese to English', () => {
    it('should return the english translation given a portuguese text', async () => {
        axios.request = jest.fn(() => {
            return {data: {ok: true, translated_text: 'scrambled eggs'}}
        });

        let data = await translateApi.portugueseToEnglish('ovos mexidos');
        
        expect(data).toBe('scrambled eggs');

    })

    it('should return the same text if no translation is available', async () => {
        axios.request = jest.fn(() => {
            return {data: {ok: false, translated_text: ''}}
        });

        let data = await translateApi.portugueseToEnglish('teste teste teste');
        
        expect(data).toBe('teste teste teste');
    })
})