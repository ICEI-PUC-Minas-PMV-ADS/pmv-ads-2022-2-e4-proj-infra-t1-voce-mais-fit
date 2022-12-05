const internalDictionary = require('../utils/dictionaryEnPt');

describe('English to Portuguese', () => {
    it('should return a string if a word that exists in the dictionary is given', () => {
        let data = internalDictionary.englishToPortuguese("egg");

        expect(data).toBe("ovo");
    })

    it('should return null if a word that does not exist in the dictionary is given', () => {
        let data = internalDictionary.englishToPortuguese("scrumbled eggs");

        expect(data).toBe(null);
    })
})

describe('Portuguese to English', () => {
    it('should return a string if a word that exists in the dictionary is given', () => {
        let data = internalDictionary.portugueseToEnglish("ovo");

        expect(data).toBe("egg");
    })

    it('should return null if a word that does not exist in the dictionary is given', () => {
        let data = internalDictionary.portugueseToEnglish("ovos mexidos");

        expect(data).toBe(null);
    })
})