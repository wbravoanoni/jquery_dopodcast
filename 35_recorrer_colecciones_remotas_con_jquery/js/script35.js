$(document).ready(function(){
	
console.log("******* script35.js cargado *******");


$(".adoptar").children("input").on("click",function(event){
	event.preventDefault();
	console.log("boton presionado");

//Con promesas
	$.getJSON("formulario.php")
	//.then(respuesta => console.log(respuesta))
	.then(mostrarCandidatos)
	.fail(error => console.error(Error(error)))
	.always(() => console.info('Request finalizado'));

//componer las fichas de los candidatos
//e insertarlas en el DOM

function mostrarCandidatos(candidatos){
console.log(candidatos);
$.each(candidatos, function(indice,candidato){

console.log(indice+" - "+candidato.nombre);

$(`<div>
	<h4>${candidato.nombre}<i>(${candidato.edad})</i></h4>
	<h5>${candidato.info}</h5>
	</div>`)
.css("background-image","url("+candidato.imagen+")")
.appendTo($(".candidatos"));


});

}

});



});