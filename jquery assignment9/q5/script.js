$(document).ready(function () {

    // Click manager to highlight direct reports
    $(".manager").click(function () {
        $(this).nextAll(".employee").addClass("highlight");
    });

    // Hover employee to show contact using next()
    $(".employee").hover(
        function () {
            $(this).next(".contact").show();

            // Contact is inside the employee, so use find()
            $(this).find(".contact").show();
        },
        function () {
            $(this).find(".contact").hide();
        }
    );

    // Click department to change background of its employees
    $(".departmentName").click(function () {
        $(this).parent().children(".employee")
            .css("background-color", "lightblue");
    });

    // Select a random employee and highlight siblings
    $("#random").click(function () {
        let employees = $(".employee");
        let randomIndex = Math.floor(Math.random() * employees.length);

        employees.removeClass("highlight");

        employees.eq(randomIndex).siblings(".employee")
            .addClass("highlight");
    });

    // Collapse or expand team using parent() and find()
    $("#collapse").click(function () {
        $("#team").find(".department").toggle();
    });

});