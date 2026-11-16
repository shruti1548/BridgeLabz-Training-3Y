const gallery = document.querySelector(".gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const closeButton = document.getElementById("closeButton");

// Open modal when image is clicked
gallery.addEventListener("click", function(event) {

    if (event.target.tagName === "IMG") {

        modalImage.src = event.target.src;

        modal.style.display = "flex";
    }
});

// Prevent closing when clicking inside modal
modalContent.addEventListener("click", function(event) {

    event.stopPropagation();
});

// Close modal when clicking outside
modal.addEventListener("click", function() {

    modal.style.display = "none";
});

// Close using button
closeButton.addEventListener("click", function() {

    modal.style.display = "none";
});