const btnObtener = document.getElementById('btnObtener');

btnObtener.addEventListener('click', obtenerTxt);

function obtenerTxt() {

    fetch('datos.txt')
        .then(res => res.text())
        .then(data => {
            const plantilla = `<p>${data}</p>`;
            document.getElementById('contenido').innerHTML = plantilla;
        })
        .catch(error => console.log(error));
}