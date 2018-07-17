/*const paises = ['Francia', 'España', 'Inglaterra', 'Escocia', 'Noruega', 'Dinamarca', 'Rumania', 'Turquía'];

function mostrarPaises() {
    setTimeout(function () {
        let html = '';
        paises.forEach(function (pais) {
            html += `<li class="lista">${pais}</li>`;
        })
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

mostrarPaises();*/

/**
 * Promises
 */

/*
const promesa = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve('Se ejecutó');
    }, 1000);
});

promesa.then(function(mensaje){
    console.log(mensaje);
});*/

const aplicarDescuento = new Promise(function (resolve, reject) {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function (resultado) {
    console.log(resultado); //Se muestra el resolve
}).catch(function (error) {
    console.log(error); //Se muestra el reject
});