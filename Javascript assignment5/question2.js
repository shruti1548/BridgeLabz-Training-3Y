// Function that accepts an array and a callback
function applyOperation(numbers, operation) {

    // Apply callback to every number
    const result = numbers.map(operation);

    return result;
}

// Array of numbers
const numbers = [1, 2, 3, 4];

// Double each number
const doubledNumbers = applyOperation(numbers, function(num) {
    return num * 2;
});

// Square each number
const squaredNumbers = applyOperation(numbers, function(num) {
    return num * num;
});

// Display results
console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("Squared Numbers:", squaredNumbers);