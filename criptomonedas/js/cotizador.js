class Cotizador {

    //Obtiene el JSON con las criptomonedas
    async obtenerMonedasApi() {

        //1º Fetch a la API
        const urlApi = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        //2º Respuesta en JSON de las monedas
        const monedas = await urlApi.json();

        //3º Mandamos el resultado como objeto
        return {
            //Con este nombre es como le mando los datos a la interfaz
            monedas
        }
    }

    async obtenerValores(moneda, cripto) {

        //Agrega los select a la url:
        const urlConvertir = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cripto}/?convert=${moneda}`);

        const resultado = await urlConvertir.json();

        //Mandamos el resultado como objeto
        return {
            resultado 
        }
    }
}