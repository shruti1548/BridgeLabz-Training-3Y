
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Total Salary: ₹${salary}`);
}

// Test with a permanent employee
calculateSalary(true);

// Test with a temporary employee
calculateSalary(false);

// Global bonus remains unchanged
console.log(`Global Bonus: ₹${bonus}`);

