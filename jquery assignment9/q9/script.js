// Version 1 handles carousel and active widget
jq1(document).ready(function () {

    let slides = [
        "Welcome to Slide 1",
        "Welcome to Slide 2",
        "Welcome to Slide 3",
        "Welcome to Slide 4",
        "Welcome to Slide 5"
    ];

    let current = 0;

    // Automatically rotate carousel every 3 seconds
    setInterval(function () {

        current = (current + 1) % slides.length;

        jq1("#slide").text(slides[current]);

    }, 3000);

    // Highlight active widget
    jq1(".widget").click(function () {

        jq1(".widget").removeClass("active");

        jq1(this).addClass("active");

    });

});


// Version 2 handles modal and tooltips
jq2(document).ready(function () {

    // Show notification modal
    jq2("#showModal").click(function () {
        jq2("#modal").fadeIn();
    });

    // Close notification modal
    jq2("#closeModal").click(function () {
        jq2("#modal").fadeOut();
    });

    // Display tooltip when hovering over widgets
    jq2(".widget").hover(
        function () {

            let message = jq2(this).attr("title");

            jq2(this).attr("data-tooltip", message);

            jq2(this).css("border", "2px solid blue");

        },
        function () {

            jq2(this).css("border", "1px solid gray");

        }
    );

});