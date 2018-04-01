"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_generator_core_1 = require("text-generator-core");
var utils_1 = require("../utils");
exports.template0 = function (store) { return (text_generator_core_1.createElement("sentence", null,
    utils_1.randomBoolean(1 / 3) && (text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { for: "word1", type: "прилагательное", store: store }))),
    text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { id: "word1", type: "существительное", store: store })),
    utils_1.randomBoolean(1 / 3) && (text_generator_core_1.createElement("fragment", null,
        ", ",
        text_generator_core_1.createElement("word", { type: "вводная фраза", store: store }),
        ",")),
    (utils_1.randomBoolean(1 / 7) && (text_generator_core_1.createElement("fragment", null,
        ", ",
        text_generator_core_1.createElement("word", { type: "деепричастие", store: store }),
        ",",
        text_generator_core_1.createElement("word", { type: "глагол", store: store }))))
        || utils_1.getRandomItemFromArray([
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "глагол", store: store })),
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "глагол", store: store }),
                "\u0438 ",
                text_generator_core_1.createElement("word", { type: "глагол", store: store }))
        ]),
    text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "существительное", store: store, props: { падеж: 'дательный' } })),
    utils_1.randomBoolean(1 / 15) && (text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "заключение", store: store }))),
    text_generator_core_1.createElement("fragment", null, "."))); };
exports.template1 = function (store) { return (text_generator_core_1.createElement("sentence", null,
    utils_1.randomBoolean(1 / 3)
        && utils_1.getRandomItemFromArray([
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "начальная вводная фраза", store: store })),
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "вводная фраза", store: store }),
                ",")
        ]),
    utils_1.randomBoolean(1 / 3) && (text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { for: "word1", type: "прилагательное", store: store }))),
    text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { id: "word1", type: "существительное", store: store })),
    (utils_1.randomBoolean(1 / 7) && (text_generator_core_1.createElement("fragment", null,
        ", ",
        text_generator_core_1.createElement("word", { type: "деепричастие", store: store }),
        ",",
        text_generator_core_1.createElement("word", { type: "глагол", store: store }))))
        || utils_1.getRandomItemFromArray([
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "глагол", store: store })),
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "глагол", store: store }),
                "\u0438 ",
                text_generator_core_1.createElement("word", { type: "глагол", store: store }))
        ]),
    text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "существительное", store: store, props: { падеж: 'дательный' } })),
    utils_1.randomBoolean(1 / 15) && (text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "заключение", store: store }))),
    text_generator_core_1.createElement("fragment", null, "."))); };
exports.template2 = function (store) { return (text_generator_core_1.createElement("sentence", null,
    utils_1.randomBoolean(1 / 10)
        && utils_1.getRandomItemFromArray([
            'Но',
            text_generator_core_1.createElement("fragment", null,
                text_generator_core_1.createElement("word", { type: "вводная фраза", store: store }))
        ]),
    utils_1.randomBoolean() && (text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "прилагательное", store: store, for: "noun" }))),
    text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "существительное", store: store, id: "noun" })),
    text_generator_core_1.createElement("fragment", null,
        text_generator_core_1.createElement("word", { type: "краткое прилагательное", store: store, for: "noun" })),
    text_generator_core_1.createElement("fragment", null, "."))); };
