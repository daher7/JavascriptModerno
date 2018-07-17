//Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');

let cantidadPresupuesto; // Variable global disponible en todo el programa

//Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //Método para calcular el restante
    presupuestoRestante(cantidad = 0) { //Le pasamos un valor por default de 0

        return this.restante -= Number(cantidad);
    }
}

//Para manejar todo lo relacionado con el html
class Interfaz {

    //Métodos:
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.getElementById('total');
        const restanteSpan = document.getElementById('restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {

        const div = document.createElement('div');
        div.classList.add('text-center', 'alert'); // Al estar hecho con Bootstrap le agrrega esta clase

        if (tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }
        div.appendChild(document.createTextNode(mensaje));

        //Insertar mensaje en el DOM
        document.querySelector('.primario').insertBefore(div, formulario);

        //Quitar el mensaje de error tras 2.5 segundos
        setTimeout(function () {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 2500);
    }

    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul');

        //Crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertar el gasto
        li.innerHTML = `${nombre}
                        <span class="badge badge-primary badge-pill"> ${cantidad} €</span>`;
        //Insertar al html:
        gastosListado.appendChild(li);
    }

    //Comprueba el presupuesto restante
    presupuestoRestante(cantidad) {
        const restante = document.getElementById('restante');

        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `${presupuestoRestanteUsuario}`;

        this.comprobarPresupuesto()
    }
    //Cambia de color el presupuesto restante en funcion del porcentaje que nos hayamos gastado
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        const restante = document.querySelector('.restante');

        if ((presupuestoTotal / 4) > presupuestoRestante) { //Inferior al 25%
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');

        } else if((presupuestoTotal / 2) > presupuestoRestante){ //Inferior al 50%
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}

//Listeners
document.addEventListener('DOMContentLoaded', comprobarPresupuesto);

formulario.addEventListener('submit', insertarGasto);

//Funciones
function comprobarPresupuesto() {

    if (presupuestoUsuario === '' || presupuestoUsuario === null) {

        //Recargamos la ventana hasta que se introduzca un valor
        window.location.reload();
        console.log('Tienes que introducir un presupuesto');

    } else {

        // Instanciamos el Presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        //Instanciamos la clase de Interfaz
        const interfaz = new Interfaz();
        interfaz.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
}

function insertarGasto(e) {
    e.preventDefault();

    //Recogemos los datos del formulario
    const nombreGasto = document.getElementById('gasto').value;
    const cantidadGasto = document.getElementById('cantidad').value;

    //Llamamos a la interfaz
    const interfaz = new Interfaz();

    //Comprobar que los campos no estén vacios
    if (nombreGasto === '' || cantidadGasto === '') {

        interfaz.imprimirMensaje('Hubo un error', 'error');

    } else {
        interfaz.imprimirMensaje('Los datos se agregaron correctamente', 'correcto');
        interfaz.agregarGastoListado(nombreGasto, cantidadGasto);
        interfaz.presupuestoRestante(cantidadGasto);
    }
}