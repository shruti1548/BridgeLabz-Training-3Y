
"use strict";

// Parent class
class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is doing general employee work.`);
    }
}

// Child class
class Manager extends Employee {

    constructor(name, department) {
        super(name, department);
    }

    // Overriding parent method
    work() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}

// Creating objects
const employee1 = new Employee("Amit", "HR");

const manager1 = new Manager("Shruti", "Technology");

// Calling methods
employee1.work();

manager1.work();
