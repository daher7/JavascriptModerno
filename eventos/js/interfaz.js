//Clases
class Interfaz {
    constructor() {

        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado de los eventos que vengan de la API/Base de Datos
        this.listado = document.getElementById('resultado-eventos');
    }

    //Método para cuando inicialice la app
    init() {

        //Llamar a imprimir categorias de la REST API
        this.imprimirCategorias();
    }

    //Imprimir Caategorías
    imprimirCategorias() {

        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;

                //Seleccionar el select de categorias
                const selectCategorias = document.getElementById('listado-categorias');

                //Crear la plantilla
                let option = '';
                cats.forEach((datos) => {

                    option += `<option value="${datos.id}">${datos.name}</option>`;
                })

                //Rellenamos el select
                selectCategorias.innerHTML = option;
            });
    }

    //Método para mostrar mensajes
    mostrarMensaje(mensaje, clases) {

        //Creamos el cuerpo del mensaje
        const div = document.createElement('div');
        div.classList = clases;

        //Agregamos el texto
        div.appendChild(document.createTextNode(mensaje));

        //Buscar padre donde insertar el div
        const buscadorDiv = document.getElementById('buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            this.limpiarMensaje();
        }, 2000)

    }

    //Eliminar mensaje en caso de que exista
    limpiarMensaje() {
        const alerta = document.querySelector('.alert');

        if (alerta) {
            alerta.remove();
        }
    }

    //Mostrar el resultado por pantalla
    mostrarEventos(eventos) {
        const listaEventos = eventos.events;

        //Generar template de los eventos
        listaEventos.forEach(evento => {

            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">   
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center${evento.name.text}"></h2>
                                <p class="lead text-info">Información del Evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Entradas</a>
                            </div>
                        </div>
                    </div>
                </div> `;
        })
    }

    //Eliminar los resultados previos:
    limpiarResultados(){
        this.listado.innerHTML='';
    }


}