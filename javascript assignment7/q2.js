"use strict";

console.log("Start");

// setTimeout creates a macrotask
setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

// Promise creates a microtask
Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

// Synchronous statement
console.log("Synchronous log");

console.log("End");

