$(document).ready(function(){
console.log("pagina script28.js cargado");


//mostramos contenido del primer panel
$(".panel_contenido").first().slideDown();

//event listener

$(".panel_cabecera").on("click",function(event){
event.preventDefault();
//comentar esto si no quieres mantener solo 1 activo
$(".panel_contenido").not(this).each(function(){
	$(this).slideUp();
});	

$(this).siblings(".panel_contenido").slideToggle();
//$(this).next(".panel_contenido").slideToggle();




});

});