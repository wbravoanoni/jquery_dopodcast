$(document).ready(function(){
console.log("DOM cargado script13");


$("#contenido").find("p").on("click",function(){


if($(this).css("color")=="rgb(255, 0, 0)"){

var $color=$(this).css("color");

$(this).css({"color":"black"});
var valor=$(this).attr("id");
console.log($color);


}else{
$(this).css({"color":"red"});
var valor=$(this).attr("id");
var $color=$(this).css("color");

console.log($color);

}


});



});


