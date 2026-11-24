$(document).ready(function () {

    // Filter courses whenever the user types
    $("#search").keyup(function () {

        let value = $(this).val().toLowerCase();
        let matched = 0;

        $(".course").each(function () {

            let courseName = $(this).text().toLowerCase();

            if (courseName.includes(value)) {

                // Show matching courses
                $(this).show();

                // Highlight matching course
                $(this).css({
                    "background-color": "yellow",
                    "font-weight": "bold"
                });

                matched++;

            } else {

                // Hide courses that do not match
                $(this).hide();

                $(this).css({
                    "background-color": "#eeeeee",
                    "font-weight": "normal"
                });
            }
        });

        // Display matched course count
        $("#count").text("Matched courses: " + matched);

    });

    // Clear search and display all courses
    $("#clear").click(function () {

        $("#search").val("");

        $(".course").show().css({
            "background-color": "#eeeeee",
            "font-weight": "normal"
        });

        $("#count").text("Total courses: " + $(".course").length);

    });

});