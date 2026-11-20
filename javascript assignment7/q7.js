
"use strict";

// Load Profile
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

// Load Posts
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

// Load Messages
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

// Start timer
const startTime = Date.now();

// Execute all Promises together
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {

    results.forEach((result, index) => {

        if (result.status === "fulfilled") {
            console.log(`Module ${index + 1}: ${result.value}`);
        } else {
            console.log(`Module ${index + 1}: ${result.reason}`);
        }

    });

    // Calculate total execution time
    const endTime = Date.now();
    const totalTime = endTime - startTime;

    console.log(`Total Time: ${totalTime} ms`);
});
