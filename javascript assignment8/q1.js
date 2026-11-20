
"use strict";

// Creating Student class
class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);

        return total / this.marks.length;
    }

    // Calculate grade based on average
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

// Creating 3 student objects
const student1 = new Student("Shruti", [85, 90, 80]);
const student2 = new Student("Amit", [65, 70, 60]);
const student3 = new Student("Sara", [30, 35, 40]);

// Display student results
const students = [student1, student2, student3];

students.forEach((student) => {
    console.log(`Student Name: ${student.name}`);
    console.log(`Average Marks: ${student.calculateAverage()}`);
    console.log(`Grade: ${student.getGrade()}`);
    console.log("----------------------");
});
