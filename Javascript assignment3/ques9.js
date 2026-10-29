
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        cleanData.push({
            user: parsed.user,
            age: age
        });

        console.log(`Line ${i + 1}: Valid JSON`);

    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("\nClean Data:");
console.table(cleanData);

console.log("Errors:");
console.table(errors);

// Bonus: Filter users under 18
const under18 = cleanData.filter(person => person.age < 18);

console.log("Users under 18:");
console.table(under18);

