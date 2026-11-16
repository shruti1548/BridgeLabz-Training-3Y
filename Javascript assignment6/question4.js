// Function to change theme
function changeTheme(themeName) {

    // Apply theme using setAttribute()
    document.body.setAttribute("class", themeName);

    // Save theme in custom attribute
    document.body.setAttribute("data-theme", themeName);

    console.log("Current Theme:", themeName);
}