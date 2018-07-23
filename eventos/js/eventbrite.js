//Clases

class EventBrite {
    constructor() {
        this.token_auth = 'F53AJMWL45RJR2YPRVHK';
        this.ordenar = 'date';
    }

    //Obtiene las categorías en init()
    async obtenerCategorias() {
        //Consultar las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //Esperar la Respuesta de las categorias
        const categorias = await respuestaCategorias.json();

        //Devolvemos el resultado
        return {
            categorias
        }
    }

    //Mostrar resultados de la busqueda
    async obtenerEventos(termino, id){

        const respuestaEventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${termino}&sort_by=${this.ordenar}&categories=${id}&token=${this.token_auth}`);

        //Esperar la respuesta de los eventos
        const eventos = await respuestaEventos.json();

        //Devolvemos el resultado
        return {
            eventos
        }
    }
}