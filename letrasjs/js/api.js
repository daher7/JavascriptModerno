//Creamos la clase API
export class Api {

    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    //Usamos async-await
    async consultarApi() {

        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

        const respuesta = await url.json();

        return{
            respuesta
        }
    }
}