"use strict";

// Promise-based function to fetch bugs
function getBugs() {
    return new Promise((resolve, reject) => {

        // Simulate API delay
        setTimeout(() => {

            // Random API failure
            const isSuccess = Math.random() > 0.3;

            if (isSuccess) {
                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            } else {
                reject("Failed to fetch bugs from API");
            }

        }, 1000);
    });
}

// Call the function
getBugs()
    .then((bugs) => {
        console.log("Bug Report:");

        const bugReport = bugs.map((bug, index) => ({
            "Bug Number": index + 1,
            "Bug Description": bug
        }));

        console.table(bugReport);
    })
    .catch((error) => {
        console.log("Error:", error);
    });