//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');
const formulario = document.getElementById('enviar-mail');

//Listeners
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Botones
    enviarBtn.addEventListener('click', enviarEmail);
    resetBtn.addEventListener('click', resetearCampos);
}


//Funciones
function inicioApp() {
    //Deshabilitar el boton de enviar
    enviarBtn.disabled = true;
}

//Valida que el campo no este vacio
function validarCampo() {

    //Validar la longitud del texto y que no esté vacío
    validarLongitud(this);

    //Vamos a validar solo el email
    console.log(this.type);

    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {

        if (errores.length === 0) {
            enviarBtn.disabled = false;
        }
    }
}

// Valida que la longitud sea mayor de 0 y pinta el error en el DOM
function validarLongitud(campo) {

    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//Validamos exclusivamente el campo tipo de email.
function validarEmail(campo) {
    const email = campo.value
    if (email.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//Resetea el formulario
function resetearCampos(){
    formulario.reset();
}

//Cuando se envia el correo
function enviarEmail(e) {
    e.preventDefault;

    //Al presionar mostramos el spinner
    const spinnerGif = document.getElementById('spinner');
    //En CSS por defecto está en display: none
    spinnerGif.style.display = 'block';

    //GIF que envia el email
    const enviado = document.createElement('img');
    enviado.src = '../img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar Gif de enviado
    setTimeout(function () {
        spinnerGif.style.display = 'none';
        
        //Hacemos visible el GIF. Para ello tenemos que ir al padre, y desde ahi crear el hijo
        document.getElementById('loaders').appendChild(enviado);

        setTimeout(function(){
            //Vamos a quitar el Gif de enviado y resetar el formulario
            enviado.style.display = 'none';
            //Resetea el formulario
            resetearCampos();

        }, 3000);
    }, 2500);

}

