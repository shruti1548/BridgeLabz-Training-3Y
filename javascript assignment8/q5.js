
"use strict";

// Parent class
class User {

    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver class inherits User
class Driver extends User {

    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip class
class Trip {

    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Calculate fare
    calculateFare() {

        if (this.distance === undefined ||
            this.distance === null ||
            this.distance < 0) {

            throw new Error("Invalid trip distance!");
        }

        const farePerKm = 15;

        return this.distance * farePerKm;
    }
}

// Creating driver
const driver1 = new Driver("Rahul", 4.8, "Swift");

// Creating trip
try {

    const trip1 = new Trip("Delhi", "Noida", 20);

    console.log("Driver Name:", driver1.name);
    console.log("Driver Rating:", driver1.rating);
    console.log("Vehicle:", driver1.vehicle);

    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);

    console.log("Total Fare: Rs.", trip1.calculateFare());

}
catch (error) {

    console.log("Trip Error:", error.message);

}
