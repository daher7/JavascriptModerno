//Declaracion de variables:
const btnCargar = document.getElementById('cargar');

//Asignacion de listeners
btnCargar.addEventListener('click', cargarApi);

//Funciones
function cargarApi() {

    const xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts';

    //Abrimos la conexion
    xhr.open('GET', url, true);

    //Carga y lectura de datos
    xhr.onload = function () {

        if (xhr.status === 200) {
            //Recogemos la informacion y la "parseamos"
            const datos = JSON.parse(xhr.responseText);

            //Recorremos el array y lo pintamos por pantalla
            let plantilla = '';

            datos.forEach(function (dato) {
                plantilla += `
                                <h5>${dato.title}</h5>
                                <p>${dato.body}</p>
                            `;
                document.getElementById('listado').innerHTML = plantilla;
            })
        }
    }
    //Enviamos la conexion
    xhr.send();

}