
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("\nOriginal Value:", str);
    console.log("Number Form:", num);
    console.log("Boolean Form:", bool);
    console.log("String Form:", str);

    // Skip invalid numeric values
    if (
        Number.isNaN(num) ||
        (typeof value === "string" && value.trim() === "")
    ) {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number");
    } else {
        validNumbers.push(num);
        console.log("Status: Valid Number");
    }
}

console.log("\nValid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);

