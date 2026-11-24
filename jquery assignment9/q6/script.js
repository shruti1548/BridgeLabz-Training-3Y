$(document).ready(function () {

    let subscribed = false;

    // Subscribe to notifications
    $("#subscribe").click(function () {
        subscribed = true;
        $("#message").text("Successfully subscribed to notifications!");
    });

    // Unsubscribe from notifications
    $("#unsubscribe").click(function () {
        subscribed = false;
        $("#message").text("You have unsubscribed from notifications.");
    });

    // Dynamically add new subscription topics
    $("#addTopic").click(function () {
        let topic = $("#newTopic").val();

        if (topic !== "") {
            $("#topics").append(
                "<li>" + $("<div>").text(topic).html() +
                ' <button class="remove">Remove</button></li>'
            );

            $("#message").text("New topic added successfully!");
            $("#newTopic").val("");
        }
    });

    // Attach click event to dynamically added remove buttons
    $("#topics").on("click", ".remove", function () {
        $(this).parent().remove();
        $("#message").text("Subscription topic removed.");
    });

    // Demonstrate .off() by detaching the remove event
    $("#unsubscribe").click(function () {
        $("#topics").off("click", ".remove");
    });

});