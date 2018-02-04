$(document).ready(function(){
console.log("DOM cargado script11");



$("#boton").on("click",function(){

$("#contenido").find("p").children(2).css({"color":"red"});

});


$("#parrafo2").on("click",function(evento){

$("#contenido").find(this).css({"color":"red"});
evento.preventDefault();
console.log(evento);
});


$("#link").on("click",function(event){

event.preventDefault();
alert("Este link esta desactivado");
});



});


