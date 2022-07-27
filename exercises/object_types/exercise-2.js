var ada = {
    name: "Ada Loveplaice",
    species: "Skiller Whale",
    likesToEat: "knowledge",
    trainingSessionsAttended: 12
};
var charles = {
    name: "Charles Barbage",
    species: "Narwhal",
    weightInKg: 900,
    likesToEat: "little and often"
};
var michael = {
    name: "Michael Fara-ray",
    species: "Humpback Whale",
    weightInKg: 27500,
    finLengthInCm: 597
};
function greeting(whale) {
    var baseGreeting = "Hi, I'm ".concat(whale.name, ", a ").concat(whale.weightInKg, "kg ").concat(whale.species);
    return whale.likesToEat
        ? "".concat(baseGreeting, ", and I like to eat ").concat(whale.likesToEat, ".")
        : "".concat(baseGreeting, ".");
}
console.log(greeting(ada));
console.log(greeting(charles));
console.log(greeting(michael));
