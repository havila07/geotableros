<?php

  $con = new mysqli('localhost', 'root', '', 'geotableros');
  $tableros = "SELECT * FROM tableros;";

  $respuestatableros = $con->query($tableros);

  $arreglo = array();

  while ($tablero=$respuestatableros->fetch_object()) {
    array_push($arreglo, array('id' => $tablero->idTablero ,
                               'nombre' => $tablero->nombreTablero));
  }

  echo json_encode($arreglo);
 ?>
