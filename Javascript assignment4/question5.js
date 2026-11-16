// Function to book movie tickets
function bookTicket(name, email, seats) {

    // Validate name
    if (name.trim() === "") {
        console.log("Name is required.");
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        console.log("Invalid email address.");
        return;
    }

    // Validate number of seats
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        console.log("Seats must be between 1 and 10.");
        return;
    }

    // Create booking object
    const booking = {
        customerName: name,
        customerEmail: email,
        numberOfSeats: seats
    };

    console.log("Booking Successful!");
    console.log("Booking Details:");
    console.log(booking);

    return booking;
}

// Testing movie ticket booking
bookTicket("Shruti", "shruti@gmail.com", 3);