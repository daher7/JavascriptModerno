//Declaracion de variables
const formulario = document.getElementById('generar-nombre');

//Asignacion de listeners
formulario.addEventListener('submit', generarUrl);

//Funciones
function generarUrl(e) {
    //Por usar el submit hacemos prevent default
    e.preventDefault();

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
    conexionFetchApi(url);
}

function conexionFetchApi(url) {

    fetch(url)
        .then(res => res.json())
        .then(function (data) {

            //Generamos la plantilla para pintarla en el html
            let plantilla = '<h2 style="text-align:center">Nombres Generados</h2>';
            plantilla += '<ul class="lista">';

            data.forEach(nombres => {
                plantilla += `<li>${nombres.name}<li>`;
            })
            plantilla += '</ul>';

            //Agregamos la plantilla al Html
            document.getElementById('resultado').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}