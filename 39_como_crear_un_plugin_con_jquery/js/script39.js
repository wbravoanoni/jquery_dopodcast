$(document).ready(()=>{

console.log("******* script39.js cargado *******");

console.log()

$.fn.cambiarColor=function(opciones){
	const configuracion=$.extend({
color:'red',
	},opciones);

	//recorremos cada elemento sobre el que se llama el plugin
this.each((indice,elemento)=>{
//console.log(elemento);
let color=configuracion.color;
$(elemento).css('color',color);
})

};

$(".contenido").find("p").cambiarColor({color:"green"});

});
	



