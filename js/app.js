const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners()
function eventListeners() {
  formulario.addEventListener( 'submit', agregarTweet )
}

function agregarTweet(e) {
  e.preventDefault();

  // Textarea dond el usuario escribe 
  const tweet = document.querySelector('#tweet').value;
  
  // Validación
  if( tweet == '' ) {
    mostrarError('un mensaje no puede ir vacío');
    return;
  } 
}

// Mostrar mensaje de error 
function mostrarError(error) {
  const mensajeError = document.createElement('P');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}