//Declaracion de Variables:
const listaTweets = document.getElementById('lista-tweets');


//Asignando los Listeners:
document.querySelector('#formulario').addEventListener('submit', agregarTweet); //Listener del botón Agregar

listaTweets.addEventListener('click', borrarTweet);


//Funciones:
function agregarTweet(e) {
    e.preventDefault;
    //Leer el valor del text-area
    const tweet = document.getElementById('tweet').value;
    //Crear boton borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento lista y añadirle elementos del textarea
    const li = document.createElement('li');
    //Añadimos el texto al elemento
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    //Añadimos al padre los nuevos hijos, en este caso los tweets con su valor.
    listaTweets.appendChild(li);

    //Agregar tweet a Local Storage
    agregarTweetLocalStorage(tweet);
}

function agregarTweetLocalStorage(tweet){
    localStorage.setItem('tweets', tweet);

}

function borrarTweet(e) {
    e.preventDefault;
    // Vamos a hacer Delegation para borrar pulsando con la X.
    if (e.target.className === 'borrar-tweet') {
        // Eliminamos el padre de la X, que es el elemento li.
        e.target.parentElement.remove()
        console.log('Pulsaste la X');
    }
}