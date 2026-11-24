$(document).ready(function () {

    // Click on a product to highlight it
    $(".product").click(function () {
        $(this).toggleClass("highlight");
    });

    // Hover over product to show additional details
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // Toggle favorite selection
    $(".favorite").click(function (event) {
        event.stopPropagation();

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {
            $(this).text("♥ Favorite");
        } else {
            $(this).text("♡ Favorite");
        }
    });

    // Show alert if product is out of stock
    $(".product").click(function () {
        if ($(this).attr("data-stock") === "out") {
            alert("Sorry! This product is currently out of stock.");
        }
    });

});