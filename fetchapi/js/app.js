//Declaracion de variables
const txtBtn = document.getElementById('txtBtn');
const jsonBtn = document.getElementById('jsonBtn');
const apiBtn = document.getElementById('apiBtn');

//Asignacion de listeners
txtBtn.addEventListener('click', cargarTxt);
jsonBtn.addEventListener('click', cargarJson);
apiBtn.addEventListener('click', cargarApi);

//Funciones
function cargarTxt() {

    fetch('datos.txt')
        .then(function (resp) {
            return resp.text(); //Al ser datos en txt tenemos que usar el metodo text()  
        })
        .then(function (data) {
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function cargarJson() {

    fetch('empleados.json')
        .then(function (res) {
            return res.json(); //Al ser datos en json, hay que usar el metodo json()
        })
        .then(function (data) {

            let plantilla = '';
            plantilla += '<h3>Empleados y puesto</h3>'

            data.forEach(function (empleado) {
                plantilla += `<li>Nombre: ${empleado.nombre} - Puesto: ${empleado.puesto}.</li>`;
            });
            //Imprimimos el resultado por pantalla:
            document.getElementById('resultado').innerHTML = plantilla;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function cargarApi() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            let plantilla = '';
            data.forEach(function (datos) {
                plantilla += `<li>  
                                    ${datos.author}: <a href="${datos.post_url}" target="_blank">${datos.filename}</a>
                              </li>`;
                console.log(datos);
            })
            document.getElementById('resultado').innerHTML = plantilla;
        })
        .catch(function (error) {
            console.log(error);
        });
}