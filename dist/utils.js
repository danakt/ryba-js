"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomBoolean(chance) {
    if (chance === void 0) { chance = 1 / 2; }
    return Math.random() < chance;
}
exports.randomBoolean = randomBoolean;
function getRandomItemFromArray(arr) {
    var randomIndex = Math.random() * arr.length | 0;
    var randomItem = arr[randomIndex];
    return randomItem;
}
exports.getRandomItemFromArray = getRandomItemFromArray;
