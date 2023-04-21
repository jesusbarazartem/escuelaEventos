function validar(formulario) {

  if (formulario.nombres.value.length == 0) {
    var elemento = document.getElementById('errornombres');
    elemento.innerHTML = 'Este campo es obligatorio';
    return false;
  }

  if (formulario.email.value.length == 0) {
    var elemento = document.getElementById('errorEmail');
    elemento.innerHTML = 'Este campo es obligatorio';
    return false;
  }

  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!re.test(formulario.email.value)) {
    var elemento = document.getElementById('errorEmail');
    elemento.innerHTML = 'Correo Electronico Invalido!';
    return false
  }

  if (formulario.contrasena.value == 0) {
    var elemento = document.getElementById('errorContrasena');
    elemento.innerHTML = 'Este campo es obligatorio';
    return false;
  };

  var ps = /^.{8,}$/
  if (!ps.test(formulario.contrasena.value)) {
    var elemento = document.getElementById('errorContrasena');
    elemento.innerHTML = 'La contraseña debe contener mas de 8 caracteres';
    return false;
  };

  if (formulario.confirmacion.value == 0) {
    var elemento = document.getElementById('errorConfirmacion');
    elemento.innerHTML = 'Este campo es obligatorio';
    return false;
  };

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    var elemento = document.getElementById('errorConfirmacion');
    elemento.innerHTML = 'Las contrasenas no conhinciden';
    return false;
  };

  if (formulario.tipo.value == -1) {
    var elemento = document.getElementById('errorTipo');
    elemento.innerHTML = 'Debes elegir el tipo de usuario';
    return false;
  };

  if (!formulario.acepto.checked) {
    var elemento = document.getElementById('errorAcepto');
    elemento.innerHTML = 'Este campo es obligatorio';
    return false;
  };

  alert('Te has registrado Exitosamente!');
  return true;
  
};
