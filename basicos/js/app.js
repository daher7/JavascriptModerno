"use strict"

document.getElementById('app').innerHTML = 'Hola Mundo';

console.table([1, 21, 3, 45, 67]);

let nombre = 'David';
let edad = 40;

// Forma correcta ahora de concatenar las variables
console.log(`Te llamas ${nombre} y tienes ${edad} años.`);

/******************************************************************************* */
/************************          METODOS DE LOS STRINGS                 ****** */
/******************************************************************************* */
/*
let aprendiendo = 'Aprendiendo',
    tecnologia = 'Javascript',
    mensaje = 'Hola a todos y to,das';

console.log(tecnologia.length); // Longitud de la variable
console.log(mensaje.indexOf('todos'));
console.log(mensaje.substring(0, 4));
console.log(mensaje.slice(-1));
console.log(mensaje.slice(0, 15));

// Convertir string en array:
console.log(mensaje.split('')); //Cada elemento del array son las letras
console.log(mensaje.split(' ')); //Busca en el array los espacios en blanco, y por ahí separa los elementos
console.log(mensaje.split(',')); // Busca en el array las comas y por ahi separa los elementos

console.log(mensaje.replace('Hola', 'Hello')); // Sustituye Hola por Hello
console.log(tecnologia.includes('a')); //Comprueba si la a está incluida en la variable
console.log(tecnologia.repeat(10)); //Repite tecnologia 10 veces.

/*************************************************************************************** */
/**************************      NUMEROS EN JAVASCRIPT  ********************************* */
/*************************************************************************************** */
/*
const numero1 = 10,
    numero2 = 20,
    numero3 = 0.012;

let resultado;

// Potencia
resultado = Math.pow(8, 3); // Es igual a 8*8*8
// Raiz cuadrada
resultado = Math.sqrt(144);
// Número PI
resultado = Math.PI;
// Absoluto
resultado = Math.abs(-5);
// Número mínimo 
resultado = Math.min(numero1, numero2, numero3);
// Número máximo
resultado = Math.max(numero1, numero2, numero3);
// Número aleatorio
resultado = Math.random(); //Numero aleatorio entre 0 y 1
//resultado = resultado * 100;
//resultado = Math.round(resultado);

console.log(resultado);

/**************************************************************************************** */
let valor;

valor = 20; //number
valor = 'Troya'; //string
valor = false; //boolean
valor = null; //object
valor = [1, 2, 3, 5] //object
valor = {
    nombre: 'Troya',
    especie: 'Perro'
}; //obeject
valor = new Date(); //object

console.log(typeof (valor));

//En javascript el rango de las minúsculas es mayor que el de las mayúsculas
console.log('A' > 'd');
console.log('a' > 'Z');

/******************************************************************************************* */
const numb1 = '10.789',
    numb2 = 52,
    numb3 = 'tres';

let convertido;

console.log(typeof numb1); //Es un string
convertido = Number(numb1); //Convierte un string en número, tanto entero como float
console.log(typeof convertido); //Ahora es un número.
console.log(convertido); // Muestra el número 10.589
console.log('******************');

convertido = Number(true); //Devuelve un 1
convertido = parseInt(numb1);
console.log(convertido);

const decimales = 102154654654.5979798;

console.log(decimales.toFixed()); //Convierte un float en entero si no le indicamos los decimales que queremos dejar.
console.log(decimales.toFixed(4)); // Redondea el float con los decimales que le hemos indicado, en este caso 4.

/*********************************************************************************************************************** */
let cp = 28803;

console.log(typeof (cp)); //Es un number
cp = String(cp); //Lo convertimos en string
console.log(typeof (cp)); //Es un string

/************************************************************************************************************************ */
const producto1 = 'Pizza',
    producto2 = 'Hamburguesa',
    precio1 = 30,
    precio2 = 50;

let html;

function total(precio1, precio2) {
    return precio1 + precio2;
}

// String template o plantilla
html = `<ul>
            <li>Órden: ${producto1} </li>
            <li>Precio: ${precio1} </li>
            <li>Órden: ${producto2} </li>
            <li>Precio: ${precio2} </li>
            <li>Total: ${total(precio1, precio2)} </li>
        </ul>`;

document.getElementById('app').innerHTML = html;

/******************************************************************************************************************** */
/*
const numeros = [1, 2, 3, 4, 5],
    dias = new Array('lunes', 'martes', 'miércoles', 'jueves');

console.log('****** ARRAYS **********');

// Número de elementos del array
console.log(numeros.length);

// Agregar elemento al final array
numeros.push(60);
dias[4] = 'viernes';

// Agregar un elemento al inicio
numeros.unshift(5);
dias.unshift('luernes');

//Quitar el último elemento del array
numeros.pop();
dias.pop();

//Quitar el primer elemento del array
numeros.shift();
dias.shift();

//Invertir el órden de los elementos
numeros.reverse();
dias.reverse();

//Quitar un elemento en concreto a partir de su posicion y a su vez, quitar n elementos que queramos
numeros.splice(0, 1); // Solo quito el primer elemento del array
dias.splice(1, 2); // Quito el elemento que está en el indice 1, y quito 2 elementos

console.log(numeros);
console.log(dias);

//Devolver la posición que ocupa un elemento
console.log(numeros.indexOf(3));
console.log(dias.indexOf('lunes'));

//Unir 2 arrays
console.log(numeros.concat(dias));

const frutas = ['manzana', 'pera', 'naranja', 'mandarina', 'plátano', 'fresa'];
const varios = new Array(5, 120, 564, 12.32, 897.21, 56);

//Ordenar alfabéticamente
frutas.sort();
//Ordenar numéricamente de menor a mayor
varios.sort(function (x, y) {
    return x - y; // return y - x (Ordena de mayor a menor)
})

console.log(varios);
console.log(frutas);

/*************************************************************************************** */
const persona = {
    nombre: 'David',
    apellido: 'Herrera',
    profesion: 'Web Developer',
    email: 'daher7@gmail.com',
    edad: 40,
    musica: ['Metallica', 'Paradise Lost', 'Iron Maiden']
};

console.log(persona);
console.log(persona.nombre);

const coches = [{
        modelo: 'Audi',
        motor: 'diesel'
    },
    {
        modelo: 'BMW',
        motor: 'gasolina'
    },
    {
        modelo: 'Toyota',
        motor: 'híbrido'
    }
];

console.log(coches);
for (let i in coches) {
    console.log(`Modelo: ${coches[i].modelo} - Motor: ${coches[i].motor} `);
}

/********************************************************************************************** */
// Function declaration:
function saludar(nombre = 'Visitante') {
    console.log(`Hola ${nombre}`);
}

saludar('Troya');
saludar('Jessica');
saludar();

// Function expression:
const sumar = function (a, b) {
    return a + b;
}

console.log(sumar(1, 2));

// Function IIFE
(function (a) {
    console.log(`Aprendiendo ${a}`);
})('Javascript');


/******************************************************************************************** */
try {
    algo();
} catch (error) {
    console.log(error);
}

/***************************************************************************************************** */
//Fechas
const diaHoy = new Date();
let fecha;

//Mes
fecha = diaHoy.getMonth();
//Dia
fecha = diaHoy.getDate();
fecha = diaHoy.getDay();
//Hora
fecha = diaHoy.getHours();
//Minutos
fecha = diaHoy.getMinutes();
//Milisegundos desde 1970
fecha = diaHoy.getTime();
//Año
fecha = diaHoy.getFullYear();

console.log(fecha);

//Cambiar fechas con set
diaHoy.setFullYear(2016);
fecha = diaHoy.getFullYear();
console.log(fecha);


/********************************************************************** */
const articulos = ['arroz', 'reloj', 'camiseta', 'blusa'];

for (let i in articulos) {
    console.log(`${i} ${articulos[i]}`);
}

articulos.forEach(function(pendiente, index){
    console.log(`${index}: ${pendiente}`);
});

/********************************************************************** */
// WINDOW OBJECT

//confirm('Hola');

//window.location.href='https://google.es';