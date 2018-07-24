//Instanciar ambas clases
const interfaz = new Interfaz();
const api = new Api();

//Mostrar los resultados
api.obtenerDatos()
    .then(datos => {

        const resultado = datos.respuesta.results;

        //Almacena InfoWindow Activo
        let infoActivo;

        //Recorremos el resultado
        resultado.forEach(valor => {

            //Vamos a hacer Destructuring para acceder a los datos
            let {
                latitude,
                longitude,
                calle,
                regular,
                premium
            } = valor;

            //Crear objeto con latitud y longitud
            let latLng = {
                lat: Number(latitude),
                lng: Number(longitude)
            }

            //Agregamos el Pin (Todo está definido por Google)
            let marcador = new google.maps.Marker({
                position: latLng,
                map: interfaz.mapa
            });

            //Crear InfoWindow. Como hemos hecho destructuring, podemos acceder asi
            let contenido = ` <p>Direccion: ${calle}</p>
                              <p>Precio Normal: ${regular}$</p>
                              <p>Precio Premium: ${premium}$</p>`;

            let info = new google.maps.InfoWindow({
                content: contenido
            });

            //Mostrar InfoWindow al hacer click
            marcador.addListener('click', () => {

                //Cerrar InfoActivo
                if (infoActivo) {
                    infoActivo.close();
                };

                //Mostrar Info
                info.open(interfaz.mapa, marcador);

                //Asignar info a Activo
                infoActivo = info;
            })
        })
    });

//Habilitar Búsqueda
const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input', () => {
    
    //Si es mayor a 3, buscar sugerencias
    let busqueda = buscador.value;

    if (busqueda.length > 3) {

        //Obtener sugerencias que son parte de la búsqueda:
        api.obtenerDatos(busqueda)
            .then(datos => {
                //Obtener resultados
                const establecimientos = datos.respuesta.results;

                //Filtramos los resultados con el metodo filter. Devuelve el resultado filtrado en un array

                const filtro = establecimientos.filter(filtro => filtro.calle.indexOf(busqueda) !== -1); 
               
                //Inicializar el mapa
                interfaz.inicializarMapa();

                //Mostrarpines del filtro
                
            })

    } else {
        
    }
})