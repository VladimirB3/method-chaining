$(document).ready(function() {
    
    $("#button1").mouseenter(function() {
        $("#button1").removeClass("makeRed").addClass("makeBorder");
    });

    $("#button1").mouseleave(function() {
        $("#button1").removeClass("makeBorder").addClass("makeRed");
    });

    $("#button1").click(function() {
        $("#para1").hide(1000).show(1000);
    });
    
    $("#button2").click(function() {
        $("#para2").fadeIn(1000).fadeOut(1000);
    });
    

}); 