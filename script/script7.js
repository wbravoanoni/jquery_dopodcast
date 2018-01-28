$(document).ready(function(){
console.log("DOM cargado");

$("section.contenido").find("h1").first().css({"background-color":"red"});
$("section.contenido").find("h1").last().css({"background-color":"blue"});
$("section.contenido").find("h1").eq(3).css({"background-color":"green"});

});