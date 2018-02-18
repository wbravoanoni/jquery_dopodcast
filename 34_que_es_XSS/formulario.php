<?php
//desactivar la proteccion
//header('X-XSS-Protection:0');

if(isset($_POST["nombre"]) && isset($_POST["mensaje"]) ){

//echo "Nombre:".$_POST["nombre"]." Mensaje".$_POST["mensaje"];
$fecha=Date("d-m-Y H:i:s");

//$nombre  = strip_tags($_POST["nombre"]);
//$mensaje = strip_tags($_POST["mensaje"]);

$nombre  = $_POST["nombre"];
$mensaje = $_POST["mensaje"];

$nombre  = strip_tags($nombre);
$mensaje = strip_tags($mensaje);

$nombre  = str_replace("'",' \' ',$nombre);
$nombre = str_replace('"'," \" ",$nombre);    

$mensaje  = str_replace("'",' \' ',$nombre);
$mensaje = str_replace('"'," \" ",$nombre);    

$datos["nombre"]  = $nombre;
$datos["mensaje"] = $mensaje;
$datos["fecha"]   = $fecha;

echo json_encode($datos);

}else{
	echo "no se ha enviado información";
}

?>