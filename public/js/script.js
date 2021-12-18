$(document).ready(function () {
    // Event ketika keyword diketik
    $("#search").on("keyup", function () {
        let query = $(this).val();

        $.ajax({
            url: "search",
            type: "GET",
            data: { search: query },
            success: function (data) {
                $("#result").html(data);
            },
        });
    });
});
