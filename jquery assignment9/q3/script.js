$(document).ready(function () {

    // Click question to show or hide its answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Change question color on hover
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // Double-click to collapse all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Highlight parent question when input receives focus
    $(".answer input").focus(function () {
        $(this).closest("section").find(".question")
            .css("background-color", "lightblue");
    });

    // Reset question background when input loses focus
    $(".answer input").blur(function () {
        $(this).closest("section").find(".question")
            .css("background-color", "lightgray");
    });

});