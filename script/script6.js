$(document).ready(function(){



console.log("DOM CARGADO");


$("#img_1,#img_2").css("width","600px");

$("#img_1,#img_2").css({"backgroundColor":"red"});


$("#img_1,#img_2").fadeOut(5000);
$("#img_2").fadeIn(2000);
});