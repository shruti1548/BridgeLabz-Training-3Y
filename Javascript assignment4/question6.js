// Employee class
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }

    // Calculate bonus
    calculateBonus(percentage) {
        return this.calculateAnnualSalary() * percentage / 100;
    }
}

// Creating five employees
const employees = [
    new Employee(1, "Rahul", 30000),
    new Employee(2, "Priya", 40000),
    new Employee(3, "Aman", 35000),
    new Employee(4, "Neha", 45000),
    new Employee(5, "Shruti", 50000)
];

let totalPayout = 0;

// Display employee details
employees.forEach(employee => {

    const annualSalary = employee.calculateAnnualSalary();
    const bonus = employee.calculateBonus(10);

    console.log("Employee:", employee.name);
    console.log("Annual Salary:", annualSalary);
    console.log("Bonus:", bonus);

    totalPayout += annualSalary + bonus;

    console.log("-------------------");
});

// Reduce total payout by 5%
const reducedPayout = totalPayout - (totalPayout * 5 / 100);

console.log("Total Payout:", totalPayout);
console.log("Payout after 5% reduction:", reducedPayout);