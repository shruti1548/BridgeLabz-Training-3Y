// Function to validate login details
function validateLogin(username, password) {

    const errors = [];

    // Username must have at least 5 characters
    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    // Password must have at least 8 characters
    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    // Check uppercase letter
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }

    // Check lowercase letter
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }

    // Check number
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain a number.");
    }

    // Check special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("Password must contain a special character.");
    }

    if (errors.length === 0) {
        console.log("Login validation successful!");
        return true;
    }

    console.log("Login Errors:");

    errors.forEach(error => {
        console.log(error);
    });

    return false;
}

// Testing login validation
validateLogin("Shruti123", "Hello@123");