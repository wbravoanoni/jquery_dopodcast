$(document).ready(function(){
console.log("DOM cargado script14");


//optener getter
var $elemento=$("#contenido").find("a").first();

//cambiar Setter
$elemento.data("rrss","Cambiazo");



console.log($elemento.data("rrss"));


var $datos=$("*").filter(function(){

	var $datos=$(this).data("rrss");
	return $datos==="correo";
});


console.log($datos);

});



