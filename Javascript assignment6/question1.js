const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

let editingItem = null;

// Add new product
addButton.addEventListener("click", function() {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span>${productName}</span>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
    `;

    productList.appendChild(listItem);

    productInput.value = "";
});

// Event delegation for Edit and Delete
productList.addEventListener("click", function(event) {

    const listItem = event.target.closest("li");

    if (!listItem) return;

    if (event.target.classList.contains("deleteButton")) {

        listItem.remove();

    } else if (event.target.classList.contains("editButton")) {

        if (editingItem) {
            saveEdit();
        }

        const span = listItem.querySelector("span");

        const input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);

        editingItem = listItem;

        input.focus();
    }
});

// Save edited product
function saveEdit() {

    if (!editingItem) return;

    const input = editingItem.querySelector("input");

    if (input) {
        const span = document.createElement("span");

        span.textContent = input.value.trim() || "Unnamed Product";

        input.replaceWith(span);
    }

    editingItem = null;
}

// Save when clicking outside edited item
document.addEventListener("click", function(event) {

    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }
});