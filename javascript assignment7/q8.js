
"use strict";

// Function to submit an order
function submitOrder() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // 50% chance of success
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject("Order submission failed");
            }

        }, 1000);
    });
}

// Async function to retry order submission
async function processOrder() {

    // Try a maximum of 3 times
    for (let attempt = 1; attempt <= 3; attempt++) {

        try {
            const result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            console.log(result);

            return;

        } catch (error) {

            console.log(`Attempt ${attempt}: Failed`);

        }
    }

    // Throw error if all attempts fail
    throw new Error("Order could not be processed");
}

// Handle final result
processOrder()
    .then(() => {
        console.log("Order Process Completed");
    })
    .catch((error) => {
        console.log("Final Error:", error.message);
    });
