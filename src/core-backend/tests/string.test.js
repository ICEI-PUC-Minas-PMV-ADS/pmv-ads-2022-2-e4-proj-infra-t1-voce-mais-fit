const stringUtils = require('../utils/string');

describe('Normalize Text', () => {
    it('should return a string in lowercase, without symbols, spaces, grammar marks', () => {
        expect(stringUtils.normalize('João-De-Barro')).toBe('joao de barro');
        expect(stringUtils.normalize("Caixa d'água")).toBe('caixa d agua');
        expect(stringUtils.normalize('correto')).toBe('correto');
    })
})

describe('Generate Random Text', () => {
    it('should return a string with same length as parameter', () => {
        let data = stringUtils.generateRandomText(6);

        expect(data.length).toBe(6);
    })

    it('should actual result be different of previous result', () => {
        let results = [];

        for(let i = 0; i < 4; i++){
            results.push(stringUtils.generateRandomText(6));

            if(i > 0)
                expect(results[i]).not.toBe(results[i - 1]);
        }
    })
})