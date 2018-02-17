$(document).ready(function(){
	
console.log("script30.js cargado");
//peticion simple con ajax
/*
$.ajax('social.html',{

success:function(respuesta){
	console.log(respuesta);	
	$("#redes").append($(respuesta));
		}
	});
*/

//metodo corto
/*
$.get("social.html",function(respuesta){
$("#redes").append($(respuesta));
});
*/

//https://randomuser.me/documentation#multiple

$.getJSON('https://randomuser.me/api/?results=500')
.then(function(respuesta){
//console.log(respuesta);
//insertar cada avatar del usuario ficticio
respuesta.results.forEach(function(persona){
	//console.log(persona);
	//console.log(persona.picture.thumbnail);
$("<img></img>")
.attr("src",persona.picture.thumbnail).appendTo("#contenido")

})
})
});