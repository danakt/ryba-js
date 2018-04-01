"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var text_generator_core_1 = require("text-generator-core");
var ramda_1 = require("ramda");
var templates = require("./statics/templates");
var utils_1 = require("./utils");
function createSentenceGetter(sentenceCreatorsList) {
    return function getTemplate(store) {
        var randomSentenceCreator = utils_1.getRandomItemFromArray(sentenceCreatorsList);
        var sentenceTemplate = randomSentenceCreator[1](store);
        return sentenceTemplate;
    };
}
var getTemplate = createSentenceGetter(ramda_1.toPairs(__assign({}, templates)));
function getSentence(store, transformer) {
    var sentenceTemplate = getTemplate(store);
    var sentence = text_generator_core_1.generateSentence(sentenceTemplate, transformer);
    return sentence;
}
exports.getSentence = getSentence;
