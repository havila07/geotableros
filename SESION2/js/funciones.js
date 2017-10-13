window.addEventListener('load', inicializar, true);

function inicializar() {
  verMapa();
}

function verMapa() {
  navigator.geolocation.getCurrentPosition(lugar);
}

function lugar(coordenadas) {
  longitud = coordenadas.coords.longitude;
  latitud = coordenadas.coords.latitude;
  console.log(longitud, latitud);
  initMap();
}

function nuevoTablero() {
  campo = document.querySelector('.tablero-nuevo');
  campo.innerHTML = "<input type='text' placeholder='¿Cómo se llama?' onblur='guardarTablero(this.value)'>";
}

function guardarTablero(nombre) {
  console.log(nombre);
  tableros = document.getElementById('tableros');
  tableros.innerHTML += "<div class='tablero'>" +
    "<i class='fa fa-thumb-tack' aria-hidden='true'></i>" +
    "<h1>" + nombre + "</h1>" +
    "</div>";
    campo.innerHTML = "<div onclick='nuevoTablero()'>" +
      "<i class='fa fa-plus-square-o' aria-hidden='true'></i>" +
      "CREAR TABLERO" +
    "</div>";

    // CREAR TABLERO EN LA BASE DE DATOS
    crear = new XMLHttpRequest();
    crear.open('GET', 'php/crear.php?nombre=' + nombre);
    crear.send();
    crear.onreadystatechange = function() {
      console.log('TABLERO CREADO');
    }
}

function navegar(direccion, id) {
  window.location.assign(direccion);
  if (id) {
    localStorage.setItem('idTablero', id);
  }
}

function guardarLugar() {
  nombre = document.getElementById('nombre');
  precio = document.getElementById('precio');
  descripcion = document.getElementById('descripcion');
  categoria = document.getElementById('categoria');
  idTablero = localStorage.getItem('idTablero');

  //ENVIAR CON AJAX
  enviar = new XMLHttpRequest(); //CREAMOS LA INSTANCIA DEL OBJETO XHR

  // Cadena de variables
  variables = 'nombre=' + nombre.value + '&precio=' + precio.value + '&descripcion=' + descripcion.value +
              '&categoria=' + categoria.value + '&longitud=' + longitud + '&latitud=' + latitud +
              '&idTablero=' + idTablero;
  enviar.open('GET', 'php/guardar.php?' + variables);
  enviar.send();
  enviar.onreadystatechange = function() {
    //CUANDO HAYA RESPUESTA
    if (enviar.status == 404 && enviar.readyState == 4) {
      alert('Lo sentimos, no hay conexión al servidor');
    }
    if (enviar.readyState == 3 && enviar.status == 200) {
      console.log('Guardando...');
    }
    if (enviar.readyState == 4 && enviar.status == 200) {
      console.log('GUARDADO!');
      console.log(enviar.responseText);
    }
  }
}
