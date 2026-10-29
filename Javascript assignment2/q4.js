
// Generate 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate total using reduce()
let total = scores.reduce((sum, score) => sum + score, 0);

let average = total / scores.length;

// Count students who passed
let passedStudents = scores.filter(score => score >= 50).length;

// Use map() to create a list of scores with student numbers
let studentResults = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

console.log("Student Performance Summary");
console.log("---------------------------");
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents}`);

console.table(studentResults);

