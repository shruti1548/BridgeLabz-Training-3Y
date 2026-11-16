const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

// Filter table while typing
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const rows = studentTable.querySelectorAll("tr");

    let visibleCount = 0;

    rows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";

            visibleCount++;

        } else {

            row.style.display = "none";
        }
    });

    // Show message if no rows match
    noResults.hidden = visibleCount !== 0;
});