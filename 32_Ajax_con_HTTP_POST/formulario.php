<?php

if(isset($_POST["nombre"]) && isset($_POST["mensaje"]) ){

//echo "Nombre:".$_POST["nombre"]." Mensaje".$_POST["mensaje"];
$fecha=Date("d-m-Y H:i:s");

$datos["nombre"]  = $_POST["nombre"];
$datos["mensaje"] = $_POST["mensaje"];
$datos["fecha"]   = $fecha;

echo json_encode($datos);

}else{
	echo "no se ha enviado información";
}
?>