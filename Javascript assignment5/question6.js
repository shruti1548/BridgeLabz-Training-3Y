// First constructor: Person
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function() {
    console.log("Person Name:", this.name);
};

// Second constructor: Faculty
function Faculty(name, department) {

    Person.call(this, name);

    this.department = department;
}

// Inheriting Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Department:", this.department);
};

// Third constructor: Professor
function Professor(name, department, subject) {

    Faculty.call(this, name, department);

    this.subject = subject;
}

// Inheriting Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function() {
    console.log("Subject:", this.subject);
};

// Creating Professor object
const professor1 = new Professor(
    "Dr. Rahul",
    "Computer Science",
    "JavaScript"
);

// Accessing all methods
professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();

// Checking prototype chain
console.log(professor1 instanceof Professor);
console.log(professor1 instanceof Faculty);
console.log(professor1 instanceof Person);