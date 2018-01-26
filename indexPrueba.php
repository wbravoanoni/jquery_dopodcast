<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<script src="https://code.jquery.com/jquery-git.js"></script>
<script type="text/javascript">
$(document).ready(function() {    
    $('.button').click(function(){

        //Añadimos la imagen de carga en el contenedor
        $('#content').html('<div><img src="images/giphy.gif"/></div>');

        var page = $(this).attr('data');        
        var dataString = 'page='+page;

        $.ajax({
            type: "GET",
            url: "includes/archivo.php",
            data: dataString,
            success: function(data) {
                //Cargamos finalmente el contenido deseado
                $('#content').fadeIn(1000).html(data);
               // alert(data);
            }
        });
    });              
});    
</script>

<body>

	<h1>Prueba</h1>
	
        <div id="elementos">Contenido</div>
    <div id="content"></div>
    <button class="button">Enviar</button>

</body>
</html>