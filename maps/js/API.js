class Api {
    
    async obtenerDatos() {
        //Obtener desde la API
        const datos = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

        //Retornar como JSON
        const respuesta = await datos.json();

        //Devolvemos el objeto
        return {
            respuesta
        }
    }
}