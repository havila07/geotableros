<?php

  $nombre = $_GET['nombre'];
  $precio = $_GET['precio'];
  $descripcion = $_GET['descripcion'];
  $categoria = $_GET['categoria'];
  $longitud = $_GET['longitud'];
  $latitud = $_GET['latitud'];
  $idTablero = $_GET['idTablero'];

  //CADENA DE CONEXIÓN (ORIENTADA A OBJETOS)
  $conexion = new mysqli('localhost', 'root', '', 'geotableros');

  //CREAMOS EL QUERY DE INSERSIÓN
  $insertar = "INSERT INTO lugares (nombreLugar, precioLugar, descripcionLugar, categoriaLugar, longitudLugar, latitudLugar, idTablero)
               VALUES ('$nombre', '$precio', '$descripcion', '$categoria', '$longitud', '$latitud', $idTablero);";

  //EJECUTAMOS EL QUERY
  $conexion->query($insertar);

 ?>
