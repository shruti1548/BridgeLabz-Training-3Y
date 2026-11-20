
"use strict";

// Parent class
class MovieTicket {

    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to prototype
MovieTicket.prototype.printTicket = function() {

    console.log("Movie:", this.movieName);
    console.log("Seat Number:", this.seatNo);
    console.log("Ticket Price:", this.price);

};

// Child class
class OnlineTicket extends MovieTicket {

    constructor(movieName, seatNo, price, convenienceFee) {

        super(movieName, seatNo, price);

        this.convenienceFee = convenienceFee;
    }

    // Calculate total amount
    getTotalAmount() {

        return this.price + this.convenienceFee;
    }
}

// Creating OnlineTicket object
const ticket1 = new OnlineTicket(
    "Avengers",
    "A12",
    250,
    30
);

// Calling inherited prototype method
ticket1.printTicket();

// Display convenience fee
console.log("Convenience Fee:", ticket1.convenienceFee);

// Display total amount
console.log("Total Amount:", ticket1.getTotalAmount());
