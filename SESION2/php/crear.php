<?php

  $nombre = $_GET['nombre'];

  //CADENA DE CONEXIÓN (ORIENTADA A OBJETOS)
  $conexion = new mysqli('localhost', 'root', '', 'geotableros');

  //CREAMOS EL QUERY DE INSERSIÓN
  $insertar = "INSERT INTO tableros (nombreTablero) VALUES ('$nombre');";

  //EJECUTAMOS EL QUERY
  $conexion->query($insertar);

 ?>
