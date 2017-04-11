'use strict';

var fs = require('fs');
var getText = require('text-generator-core');
var path = require('path');

var templates = require('./templates');
var flections = require('./patterns');

// Списки слов -----------------------------------------------------------------
var links = {
    НАЧ_ВВОД: [require('./links/нач_ввод')],
    ВВОД: [require('./links/ввод')],
    СУЩ: [require('./links/сущ')],
    ГЛАГ: [require('./links/глаг')],
    ПРИЛ: [require('./links/прил')],
    ДЕЕПРИЧ: [require('./links/дееприч')],
    КРАТК_ПРИЛ: [require('./links/кратк_прил')],
    УТВЕРЖД: [require('./links/утвержд')]
};

// Экспорт ---------------------------------------------------------------------
var options = { links: links, templates: templates, flections: flections };
module.exports = function (num) {
    if (num == null) {
        num = 1;
    }

    return getText(Math.max(num, 0), options);
};