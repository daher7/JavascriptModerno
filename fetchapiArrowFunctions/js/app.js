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
        .then(resp => resp.text())
        .then(data => document.getElementById('resultado').innerHTML = data)
        .catch(error => console.log(error));
}

function cargarJson() {

    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {

            let plantilla = '';
            plantilla += '<h3>Empleados y puesto</h3>'

            data.forEach(empleado => {
                plantilla += `<li>Nombre: ${empleado.nombre} - Puesto: ${empleado.puesto}.</li>`;
            });
            //Imprimimos el resultado por pantalla:
            document.getElementById('resultado').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}

function cargarApi() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(res => res.json())
        .then(data => {

            let plantilla = '';
            data.forEach(datos => {
                plantilla += `<li>  
                                    ${datos.author}: <a href="${datos.post_url}" target="_blank">${datos.filename}</a>
                              </li>`;
                console.log(datos);
            })
            document.getElementById('resultado').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}