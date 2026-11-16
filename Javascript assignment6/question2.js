const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maximumCharacters = 100;

// Update character counter
function updateCounter() {

    const remaining = maximumCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    // Yellow warning at 20 characters or less
    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "yellow";
    }

    // Red when no characters remain
    else if (remaining === 0) {
        counter.style.color = "red";
    }

    else {
        counter.style.color = "green";
    }
}

// Prevent typing beyond 100 characters
message.addEventListener("keydown", function(event) {

    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "ArrowUp", "ArrowDown",
        "Tab", "Home", "End"
    ];

    if (
        message.value.length >= maximumCharacters &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

// Update counter while typing or pasting
message.addEventListener("input", updateCounter);

// Reset everything
resetButton.addEventListener("click", function() {

    message.value = "";

    updateCounter();
});