//Declaración de variables
const ts = Date.now(), //Para poder crear el MD5
    privateKey = 'c18df582f760274fdb2e3f5124690e85d5d2b9ad',
    publicKey = '267f485a1d87a03f6d2794d784ae7798';

//Creamos el hash que nos pide Marvel mediante MD5
const hash = MD5(ts + privateKey + publicKey);

//Asignamos el listener
const buscar = document.getElementById('formulario');

buscar.addEventListener('submit', (e) => {
    e.preventDefault();

    const heroe = document.querySelector('#formulario input').value;
   
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`;
    url += `&name=${heroe}`;
    buscarHeroe(url);
   
})

//Conexión con el servidor de Marvel
function buscarHeroe(url) {
    console.log(url);
   
    fetch(url)
        .then(res => res.json())
        .then(datos => {
            pintarComics(datos);
        })
        .catch(error => console.log(error));
}

const pintarComics = (datos) => {

    console.log(datos.data);
    const comics = datos.data.results;
    let plantilla = '';

    comics.forEach(comic => {

        //Rellenamos la plantilla
        plantilla += `       
                <p class="text-white h3 text-center-align"> ${comic.name} </p>
                <img src="${comic.thumbnail.path}/portrait_uncanny.jpg" >
                <p class="text-white"> ${comic.description} </p>`;

    })
    //Agregamos la plantilla al html
    document.getElementById('resultados').innerHTML = plantilla;
}