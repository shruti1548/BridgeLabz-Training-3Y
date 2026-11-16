const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

// Track mouse movement
mouseBox.addEventListener("mousemove", function(event) {

    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;
});

// Add red dot on double-click
mouseBox.addEventListener("dblclick", function(event) {

    const boxPosition = mouseBox.getBoundingClientRect();

    // Calculate position inside box
    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    const dot = document.createElement("div");

    dot.classList.add("dot");

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    mouseBox.appendChild(dot);
});