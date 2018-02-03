$(document).ready(function(){
console.log("DOM cargado script11");

var $texto=$("<p>Esto es contenido nuevo</p>");

//lo inserta dentro
$("#contenido").find("p").prepend($texto);

//lo inserta como ultimo hijo
$("#contenido").find("p").append($texto);

//elimina todo los parrafos
$("#contenido").find("p").remove();
$("#contenido").find("p").first().remove();
$("#contenido").find("p").last().remove();

});


