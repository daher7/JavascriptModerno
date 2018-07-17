const btnCargar = document.getElementById('cargar');

btnCargar.addEventListener('click', cargarDatos);


function cargarDatos() {
    // Crear el objeto
    const xhr = new XMLHttpRequest();

    //Abrimos la conexion
    xhr.open('GET', 'datos.txt', true);

    //Procesamos los estados:
    /**
     *  Ready status
     *  0 - No inicializado
     *  1 - Conexion establecida
     *  2 - Peticion Recibida
     *  3 - Procesando
     *  4 - Respuesta lista
     */
    xhr.onreadystatechange = function () {
        //La conexion se ha realizado con exito cuando
        console.log(`Estado ${xhr.readyState}`);

        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('Respuesta lista');
        }
    }


    //Enviamos la peticion
    xhr.send();
}


/**
 * Asi es como se trabaja ahora con AJAX
 */
function cargarDatosAhora() {
    // Crear el objeto xmlhhtprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga
    xhr.onload = function () {
        //200: Correcto |   403: Prohibido |    404:No encontrado
        if (xhr.status === 200) {
            document.getElementById('listado').innerHTML = xhr.responseText;
        }
    }

    // Enviar la peticion
    xhr.send();
}