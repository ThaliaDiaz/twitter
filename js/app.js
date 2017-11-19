window.addEventListener('load', function(event) {
  /* Declaración de variables*/ 
  var mensaje = document.getElementById('mensaje');
  var boton = document.getElementById('boton');
  var tweets = document.getElementById('mis-tweets');
  var linea = document.getElementById('linea');
  var contar = document.getElementById('characters');
  

  /* evento para contar mi mensaje(tweet) ingresado*/ 
  mensaje.addEventListener('keyup', contador);
  function contador(event) {
    var lengthText = 140 - (mensaje.value.length);
    contar.textContent = lengthText;
    if (mensaje.value.length > 120 && mensaje.value.length <= 130) {
      contar.classList.remove('span-start');
      contar.classList.add('red');
    } else if (mensaje.value.length > 130 && mensaje.value.length <= 140) {
      contar.classList.remove('red');
      contar.classList.add('green');
    } else {
      contar.classList.remove('green');
      contar.classList.remove('red');
      contar.classList.add('span-start');
    }
  }

  /* redimensionando textarea para que crezca de acuerdo al tamaño de mi texto o a los enter presionados*/
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
    if (mensaje.value === ' ' || isNaN(mensaje.value) !== true || mensaje.value.length > 140) {
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


