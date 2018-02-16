$(document).ready(function(){
console.log("******* script29.js cargado *****");


var elemento=$("main p").find("a");

elemento.hover(function(){
console.log("hover In");

//guardamos el titulo
var titulo=$(this).attr('title');
var fondo =$(this).data("fondo");

//guardamos en data y eliminamos el original
$(this).data('titulo',titulo).removeAttr("title");

//añadir propio tootip
$("<p class='tooltip'></p>")
.text(titulo)
.appendTo("body")
.css("background-color",fondo)
.fadeIn('slow');

	},function(){
	console.log("hover Out");

//reponer el titulo nativo
$(this).attr('title',$(this).data('titulo'));

$('.tooltip').remove();
}).mousemove(function(e){
	//capturar la posicion x e y del elemento
	console.log("se mueve");
	var ratonx = e.pageX+20;
	var ratony = e.pageY+10;

	//hacer que el tooltip se mueva junto con el puntero

	$(".tooltip").css({"top":ratony,"left":ratonx});
})


});