<?php

  $con = new mysqli('localhost', 'root', '', 'geotableros');
  $id = $_GET['id']
  $tableros = "SELECT * FROM lugares WHERE idTablero = $id;";

  $respuestatableros = $con->query($tableros);

  $arreglo = array();

  array_push($arreglo, array('id' => $tablero->idLugar ,
                             'nombre' => $tablero->nombreLugar
                             'precio' => $tablero->precioLugar
                             'descripcion' => $tablero->descripcionLugar
                             'categoria' => $tablero->categoriaLugar
                             'longitud' => $tablero->longitudLugar
                             'latitud' => $tablero->latitudLugar
                           ));

  echo json_encode($arreglo);
 ?>
