// Function returning another function
function makeMultiplier(multiplier) {

    // Inner function
    return function(number) {

        // Using multiplier from outer function
        return number * multiplier;
    };
}

// Creating multiplier functions
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const fiveTimes = makeMultiplier(5);

// Calling functions
console.log("Triple of 5:", triple(5));
console.log("Double of 5:", double(5));
console.log("Five times 5:", fiveTimes(5));