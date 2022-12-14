const axios = require('axios');
const youtubeApi = require('../external-services/youtubeApi');

describe('Search Video', () => {
    it('should return an URL to a youtube video, given a query', async () => {
        axios.request = jest.fn(() => {
            return { data: { data: [{ videoId: "zwvsa7DzzHY"}] }};
        })

        let data = await youtubeApi.searchVideo('bambam enlouquecendo no treino de trapézio');

        expect(data).toBe('https://www.youtube.com/watch?v=zwvsa7DzzHY');
    })

    it('should return null if an error is thrown', async () => {
        axios.request = jest.fn(() => {
            throw {response: {data: {message: "expection test"}}};
        })

        let data = await youtubeApi.searchVideo('bambam enlouquecendo no treino de trapézio');

        expect(data).toBeNull();
    })
})