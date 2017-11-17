//window.addEventListener('load', function(event) { 
function contador(campo, cuentacampo, limite) { 
  if (campo.value.length > limite) campo.value = campo.value.substring(0, limite); 
  else cuentacampo.value = limite - campo.value.length; 
} 

var estado = function() {
  var mystate = document.getElementsByTagName('textarea').textContent;
  console.log(mystate);
}

var mensaje = document.getElementById('mensaje');
var boton = document.getElementById('boton');
var tweets = document.getElementById('insert-tweet');

boton.addEventListener('click', function(event){
  if(mensaje.value){
    var div = document.createElement('div');
    var p = document.createElement('p');
    div.setAttribute('style', 'background-color:white; color:blue; heigth:100px; width:100px; display:inline-block');
    p.textContent = mensaje.value;
    div.appendChild(p);
    tweets.appendChild(div);

  }
});

//});


