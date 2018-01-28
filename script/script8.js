$(document).ready(function(){
console.log("DOM cargado script8");

//prev va al penultimo cada prev sube un nivel

$(".contenido").find("p").last().prev().css({"background-color":"red"});

$(".contenido").find("p").last().prev().prev().css({"background-color":"green"});

$(".contenido").find("p").first().next().css({"background-color":"yellow"});

});