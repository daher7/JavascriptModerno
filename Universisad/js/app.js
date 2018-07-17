// Eliminar de Local Storage
localStorage.clear();

let elemento;

elemento = document.all; //Acceso a todos los elementos del DOM
elemento = document.all[10]; //Acceso al objeto del array con índice 10
elemento = document.body;
elemento = document.head;
elemento = document.images;

console.log(elemento);

// Pasar de HTMLCollection a un Array
let imagenesHtml = document.images;
let imagenes = Array.from(imagenesHtml);

imagenes.forEach(function (imagen, indice) {
    console.log(indice, imagen);
})

console.log(imagenes);

// querySelector
let enlace;

enlace = document.querySelector('#principal');

enlace = document.querySelector('#principal a:first-child'); //Selecciona el primer hijo de principal
enlace = document.querySelector('#principal a:nth-child(3)'); //Selecciona el elemento hijo que le indiques. (1) es el first-child
enlace = document.querySelector('#principal a:last-child'); //Selecciona el último hijo de principal

console.log(enlace);

// Varios elementos de la misma clase
const enlaces = document.getElementsByClassName('enlace');

console.log(enlaces);

//TagName
let links = document.getElementsByTagName('a');

links = Array.from(links);
links.forEach(function (link) {
    console.log(link.innerText);
});

//querySelectorAll

let varios;

varios = document.querySelectorAll('#principal a:nth-child(odd)'); //Selecciona los hijos impares del padre
varios.forEach(function (impares) {
    console.log(impares);
    console.log(`${impares}`);
})

console.log(varios);

/****************************************************************************************** */
/*********************************  CREAR ELEMENTOS *************************************** */

const nuevoEnlace = document.createElement('a');

//Añadir id:
nuevoEnlace.id = 'nuevo-id';
//Añadir Clase:
nuevoEnlace.className = 'enlace';
//Añadir el src
nuevoEnlace.setAttribute('href', '#');
//Añadir texto:
nuevoEnlace.textContent = 'Mi nuevo Enlace';
//Añadirlo al HTML
document.querySelector('#secundaria').appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Event Listener al Buscador
function pulsarBoton(e) {
    e.preventDefault(); // PAra evitar que el formualrio mande la informacion
    console.log('Has pulsado el botón');
}

document.querySelector('#submit-buscador').addEventListener('click', pulsarBoton);

/************************************************************************************** */
localStorage.setItem('nombre', 'David');