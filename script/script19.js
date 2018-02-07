$(document).ready(function(){
		var contador=0;
	
	console.log("DOM cargado script19");

//abrir menu con boton derecho
$("#imageP").on("contextmenu",function(){

	console.log("menu");
});


//enter-leave  afecta solo al elemento
$("#caja1").on("mouseenter",function(){
	console.log("Entramos");
});

$("#caja1").on("mouseleave",function(){
console.log("Salimos");
});


//afecta al padre y al hijo
$("#caja2").on("mouseover",function(){
	contador+=1;
	console.log("Entramos:"+contador);
});

$("#caja2").on("mouseout",function(){
console.log("Salimos");
});

$("#imageP").on("click",function(){
	console.log("click");
});
});

