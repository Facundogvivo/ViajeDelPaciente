<?php

include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$emojiSmile 	= $_POST["meGustaInput"];
	$emojiAngry 	= $_POST["noMeGustaInput"];
	$fecha 			= $_POST["fechaInput"];
	$hora 			= $_POST["horaInput"];

	// Escapa los datos antes de usarlos en la consulta SQL
	$emojiSmile 	= mysqli_real_escape_string($conn, $emojiSmile);
	$emojiAngry 	= mysqli_real_escape_string($conn, $emojiAngry);
	$fecha 			= mysqli_real_escape_string($conn, $fecha);
	$hora 			= mysqli_real_escape_string($conn, $hora);

	// Realiza la inserción en la base de datos (Asegúrate de tener la conexión $conn establecida)
	$sqlgrabar = "INSERT INTO usuarios (me_gusta, no_me_gusta, fecha, hora) VALUES ('$emojiSmile', '$emojiAngry', '$fecha', '$hora')";

	if (mysqli_query($conn, $sqlgrabar)) {
		echo "<script> alert('Encuesta registrada con exito'); window.location='inicio.html' </script>";;
	} else {
		echo "Error al registrar la encuesta: " . mysqli_error($conn);
	}
}     
?>