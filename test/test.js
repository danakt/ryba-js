var expect = require('chai').expect
var ryba   = require('../')

// Генерация текста ------------------------------------------------------------
describe('Генерация текста', function() {
    var sentenceExp = /[А-Я][^.?!]+[.?!]/g

    it('1 предложение', function() {
        expect(ryba().match(sentenceExp)).to.have.lengthOf(1)
    })

    it('10 предложений', function() {
        expect(ryba(10).match(sentenceExp)).to.have.lengthOf(10)
    })

    it('10000 предложений', function() {
        expect(ryba(1e4).match(sentenceExp)).to.have.lengthOf(1e4)
    })
})
