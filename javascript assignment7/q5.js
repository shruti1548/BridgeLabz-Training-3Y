
"use strict";

// --------------------------------
// PART 1: Using Nested Callbacks
// --------------------------------

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

// Nested callback structure
function runCallbackPipeline() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

// Uncomment to run callback version
// runCallbackPipeline();


// --------------------------------
// PART 2: Using Async/Await
// --------------------------------

function createStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${stageName} completed`);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    await createStage("Design");
    await createStage("Build");
    await createStage("Testing");
    await createStage("Deployment");
    await createStage("Celebration");

    console.log("Pipeline completed successfully!");
}

// Run async version
runAsyncPipeline();
