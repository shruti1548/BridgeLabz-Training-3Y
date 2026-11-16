// Parent class
class Person {

    constructor(name) {
        this.name = name;
    }

    // Parent class method
    showName() {
        console.log("Name:", this.name);
    }
}

// Child class
class Student extends Person {

    constructor(name, branch) {

        // Calling parent constructor
        super(name);

        this.branch = branch;
    }

    // Child class method
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Creating student object
const student1 = new Student("Shruti", "Computer Science");

// Calling methods
student1.showName();
student1.showBranch();