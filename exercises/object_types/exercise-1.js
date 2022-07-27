"use strict";
exports.__esModule = true;
exports["default"] = {}; // empty export to ensure the compiler treats this file as a module
var ada = {
    name: "Ada Loveplaice",
    species: "Skiller Whale",
    weightInKg: 3240,
    likesToEat: "knowledge"
};
var charles = {
    name: "Charles Barbage",
    species: "Narwhal",
    weightInKg: 4712
};
var michael = {
    name: "Michael Fara-ray",
    species: "Humpback Whale",
    weightInKg: 27500,
    likesToEat: "little and often"
};
function greeting(whale) {
    var bits = [];
    bits.push("Hi, I'm ".concat(whale.name, ","));
    bits.push("I'm a ".concat(whale.weightInKg, "kg ").concat(whale.species));
    if (whale.likesToEat) {
        bits.push("and I like to eat");
        bits.push(whale.likesToEat);
    }
    return "".concat(bits.join(" "), ".");
}
console.log(greeting(ada));
console.log(greeting(charles));
console.log(greeting(michael));
