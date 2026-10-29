
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("MISSING_DATA");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);

    } catch (error) {
        let reason = error.message;

        invalid.push({
            transaction: transaction,
            reason: reason
        });

        if (reason === "NULL_ENTRY") {
            console.log("Error: Null transaction entry");
        } else if (reason === "MISSING_DATA") {
            console.log("Error: Missing ID or amount");
        } else if (reason === "NEGATIVE_AMOUNT") {
            console.log("Error: Negative transaction amount");
        } else {
            console.log("Error:", reason);
        }
    }
}

console.log("\nValid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);

