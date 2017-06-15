$(document).ready(function() {
    // element selector
    $("p").click(function() {
        $(this).hide();
    });
    // id selector
    $("#about").on({
        // You can attach multiple events with on() method of JQUERY
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        }
    });
   
    $(".colorme").click(function() {
        $(this).css("background-color", "blue");
    })
    $("#hide").click(function() {
        // element.withclass selector
        $("p.hideplay").hide();
    });
    $("#show").click(function() {
        $("p.hideplay").show();
    });
});
