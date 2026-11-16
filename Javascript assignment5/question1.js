// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function accepting name and callback
function greetUser(name, callback) {

    console.log("Hello " + name);

    // Calling the callback function
    callback();
}

// Calling the function
greetUser("Shruti", showEndMessage);