$(document).ready(function(){
	
	console.log("DOM cargado script18");

//Mostrar parrafos con slideToggle

/* primer paso
var $parrafos=$("#contenido").children("p");
$parrafos.slideToggle(3000);
*/


function mostrarEnSecuencia($coleccion,$tiempo){
	$tiempo=$tiempo||1000;
	$coleccion.each(function(item,elemento){
	$(elemento).slideToggle($tiempo*item+1);
});
}


$("#boton").on("click",function(){
var $parrafos=$("#contenido").children("p");
mostrarEnSecuencia($parrafos,100);
});


});