
"use strict";

// Function to simulate an asynchronous delivery step
function deliveryStep(stepName, successMessage) {

    return new Promise((resolve, reject) => {

        // Generate random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            // Random success or failure
            if (Math.random() > 0.2) {

                console.log(successMessage);
                resolve(stepName + " completed");

            } else {

                reject(stepName + " failed");

            }

        }, delay);
    });
}

// Main asynchronous pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Step 1: Take Order
        await deliveryStep(
            "Order",
            "Step 1: Order taken"
        );

        // Step 2: Prepare Food
        await deliveryStep(
            "Preparation",
            "Step 2: Food prepared"
        );

        // Step 3: Pack Food
        await deliveryStep(
            "Packing",
            "Step 3: Package ready"
        );

        // Step 4: Dispatch Order
        await deliveryStep(
            "Dispatch",
            "Step 4: Out for delivery"
        );

        // Step 5: Deliver Order
        await deliveryStep(
            "Delivery",
            "Delivery completed!"
        );

    } catch (error) {

        console.log("Pipeline failed!");
        console.log("Error:", error);

    }
}

// Execute the pipeline
runPipeline();
