class Interfaz {

    constructor() {

        this.construirSelect();
    }

    //1º Rellenar select con las criptomonedas de
    construirSelect() {

        cotizador.obtenerMonedasApi()
            .then(monedas => {

                //Es monedas porque asi lo llamamos en el cotizador
                const val = monedas.monedas;

                //Rellenar el select con las options
                let plantilla = '';

                val.forEach(moneda => {

                    //Añadir id, valor y asignarlo al select
                    plantilla += `<option value="${moneda.id}">${moneda.name}</option>`;
                })
                // Imprimir los datos por pantalla
                document.getElementById('criptomoneda').innerHTML = plantilla;
            })
    }

    imprimirMensaje(mensaje, clases) {

        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //Insertar mensaje en el DOM
        const divMensaje = document.querySelector('.mensajes');

        //Agregamos el div a mensajes
        divMensaje.appendChild(div);

        //Desaparece mensaje de error tras 2 segundos
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 2000);
    }

    //Imprime por pantalla el resultado de la cotizacion
    mostrarResultado(resultado, moneda) {

        //Quitar resultado previo
        const resultadoAnterior = document.querySelector('#resultado > div');

        if (resultadoAnterior){
            resultadoAnterior.remove();
        }

        //Mostrar el spinner antes de que se carguen los datos       
        this.cargarSpinner();

        //construir la etiqueta de precio segun la moneda
        const etiquetaMoneda = `price_${moneda}`;

        //Leer valor del resultado
        const valor = resultado[etiquetaMoneda];
        
        //Convierte el texto de la moneda a mayúsculas para que quede mejor en la plantilla
        const monedaMayus = moneda.toUpperCase();

        //Convierte la hora en formato UNIX a horas y minutos 
        const hora = new Date(resultado.last_updated * 1000);
        const horaActualizada = `${hora.getHours()}:${hora.getMinutes()}`;
        console.log(horaActualizada);

        //Contruccion del template
        let plantilla = '';
        plantilla += `<div class="card cyan darken-3">
                        <div class="card-content white-text">
                            <span class="card-title">Resultado:</span>
                                <p>El precio de ${resultado.name} a ${monedaMayus} es de ${valor}</p> 
                                <p>Última hora: ${resultado.percent_change_1h}</p>
                                <p>Últimas 24 horas: ${resultado.percent_change_24h}</p>
                                <p>Última Semana: ${resultado.percent_change_7d}</p>
                                <p>Última actualización ${horaActualizada} horas</p>
                        </div>
                      </div>`;

        //Retrasar la carga del resultado para que se muestre primero el spinner
        setTimeout(() => {

            // Imprime el resultado
            document.getElementById('resultado').innerHTML = plantilla;

            // Ocultar el spinner
            document.querySelector('.spinner img').remove();
        }, 2000);

    }

    //Mostrar un spinner simulando el cálculo de los datos
    cargarSpinner() {

        const spinner = document.createElement('img');
        spinner.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinner);
    }
}