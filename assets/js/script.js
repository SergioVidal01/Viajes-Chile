$(function (){
    $(window).scroll(function(){
       if ($("#menu").offset().top > 100) {
        $("#menu").addClass("bg-dark shadow");
       } else {
        $("#menu").removeClass("bg-dark shadow");
       }
    });
});