let currentStep = 1;

// Move to next step
function nextStep() {

    const error = document.getElementById("error");
    error.textContent = "";

    // Validate name
    if (currentStep === 1) {

        const name = document.getElementById("name").value.trim();

        if (name === "") {
            error.textContent = "Please enter your name.";
            return;
        }
    }

    // Validate email
    else if (currentStep === 2) {

        const email = document.getElementById("email").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            error.textContent = "Please enter a valid email.";
            return;
        }
    }

    // Validate password
    else if (currentStep === 3) {

        const password = document.getElementById("password").value;

        if (password.length < 6) {
            error.textContent = "Password must contain at least 6 characters.";
            return;
        }

        showSummary();
        return;
    }

    // Hide current step
    document.getElementById("step" + currentStep).hidden = true;

    currentStep++;

    // Show next step
    document.getElementById("step" + currentStep).hidden = false;
}

// Move to previous step
function previousStep() {

    document.getElementById("step" + currentStep).hidden = true;

    currentStep--;

    document.getElementById("step" + currentStep).hidden = false;

    document.getElementById("error").textContent = "";
}

// Display final summary
function showSummary() {

    document.getElementById("step3").hidden = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("summaryDetails").textContent =
        "Name: " + name + " | Email: " + email;

    document.getElementById("summary").hidden = false;
}