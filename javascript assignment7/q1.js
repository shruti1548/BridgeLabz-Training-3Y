
"use strict";

// Function to boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Water boiled successfully!");
            } else {
                reject("Failed to boil water!");
            }
        }, 1000);
    });
}

// Function to brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Coffee brewed successfully!");
            } else {
                reject("Coffee brewing failed!");
            }
        }, 1500);
    });
}

// Function to pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee...");

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Coffee poured successfully!");
            } else {
                reject("Failed to pour coffee!");
            }
        }, 1000);
    });
}

// Promise chaining
boilWater()
    .then((result) => {
        console.log(result);
        return brewCoffee();
    })
    .then((result) => {
        console.log(result);
        return pourCoffee();
    })
    .then((result) => {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });
