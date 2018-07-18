//Declaracion de variables
const btnBuscar = document.getElementById('buscar');

//Asiganacion de listeners
btnBuscar.addEventListener('click', crearUrl);

//Funciones:
function crearUrl() {

    //Recogemos el término a buscar
    const cancion = document.getElementById('cancion').value;

    //Creamos la Url
    let url = 'https://itunes.apple.com/search?media=music&limit=50';
    url += `&term=${cancion}`;

    //Llamamos a la funcion
    buscarCancion(url);
}

function buscarCancion(url) {

    //Conexion fetch-api
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let plantilla = '';

            //Creamos la cabecera
            plantilla += `<table>
                            <tr>
                                <td>Portada</td>
                                <td>Grupo</td>
                                <td>Título</td>
                                <td>Precio</td>
                                <td>Moneda</td>
                                <td>Audio</td>
                            </tr> `

            //Recorremos los datos que nos devuelve el Json
            data.results.forEach(cancion => {

                //Rellenamos la plantilla
                plantilla += `<tr>
                                <td><img src="${cancion.artworkUrl100}"></img></td>
                                <td>${cancion.artistName}</td>
                                <td>${cancion.trackName}</td>
                                <td>${cancion.trackPrice}</td>
                                <td>${cancion.currency}</td>
                                <td><audio src="${cancion.previewUrl}" controls></td>
                              </tr>`;
            });
            plantilla += `</table>`;

            //Agregamos la plantilla al html
            document.getElementById('resultado').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}