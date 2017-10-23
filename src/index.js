const getText   = require('text-generator-core')
const path      = require('path')

const templates = require('./templates')
const flections = require('./patterns')

// Списки слов -----------------------------------------------------------------
let links = {
    НАЧ_ВВОД:   [ require('./links/нач_ввод') ],
    ВВОД:       [ require('./links/ввод') ],
    СУЩ:        [ require('./links/сущ') ],
    ГЛАГ:       [ require('./links/глаг') ],
    ПРИЛ:       [ require('./links/прил') ],
    ДЕЕПРИЧ:    [ require('./links/дееприч') ],
    КРАТК_ПРИЛ: [ require('./links/кратк_прил') ],
    УТВЕРЖД:    [ require('./links/утвержд') ],
}

// Экспорт ---------------------------------------------------------------------
let options = { links, templates, flections }
module.exports = num => {
    if (num == null) {
        num = 1
    }

    return getText(Math.max(num, 0), options)
}
