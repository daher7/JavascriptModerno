async function leerTodos() {

    const url = 'https://jsonplaceholder.typicode.com/todos';
    //1º esperar la respuesta
    const respuesta = await fetch(url);

    //2º Se ejecuta cuando la respuesta esté hecha
    const datos = await respuesta.json();

    //3º Devolvemos los datos
    return datos;

}

leerTodos()
    .then(usuarios => console.log(usuarios));