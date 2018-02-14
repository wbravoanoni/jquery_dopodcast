$(document).ready(function(){

	console.log("DOM cargado script27");

// Buscamos los elementos a guardar/seleccionar

var $list     =$('li'),
	$imagenes = $list .find("img"),
	activo    = 0,
	cantidad  = $imagenes.length;

console.log("hola");
console.log($list);
//ocultar todas las imagenes
$list.hide();

//eliminar las imagenes como tag y añadirlas como fondo


$imagenes.each(function(indice,parametro){

//el indice
$list.eq(indice).css({
	"background-image":"url("+parametro.src+")",
	"background-size":"cover",
	"background-position":"center center",
	"position":"absolute"
});

parametro.remove();
});

//mostrar la primera imagen

$list.eq(activo).fadeIn();

//even listener

$("#derecha").click(function(event){
event.preventDefault();
activo+=1;
	if(activo>cantidad-1){
	 activo=0;
	}
	mostrarImagen();
});

$("#izquierda").click(function(event){
event.preventDefault();
activo-=1;
	if(activo<0){
	 activo=cantidad-1;
	}
	mostrarImagen();
});

function mostrarImagen(){
	$list.hide().eq(activo).fadeIn();
}

});