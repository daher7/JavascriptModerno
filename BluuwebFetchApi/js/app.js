const btnObtener = document.getElementById('btnObtener');

btnObtener.addEventListener('click', obtenerApi);

function obtenerTxt() {

    fetch('datos.txt')
        .then(res => res.text())
        .then(data => {
            const plantilla = `<p>${data}</p>`;
            document.getElementById('contenido').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}

function obtenerApi() {
    const url = 'https://randomuser.me/api/';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0]);
            let plantilla = `<img src="${data.results[0].picture.large}" width="150px" class="img-fluid rounded-circle">
                          <p><h4>${data.results[0].name.first} ${data.results[0].name.last}</h4></p>`;
            document.getElementById('contenido').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}