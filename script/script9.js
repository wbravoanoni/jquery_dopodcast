$(document).ready(function(){
console.log("DOM cargado script9");


var parent=$('.lateral').find('span').last().parents();

console.log(parent);
parent.css({"border":"1px solid red"});


var hijos=$(".contenido").children();
hijos.css({"border":"1px solid black"});

var todosHijos=$("body").find("*");
todosHijos.css({
	"transition":"all 2s",
	"transform":"rotate(180deg)"
	});

});