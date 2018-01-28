$(document).ready(function(){
console.log("DOM cargado script10");


$(".contenido").find("p").css({"padding-bottom":"20px"});

var enlaceI=$("<a href='#'>Link de inicio</a>");
var enlaceF=$("<a href='#'>Link del final</a>");

$(".contenido").find("p").before(enlaceI);
$(".contenido").find("p").after(enlaceF);

//Esta linea es para la cinthia
  
  //Esta linea es nueva
  
});
