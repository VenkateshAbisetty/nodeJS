console.log("notes page loaded");
var age = 24;
var name = "Venkatesh";

module.exports = {
    age,
    joker: () => {
        console.log("Joker function called");
    },
};

//Not accessed by other file
const addNumber = function (a, b) {
    return a + b;
};
