$(document).ready(function(){

	console.log("DOM cargado script23");


/*
getter simple
var $elemento=$("#titulo").css("font-family");
*/

/*getter multiple
var $elemento=$("#titulo").css(["font-family","color","margin"]);
*/

//console.log($elemento);

/*
Setter simple
$("#titulo").css("background-color","red");
*/

/*
Setter multiple
*/
$("#titulo").css({"background-color":"red","font-size":"36px","color":"blue"});
});

