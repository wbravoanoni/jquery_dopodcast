$(document).ready(function(){

	console.log("DOM cargado script20");

var $input=$("#claim");

$input.on("keyup",function(event){

$("#texto").text($input.val());

})


});

