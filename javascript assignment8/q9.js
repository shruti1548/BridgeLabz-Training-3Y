
"use strict";

// Fitness data
const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

// FitnessAnalytics class
class FitnessAnalytics {

    constructor(data) {
        this.data = data;

        if (!data || data.length === 0) {
            throw new Error("Workout dataset is empty!");
        }
    }

    // Get active users
    getActiveUsers() {

        return this.data.filter((person) => person.steps > 7000);
    }

    // Calculate average calories
    getAverageCalories() {

        const totalCalories = this.data.reduce(
            (total, person) => total + person.calories,
            0
        );

        return totalCalories / this.data.length;
    }

    // Generate user summary
    getUserSummary() {

        return this.data.map((person) => {

            return `${person.user} walked ${person.steps} steps and burned ${person.calories} calories.`;

        });
    }
}

// Create object and execute methods
try {

    const fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("----------------------");

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("----------------------");

    console.log("User Summary:");

    fitness.getUserSummary().forEach((summary) => {
        console.log(summary);
    });

}
catch (error) {

    console.log("Error:", error.message);

}
