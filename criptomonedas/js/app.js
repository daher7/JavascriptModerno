//Vamos a instanciar a las dos Clases que tenemos
const cotizador = new Cotizador();
const interfaz = new Interfaz();


const formulario = document.getElementById('formulario');

//Listeners 
formulario.addEventListener('submit', realizarTarea);

function realizarTarea(e) {
    //Por ser un submit
    e.preventDefault();

    //Leer la moneda seleccionada.
    const monedaSeleccionada = document.getElementById('moneda').value;
    const criptoSeleccionada = document.getElementById('criptomoneda').value;

    //Comprobar formulario no este vacio
    if (monedaSeleccionada === '' || criptoSeleccionada === '') {

        //Faltan datos
        interfaz.imprimirMensaje('Tienes que elegir una Moneda', 'deep-orange darken-4 card-panel');

    } else {

        //Tomar los valores del formulario
        cotizador.obtenerValores(monedaSeleccionada, criptoSeleccionada)

            .then(data => {

                interfaz.mostrarResultado(data.resultado[0], monedaSeleccionada.toLowerCase());
                
            })

    }

}