// Display result
if (valid == true) {

    $("#message").css("color", "green");
    $("#message").text("Registration Successful!");

    registeredEmails.push(email);

    $("#registrationForm")[0].reset();

} else {

    $("#message").css("color", "red");
    $("#message").text("Please correct the highlighted fields.");

}