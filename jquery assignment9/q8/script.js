$(document).ready(function () {

    // Append a new post at the bottom
    $("#add").click(function () {
        $("#postList").append(
            '<article class="post">' +
            '<h2>New Blog Post</h2>' +
            '<p>This is a newly added blog post.</p>' +
            '</article>'
        );
    });

    // Prepend featured post at the top
    $("#featured").click(function () {
        $("#postList").prepend(
            '<article class="post featured">' +
            '<h2>Featured Post</h2>' +
            '<p>This is our special featured article.</p>' +
            '</article>'
        );
    });

    // Remove the last post
    $("#remove").click(function () {
        $("#postList .post:last").remove();
    });

    // Add tag before and after posts
    $("#addTag").click(function () {

        $(".post").first().before(
            '<p class="tag">--- Latest Blog Posts ---</p>'
        );

        $(".post").last().after(
            '<p class="tag">--- End of Blog Posts ---</p>'
        );

    });

    // Highlight posts containing specific keywords
    $("#highlight").click(function () {

        $(".post").each(function () {

            let content = $(this).text().toLowerCase();

            if (content.includes("artificial intelligence") ||
                content.includes("machine learning")) {

                $(this).css("background-color", "lightgreen");

            }
        });

    });

});