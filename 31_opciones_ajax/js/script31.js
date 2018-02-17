$(document).ready(function(){
	
console.log("******* script31.js cargado *******");
//peticion esencial con ajax

/*
$.ajax("social.html",{
// se envia antes del request
beforeSend:function(){
//mostrar loading spinner
},
success:function(respuesta,status,request){
//console.log(respuesta);
console.log(arguments);
$("#redes").append(respuesta);
},

error:function(request,tipoError,mensaje){
console.log(arguments);
},

//se ejecuta siempre, independiente del error
complete:function(request,status){
console.info(arguments);
},
//cuanto puede durar el request
timeout:1,


});

*/
//jQuery 3.0 Promise API

$.ajax('social.html')
//sucess()
.done(function(respuesta){
	$("#redes").append(respuesta);
})

//error()
.fail(function(request,tipoError,mensaje){
console.error(arguments);
})

.always(function(){
console.log(arguments);
});

});