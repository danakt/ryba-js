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
var ramda_1 = require("ramda");
var text_generator_core_1 = require("text-generator-core");
exports.loadStore = function loadStore(topic) {
    var types = [
        ['прилагательное', 'adjectives'],
        ['заключение', 'conclusions'],
        ['деепричастие', 'gerunds'],
        ['начальная вводная фраза', 'initIntroductory'],
        ['вводная фраза', 'introductory'],
        ['существительное', 'nouns'],
        ['краткое прилагательное', 'shortAdjectives'],
        ['глагол', 'verbs']
    ];
    var dictionariesReducer = function (topic) { return function (acc, type) {
        return (__assign({}, acc, (_a = {}, _a[type[0]] = require("../dictionaries/" + topic + "/" + type[1]).default, _a)));
        var _a;
    }; };
    var dictionaries = ramda_1.reduce(dictionariesReducer(topic), {}, types);
    var store = text_generator_core_1.createStore(dictionaries);
    return store;
};
exports.combineStores = function combineStores() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    var combinedDictionary = ramda_1.reduce(function (acc, storeToMerge) {
        var mergedStore = __assign({}, acc);
        for (var item in storeToMerge) {
            if (!storeToMerge.hasOwnProperty(item)) {
                continue;
            }
            mergedStore[item] = (mergedStore[item] || []).concat(storeToMerge[item]);
        }
        return mergedStore;
    }, {}, list);
    return combinedDictionary;
};
exports.getStore = function getStore(topics) {
    if (topics === void 0) { topics = ['philosophy']; }
    var topicsWithDefault = [
        'default'
    ].concat(topics);
    var dictionariesList = ramda_1.map(function (item) { return exports.loadStore(item); }, topicsWithDefault);
    return exports.combineStores.apply(void 0, dictionariesList);
};
