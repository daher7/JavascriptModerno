class Interfaz {

    constructor() {

        //Inicializar Mapa
        this.inicializarMapa();

    }

    inicializarMapa() {
        //Inicializar y obtener la propiedad del mapa
        this.latLng = {
            lat: 19.390519,
            lng: -99.3739778
        };

        this.mapa = new google.maps.Map(document.getElementById('mapa'), {
            center: this.latLng,
            zoom: 6
        });
    }

}