<?php

include("conexion.php");

$rut			= $_POST["txt_rut"];
$contrasenna	= $_POST["txt_contrasenna"];


$query = mysqli_query($conn,"SELECT * FROM administrador WHERE rut = '$rut' AND contrasenna='$contrasenna'");
	
$nr = mysqli_num_rows($query);
if($nr==1)
{
    while($admin = mysqli_fetch_array($query))
    {
        $rut = $admin['rut'];
        $nombre = $admin['nombre'];
        $apellido = $admin['apellido'];
        $email = $admin['correo'];
        $contrasenna = $admin['contrasenna'];

        echo "<script>
            window.location='graficos.php';
            alert('Bienvenido ".$nombre." ".$apellido."');
        </script>";

    }
    
} else
{
    echo "<script> alert('No eres el administrador');window.location='admin.html'; </script>";
}


?>