$(document).ready(function(){

	console.log("DOM cargado script24");


var $elemento=$("body").find("h2");


$elemento.on("click",function(){

/*
if($elemento.hasClass("dopodcat")){
$elemento.addClass("dopodcat2");
$elemento.removeClass("dopodcat");

}else{
$elemento.removeClass("dopodcat2");	
$elemento.addClass("dopodcat");
}

*/

$elemento.toggleClass("dopodcat");	



});



	

});

