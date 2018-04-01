"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
function getItemTransformer(transformRules) {
    return function transformItem(props, target) {
        var propsArr = ramda_1.toPairs(props);
        var getPropsReducer = function (transformRules) {
            return function (acc, prop) {
                var propname = prop[0], value = prop[1];
                var getRuleReducer = function (value) {
                    return function (acc, rule) {
                        var regExpr = rule[0], _a = value, replacer = rule[1][_a];
                        var targetRules = rule[2];
                        if (targetRules != null) {
                            for (var prop_1 in targetRules) {
                                if (targetRules[prop_1] !== acc[1][prop_1]) {
                                    return acc;
                                }
                            }
                        }
                        return [acc[0].replace(regExpr, replacer), acc[1], acc[2]];
                    };
                };
                return transformRules[propname].reduce(getRuleReducer(value), acc);
            };
        };
        var outItem = ramda_1.reduce(getPropsReducer(transformRules), target, propsArr);
        return outItem;
    };
}
exports.getItemTransformer = getItemTransformer;
