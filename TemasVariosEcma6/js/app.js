//iteradores
const ciudades = ['Madrid', 'Oslo', 'Cracovia', 'Edimburgo', 'Estambul'];
const mensaje = 'Aprendiendo JavaScript';


//Muestra el indice del array
for(let index in mensaje){
    console.log(index);
}
//Muestra el contenido del array
for(let letra of mensaje){
    console.log(letra);
}

for (let ciudad of ciudades) {
    console.log(ciudad);
}

for (let ciudad of ciudades.entries()) {
    console.log(ciudad);
}

for (let ciudad of ciudades.keys()) {
    console.log(ciudad);
}

const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(enlace.href);
}

/**
 *       SYMBOLS
 */

//Declaramos los symbols
let saldo = Symbol();
let profesion = Symbol();

//Creamos un objeto vacio
let persona = {};

//Le vamos agregando datos
persona.nombre = 'Juan';
persona.apellido = 'Salmerón';
persona[saldo] = 15000;
persona[profesion] = 'Confidente';

//Mostramos los datos por consola
console.log(persona);

//Recorremos persona con un for y vemos que los symbol no aparecen
for (let i in persona) {
    console.log(persona[i]);
}

/**
 *  SETS
 */
let carrito = new Set();

//Para añadir elementos al set
carrito.add('Libro');
carrito.add('Batidora');
carrito.add('Detergente');
carrito.add('pinzas');

//Mostrar el resultado en consola
console.log(carrito);

//Para comprobar si un elemento está en el Set
console.log(carrito.has('Libro')); //Devuelve un boolean

//Para borrar un elemento
carrito.delete('Libro');

//Para vaciar el Set
//carrito.clear();

//Recorrer el Set
carrito.forEach((producto, index) => {
    console.log(`${index} : ${producto}`);
});

//Convertir Set en Array
const carritoArray = [...carrito];

console.log(carritoArray);

carritoArray.forEach((producto, index) => {
    console.log(`${index} : ${producto}`);
});

/**
 *   MAPS
 */
let cliente = new Map();

//Añadir valores
cliente.set('nombre', 'David');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 50000);

//Acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

//Tamaño del Map
console.log(cliente.size);

//Comprobar si un elemento existe
console.log(cliente.has('nombre'));

//Borrar un elemento
cliente.delete('nombre');

//Borrar el map 
cliente.clear();
console.log(cliente);

//Pasar parametros por defecto en un Map
const paciente = new Map([
    ['nombre', 'paciente'],
    ['habitacion', 'No definido']
]);

paciente.set('nombre', 'Antonio');
paciente.set('habitacion', 404);

console.log(paciente);

//Reccorrer con forEach
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
})