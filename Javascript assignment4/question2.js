// Function to validate student details
function validateStudent(name, email, phone, password) {

    // Validate name (only alphabets)
    const namePattern = /^[A-Za-z ]+$/;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate 10-digit phone number
    const phonePattern = /^[0-9]{10}$/;

    // Password must contain uppercase, number and special character
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

    const errors = [];

    if (!namePattern.test(name)) {
        errors.push("Name should contain only alphabets.");
    }

    if (!emailPattern.test(email)) {
        errors.push("Invalid email address.");
    }

    if (!phonePattern.test(phone)) {
        errors.push("Phone number must contain exactly 10 digits.");
    }

    if (!passwordPattern.test(password)) {
        errors.push("Password must contain an uppercase letter, a number and a special character.");
    }

    if (errors.length === 0) {
        console.log("All details are valid!");
    } else {
        console.log("Validation Errors:");

        errors.forEach(error => {
            console.log(error);
        });
    }

    return errors.length === 0;
}

// Testing the function
const isValid = validateStudent(
    "Shruti",
    "shruti@gmail.com",
    "9876543210",
    "Hello@123"
);

console.log("Form Valid:", isValid);