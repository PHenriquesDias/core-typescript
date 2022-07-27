"use strict";
exports.__esModule = true;
var data_js_1 = require("./data.js");
var whales = (0, data_js_1.getWhales)();
var whaleSightings = (0, data_js_1.getWhaleSightings)();
function getWhaleNamesBySpecies(species) {
    return Object.keys(whales).filter(function (name) { var _a; return ((_a = whales[name]) === null || _a === void 0 ? void 0 : _a.species) === species; });
}
function greeting(name, whale) {
    return "Hi, I'm ".concat(name, ", a ").concat(whale.weightInKg, "kg ").concat(whale.species, ".");
}
getWhaleNamesBySpecies("Skiller Whale").forEach(function (name) {
    if (whales[name] !== undefined)
        console.log(greeting(name, whales[name]));
    if (whaleSightings[name] !== undefined)
        console.log("Comments:", whaleSightings[name].join(", "));
});
