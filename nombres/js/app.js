//Declaracion de variables
const formulario = document.getElementById('generar-nombre');

//Asignacion de listeners
formulario.addEventListener('submit', generarNombre);

//Funciones
function generarNombre(e) {
    //Por usar el submit hacemos prevent default
    e.preventDefault();

    /**
     * Declaracion de variables:
     */
    //Recogida de datos
    const origen = document.getElementById('origen').value;
    const genero = document.getElementById('genero').value;
    const numero = document.getElementById('numero').value;

    //Construccion de la url
    let url = '';
    url += 'https://uinames.com/api/?';

    //Si hay origen agregarlo a la url
    if (origen !== '') {
        url += `region=${origen}&`;
    }
    //Si hay genero agregarlo a la url:
    if (genero !== '') {
        url += `gender=${genero}&`;
    }
    //Agregar el número a la url
    if (numero !== 0) {
        url += `amount=${numero}`;
    }
    //Ajax
    conexionAjax(url);
}

function conexionAjax(url) {
    /**
     * Conectar con AJAX
     */
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {

            //Parseamos el resultado
            const nombres = JSON.parse(xhr.responseText);

            //Generamos la plantilla para pintarla en el html
            let plantilla = '<h2 style="text-align:center">Nombres Generados</h2>';
            plantilla += '<ul class="lista">';

            nombres.forEach(function (nombres) {
                plantilla += `<li>${nombres.name} ${nombres.surname}<li>`;
            })
            plantilla += '</ul>';

            //Agregamos la plantilla al Html
            document.getElementById('resultado').innerHTML = plantilla;
        }
    }

    //Enviamos la respuesta
    xhr.send();
}