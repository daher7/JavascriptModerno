/**
 * Con este método lo que se consigue es acceder de una forma más fácil y rápida a los datos de un objeto
 */
const persona ={
    nombre: 'David',
    profesion: 'Desarrollador',
    estudios: 'universitarios'
};

let{nombre, profesion, estudios} = persona;

console.log(persona);

console.log(nombre);
console.log(profesion);
console.log(estudios);

const cliente = {
    nombre: 'Jessica',
    clase: 'Premium',
    datos: {
        ubicacion: {
            pais: 'España',
            ciudad: 'Alcalá de Henares'
        },
        cuenta: {
            desde: '10-12-2015',
            saldo: 500000,
            movimientos: ['15-2-2017','15-2-2016','15-2-2015']
        },
    }
};

console.log(cliente);

//Acceder los datos de ubicacion:
let {datos: {ubicacion}} = cliente;

//Mostrar los datos por pantalla:
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

//Acceder a los datos de cuenta
let {datos: {cuenta}} = cliente;

console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);

//Acceder a los datos del array dentro del JSON
let {datos:{cuenta:{movimientos:[]}}} = cliente;
console.log(cliente.datos.cuenta.movimientos);

//Acceder a al primer valor del array
let {datos:{cuenta:{movimientos:[uno]}}} = cliente;
console.log(uno);

//Acceder al último valor del array. Como hay tres valores, definimos la posicion para acceder a el
let {datos:{cuenta:{movimientos:[ , ,ultimo]}}} = cliente;
console.log(ultimo);

/**
 * Destructuring en Funciones
 */

 //Forma anterior
 function reservar(completo, opciones){
    opciones = opciones || {};

 }

 reservar()