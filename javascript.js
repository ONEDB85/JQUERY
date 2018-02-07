$(function() {
    // JavaScript-y things here

    var tableEl;


    $(".available").on("click", function(event) {
        $("form").show()
        // console.log($(event.target).text())
        $('#tableNumber').text($(event.target).text());
        tableEl = $(this);
    });


    $(".cancel").on("click", function() {
        $("form").hide();
    });

    $(".save").on("click", function(event) {
        event.preventDefault();
        var table = $("#tableNumber").text();
        $(".available:contains(" + table + ")").removeClass("available").addClass("reserved");
        addHoverData();
        $("form").hide();
        $("#peopleNumber").val("");
        $("#name").val("");
    });

    function addHoverData() {
        var reserveName = $("#name").val();
        var partySize = $("#peopleNumber").val();
        tableEl.append('<div class="hoverData"><div>Name: ' + reserveName + '</div><div>Size of party: ' + partySize + '</div></div>');
    }

});