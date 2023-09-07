<?php

$dbhost = "localhost";
$dbuser = "cpl94434";
$dbpass = "yKKOqIzfLDXLJwFDVMHq";
$dbname = "cpl94434_Placemap";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

if(!$conn)
{
    die("No hay conexion:" .mysqli_connect_error());
}


// creación de la conexión a la base de datos con mysql_connect()
$conexion = mysqli_connect( $dbhost, $dbuser, $dbpass ) or die ("No se ha podido conectar al servidor de Base de datos");

// Selección del a base de datos a utilizar
$db = mysqli_select_db( $conexion, $dbname ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

// establecer y realizar consulta. guardamos en variable.
$consulta = "SELECT * FROM usuarios";
$resultado = mysqli_query( $conexion, $consulta) or die ( "Algo ha ido mal en la consulta a la base de datos");

?>