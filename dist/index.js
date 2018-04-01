"use strict";
var sentence_1 = require("./sentence");
var stores_1 = require("./statics/stores");
var transform_1 = require("./transform");
var rules_1 = require("./statics/rules");
module.exports = function generateRyba() {
    var topics = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        topics[_i] = arguments[_i];
    }
    if (topics.length === 0) {
        return generateRyba('philosophy');
    }
    return sentence_1.getSentence(stores_1.getStore(topics), transform_1.getItemTransformer(rules_1.transformRules));
};
