$(document).ready(function(){

	console.log("DOM cargado script25");

	//velocity.js.org
	//greensock

//basico para movimiento
//	$("h2").animate({"flex-basis":"60%","padding":"100px"});
$("h2").animate({"flex-basis":"60%","padding":"100px"},3000,function(){
	console.log("Animacion finalizada");

$("h3").animate(4000).css({"background-color":"red"});

});


});

