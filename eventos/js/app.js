//Instanciar las 2 clases
const eventbrite = new EventBrite();
const interfaz = new Interfaz();
const buscarBtn = document.getElementById('buscarBtn');

//Asignar listener y funcionalidad
buscarBtn.addEventListener('click', (e) => {

    e.preventDefault();

    //Leer el texto del término a buscar
    const termino = document.getElementById('evento').value;

    //Leer la categoria
    const id = document.getElementById('listado-categorias').value;

    //Revisar que el input no esté vacio
    if (termino === '') {

        //Mostrar mensaje de Error
        interfaz.mostrarMensaje('Escribe algún término de búsqueda', 'alert alert-danger mt-4 text-center');

    } else {

        //Obtener eventos
        eventbrite.obtenerEventos(termino, id)
            .then(eventos => {        

                if (eventos.eventos.events.length > 0) {
                    
                    interfaz.limpiarResultados();
                    //Mostrar los eventos por pantalla:
                    interfaz.mostrarEventos(eventos.eventos);

                } else {

                    //Mensaje que indica que no hay resultados
                    interfaz.mostrarMensaje('No se ha encontrado ningún evento', 'alert alert-danger mt-4 text-center');
                }

            })
    }
})