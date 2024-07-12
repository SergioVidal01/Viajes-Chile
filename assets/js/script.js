$(function (){
    $(window).scroll(function(){
       if ($("#menu").offset().top > 100) {
        $("#menu").addClass("bg-dark shadow");
       } else {
        $("#menu").removeClass("bg-dark shadow");
       }
    });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  
$("#buttonTooltip").click(function(){
  alert("El Mensaje se ha enviado correctamente");

});

$("#mostrarCardText").click(function(){
    $("#paisaje1, card-text").toggle();

 });
 $("#mostrarCardText2").click(function(){
    $("#paisaje2, card-text").toggle();

 });
 $("#mostrarCardText3").click(function(){
    $("#paisaje3, card-text").toggle();

 });
 $("#mostrarCardText4").click(function(){
    $("#paisaje4, card-text").toggle();

 });