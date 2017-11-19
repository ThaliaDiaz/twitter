window.addEventListener('load', function(event) {
  /* Declaración de variables*/ 
  var mensaje = document.getElementById('mensaje');
  var boton = document.getElementById('boton');
  var tweets = document.getElementById('mis-tweets');
  var linea = document.getElementById('linea');
  var contar = document.getElementById('characters');
  

  /* evento para contar mi mensaje(tweet) ingresado*/ 
  mensaje.addEventListener('keyup', contador);
  function contador() {
    var lengthText = 140 - (mensaje.value.length);
    contar.textContent = lengthText;
  }

  /* redimensionando textarea*/
  mensaje.addEventListener('keydown', autosize);
      
  function autosize() {
    var areaText = this;
    setTimeout(function() {
      areaText.style.cssText = 'height:auto; padding:0';
      areaText.style.cssText = 'height:' + areaText.scrollHeight + 'px';
    }, 0);
  }
  /* Evento que crea mi una nueva sección donde muestro mi tweet*/ 
  boton.addEventListener('click', function(event) {
    event.preventDefault();
    // atrapa la hora actual 
    var hora = new Date();
    if (mensaje.value) {
      var div = document.createElement('div');
      var parrafo = document.createElement('p');
      parrafo.innerHTML = mensaje.value + '\n' + hora;
      parrafo.classList.add('div-tweet');
      tweets.appendChild(div);
      div.appendChild(parrafo);
      mensaje.value = '';
    }
  });

  /* función desactivar el boton si está vacío el textarea */
  function validButtom() {
    if (mensaje.value === ' ' || isNaN(mensaje.value) !== true) {
      boton.disabled = true;
      boton.classList.remove('estado-act');
      boton.classList.add('estado-des');
    } else {
      boton.disabled = false;
      boton.classList.remove('estado-des');
      boton.classList.add('estado-act');
    }
  }
  mensaje.addEventListener('keyup', validButtom);
});


