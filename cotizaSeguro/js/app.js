//Variables
const formulario = document.getElementById('cotizar-seguro');

//Agregar Listeners
formulario.addEventListener('submit', enviarFormulario);

//Constructor de Seguro:
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
//Prototype de seguro para hacer la cotizacion con los Datos
Seguro.prototype.cotizarSeguro = function () {
    /**
     *  1 = americano 1.15
     *  2 = asiatico 1.05
     *  3 = europeo 1.35
     */

    // Declaramos las variables
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }

    // Leer el año
    const diferencia = new Date().getFullYear() - this.anio;
    // Cada año se reduce el seguro en un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100

    /*
        Si el seguro es básico se multiplica por 30% más
        Si el seguro es completo se multiplica por 50% más
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.50;
    } else {
        cantidad *= 1.30;
    }

    return cantidad;
}

//POO
function Interfaz() {

}

//Mensaje que se imprime en el Html:
Interfaz.prototype.mostrarMensaje = function (mensaje, tipo) {

    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function () {
        document.querySelector('.mensaje').remove();
    }, 1000);

}

// Mostrar el resultado de la cotizacion por pantalla
Interfaz.prototype.mostrarResultado = function (seguro, total) {

    const resultado = document.getElementById('resultado');
    let marca;

    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiático';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }
    const div = document.createElement('div');
    //Insertamos la informacion
    div.innerHTML= `
        <p class="header">Tu Resúmen </p>
        <p>Marca: ${marca} </p>
        <p>Año: ${seguro.anio} </p>
        <p>Tipo: ${seguro.tipo} </p>
        <p>Total: ${total} € </p> `

    //Mostrar el spinner de Calculando:
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';

    setTimeout(function(){
        spinner.style.display='none';
        resultado.appendChild(div);
    }, 1000);
    
}

//Agregar lista de años en el select
let anioMax = new Date().getFullYear(); //Obtenemos el año actual
let anioMin = anioMax - 20;

const selectAnios = document.getElementById('anio');
for (let i = anioMax; i >= anioMin; i--) {

    //Vamos a rellenar el Select
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectAnios.appendChild(option);
}

//Funciones
function enviarFormulario(e) {
    e.preventDefault();

    //Recoger datos de la marca
    const marca = document.getElementById('marca');
    const marcaElegida = marca.options[marca.selectedIndex].value; //Acceder a los valores del option

    //Recoger datos del anio
    const anio = document.getElementById('anio');
    const anioElegido = anio.options[anio.selectedIndex].value;

    //Recoger datos del radio-button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    comprobarDatos(marcaElegida, anioElegido, tipo);
}

function comprobarDatos(marca, anio, tipo) {

    // Instanciamos la interfaz para mostrar el mensaje de error
    const interfaz = new Interfaz();

    if (marca === '' || anio === '' || tipo === '') {

        //Llamamos al prototype de interfaz
        //Faltan datos
        interfaz.mostrarMensaje('Faltan datos, comprueba que todo esté correcto y vuélvelo a intentar', 'error');

    } else {
        //Limpiar los resultados anteriores
        const resultado = document.querySelector('#resultado div');
        if(resultado != null){
            resultado.remove();
        }

        //Instanciar Seguro y Mostrar interfaz
        const seguro = new Seguro(marca, anio, tipo);

        //Cotizar el coche 
        const cantidad = seguro.cotizarSeguro();

        //Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Calculando el seguro', 'correcto');
        console.log(cantidad);
    }
}