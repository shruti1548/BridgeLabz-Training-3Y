// Existing user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Function to update user details
function updateUser(newValues) {

    // Update only the provided properties
    Object.assign(user, newValues);

    console.log("User details updated successfully!");
}

// Display original user details
console.log("Original User Details:");
console.log(user);

// New values received from form
const updatedValues = {
    name: "Shruti",
    email: "shruti@gmail.com",
    age: 22
};

// Update user object
updateUser(updatedValues);

// Display updated user details
console.log("Updated User Details:");
console.log(user);