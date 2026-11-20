
"use strict";

// Server A responds after 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A completed deployment");
            } else {
                reject("Server A failed");
            }
        }, 2000);
    });
}

// Server B responds after 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B completed deployment");
            } else {
                reject("Server B failed");
            }
        }, 3000);
    });
}

// Promise.all() waits for both servers
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment Error:", error);
    });

// Promise.race() returns the first settled result
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race Error:", error);
    });
