//Declaracion de variables
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

const xhr = new XMLHttpRequest();

//Asignacion de listeners
boton1.addEventListener('click', leerUnEmpleado);
boton2.addEventListener('click', leerVariosEmpleados);

//Funciones
function leerUnEmpleado() {

    //Abrimos la conexion
    xhr.open('GET', 'empleado.json', true);

    //Llamamos al método onload
    xhr.onload = function () {
        if (xhr.status === 200) {
            let empleado = xhr.responseText;

            //Parseamos los datos
            empleado = JSON.parse(empleado);

            //Creamos la plantilla
            const plantilla = `<ul>
                            <li>ID: ${empleado.id}</li>
                            <li>Nombre: ${empleado.nombre}</li>
                            <li>Empresa: ${empleado.empresa}</li>
                            <li>Puesto: ${empleado.trabajo}</li>  
                       </ul>`;
            document.getElementById('empleado').innerHTML = plantilla;
        }
    }
    //Enviamos el send
    xhr.send();
}


function leerVariosEmpleados() {

    //Abrimos la conexion
    xhr.open('GET', 'empleados.json', true);

    //Llamamos al método onload
    xhr.onload = function () {
        if (xhr.status === 200) {
            let empleados = xhr.responseText;

            //Parseamos los datos
            empleados = JSON.parse(empleados);

            let plantilla = ''; //Hay que inicializarla a 0 para que se pueda rellenar

            empleados.forEach(function (empleado) {

                plantilla += `<ul>
                            <li>ID: ${empleado.id}</li>
                            <li>Nombre: ${empleado.nombre}</li>
                            <li>Empresa: ${empleado.empresa}</li>
                            <li>Puesto: ${empleado.trabajo}</li>    
                       </ul>`;
                document.getElementById('empleados').innerHTML = plantilla;
            })

        }
    }
    //Enviamos el send
    xhr.send();
}