$(document).ready(function () {

    // Display greeting according to the current time
    let hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    } 
    else if (hour < 17) {
        $("#greeting").text("Good Afternoon!");
    } 
    else {
        $("#greeting").text("Good Evening!");
    }

    // Change greeting into a motivational quote
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and keep moving forward!");
    });

    // Toggle welcome message visibility
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Show alert when greeting is clicked
    $("#greeting").click(function () {
        alert("Welcome! Have a wonderful day!");
    });

});