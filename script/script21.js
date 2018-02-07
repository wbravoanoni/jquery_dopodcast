$(document).ready(function(){

	console.log("DOM cargado script20");

var $input=$("#claim");

var $codigo

$input.on("keyup",function(event){

	if(event.which==13){

$("#texto").text($input.val());
	}
})

//mousetrap escuchar combinaciones

// -> https://craig.is/killing/mice
});

