const expect = require('chai').expect
const ryba   = require('../')

// Генерация текста ------------------------------------------------------------
describe('Генерация текста', () => {
    let sentenceExp = /[А-Я][^.?!]+[.?!]/g

    it('1 предложение', () => {
        expect(ryba().match(sentenceExp)).to.have.lengthOf(1)
    })

    it('10 предложений', () => {
        expect(ryba(10).match(sentenceExp)).to.have.lengthOf(10)
    })

    it('10000 предложений', () => {
        expect(ryba(1e4).match(sentenceExp)).to.have.lengthOf(1e4)
    })
})
