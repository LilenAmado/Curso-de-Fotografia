const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const mensajeEnviado = document.getElementById('mensajeEnviado');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  if (!email.includes('@')) {
    emailError.style.display = 'block';
    emailInput.setCustomValidity('El correo electrónico debe contener "@"');
  } else {
    emailError.style.display = 'none';
    emailInput.setCustomValidity('');
  }
});

function enviarMensaje(event) {
  const email = emailInput.value;
  if (!email.includes('@')) {
    emailError.style.display = 'block';
    emailInput.setCustomValidity('El correo electrónico debe contener "@"');
    event.preventDefault(); 
  } else {
    mensajeEnviado.style.display = 'block';
    event.preventDefault(); 
  }
}
