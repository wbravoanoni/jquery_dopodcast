$(document).ready(function(){
console.log("DOM cargado script16");

//event listener
/*$("a").on("click",function(event){
event.preventDefault();
console.log("Presionado");
});
*/


$("#contenido").on("click","a",function(event){
event.preventDefault();
console.log("Presionado");
});





//No funciona porque se creo despues que cargo el DOM
$valor=$("<a href=''>link 5</a>");
$("#contenido").find("p").first().append($valor);

//delegar el evento a un padre
});
