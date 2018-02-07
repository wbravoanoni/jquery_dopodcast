$(document).ready(function(){
console.log("DOM cargado script17");

//buscar enlaces pares

var $enlaces=$("#contenido").find("a").filter(":even");
//var $enlaces=$("#contenido").find("a").filter(":odd");

$enlaces.css({"background-color": "yellow"});
console.log($enlaces);

//funcioòn test funcar  --link 4

var $enlaceCuatro=$("#contenido").find("a").filter(function(indice,elemento){

console.log(indice,elemento);
//console.log(elemento===this);

return $(elemento).text()==="link 4";




});


console.log($enlaceCuatro.css({"background-color": "red"}));
 

});


