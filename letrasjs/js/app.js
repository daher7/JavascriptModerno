//Importamos las variables de interfaz.js

import * as ui from './interfaz.js';
import {
    Api
} from './api.js';

//Asignamos los listeners
ui.formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //Obtenemos los datos del formulario
    const artista = document.getElementById('artista').value,
        cancion = document.getElementById('cancion').value;

    //Evitamos que haya campos vacios
    if (artista === '' || cancion === '') {

        //Campos vacios
        ui.mensajes.classList.add('error'); //Añadimos la clase error al div del mensaje
        ui.mensajes.innerHTML = 'Error... todos los campos son obligatorios'; //Añadimos el texto al div  

        //Limpiamos el mensaje de error tras 1 segundo
        setTimeout(() => {
            ui.mensajes.classList.remove('error'); //Añadimos la clase error al div del mensaje
            ui.mensajes.innerHTML = ''; //Añadimos el texto al div
        }, 2000);

    } else {
        //Consulta a la API
        const api = new Api(artista, cancion);

        //Nos traemos los resultados
        api.consultarApi()
            .then(respuesta => {
                
                const letra = respuesta.respuesta.lyrics;

                if (letra) {
                    //Sí hay canción
                    ui.resultado.innerHTML = letra;

                } else {
                    //No se ecnontró la canción
                    ui.mensajes.classList.add('error'); //Añadimos la clase error al div del mensaje
                    ui.mensajes.innerHTML = 'No se encontró la canción'; //Añadimos el texto al div  

                    //Limpiamos el mensaje de error tras 2 segundos
                    setTimeout(() => {
                        ui.mensajes.classList.remove('error'); //Añadimos la clase error al div del mensaje
                        ui.mensajes.innerHTML = ''; //Añadimos el texto al div
                        ui.formulario.reset() //Limpiamos el formulario
                    }, 2000);
                }
            })
    }

})