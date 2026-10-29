
let numbers = [];
let results = [];

// Store numbers from 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Classify each number
for (let number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        Number: number,
        Result: result
    });
}

// Display all results
console.table(results);

