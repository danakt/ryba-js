const fs        = require('fs')
const getText   = require('text-generator-core')
const { prepareLinks, getTemplate, makeSentence } = getText

const templates = require('./templates')
const flections = require('./patterns')

// Списки слов -----------------------------------------------------------------
let readFile = filename => (
    fs.readFileSync('./links/' + filename, 'utf-8')
)
let links = prepareLinks({
    НАЧ_ВВОД:   [ readFile('нач_ввод.yml') ],
    ВВОД:       [ readFile('ввод.yml') ],
    СУЩ:        [ readFile('сущ.yml') ],
    ГЛАГ:       [ readFile('глаг.yml') ],
    ПРИЛ:       [ readFile('прил.yml') ],
    ДЕЕПРИЧ:    [ readFile('дееприч.yml') ],
    КРАТК_ПРИЛ: [ readFile('кратк_прил.yml') ],
    УТВЕРЖД:    [ readFile('утвержд.yml') ],
})

// Экспорт ---------------------------------------------------------------------
let options = { links, templates, flections }
module.exports = num => getText(num, options)
