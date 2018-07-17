// Declaracion de variables:
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.getElementById('vaciar-carrito');

/************************* Asignacion de Listeners ********************************* */
cursos.addEventListener('click', agregarCurso);

//Quitar curso del carrito de la compra
carrito.addEventListener('click', quitarCurso);

//Vaciar el carrito de la compra con el boton vaciar
btnVaciarCarrito.addEventListener('click', vaciarCarrito);

//Al cargar el documento, cargar el Local Storage
document.addEventListener('DOMContentLoaded', leerLocalStorage);

/**********************     Funciones     ************************************************ */

//Añadir curso al carrito.
function agregarCurso(e) {
    e.preventDefault;

    //Delegation para agregar al carrito.
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para coger sus datos
        leerDatosCurso(curso);
    }
}

//Pasar los datos del curso.
function leerDatosCurso(curso) {
    //Nos creamos un objeto con los datos del curso que vamos a comprar
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    }
    insertarEnCarrito(infoCurso);
}

//Muestra los datos del curso en el carrito :
function insertarEnCarrito(infoCurso) {
    //Vamos a crear una tabla con los datos del curso
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> 
            <img src="${infoCurso.imagen}" width=100></img>
        </td>
        <td> 
            ${infoCurso.titulo} 
        </td>
        <td> 
            ${infoCurso.precio} 
        </td>
        <td> 
            <a href="#" class="borrar-curso" data-id=" ${infoCurso.id} ">X</a> 
        </td>
    `;
    listaCursos.appendChild(row);
    //Lo mandamos al Local Storage:
    agregarCursoLocalStorage(infoCurso);
}

//Quitar un curso del Carrito (Hay que hacer delegation)
function quitarCurso(e) {
    e.preventDefault;

    let curso, cursoId; // Para eliminarlo del LocalStorage
    if (e.target.classList.contains('borrar-curso')) {
        //Lo que queremos eliminar es el tr.
        e.target.parentElement.parentElement.remove();

        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id'); //PAra recoger el id del curso a eliminar
    }
    console.log(cursoId);
    eliminarCursoLocalStorage(cursoId);
}

//Vaciar Carrito de golpe
function vaciarCarrito() {
    //No hace falta hacer delegation ya que el boton tiene su propio id.
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    vaciarLocalStorage();
}

//Almacenar Curso en Local Storage
function agregarCursoLocalStorage(curso) {
    let cursos;
    cursos = obtenerCursosLocalStorage();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage() {
    let cursosLS;

    if (localStorage.getItem('cursos') == null) {
        //No hay cursos
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos')); // Para crear un array
    }

    return cursosLS; // Independientemente de si el array está vacío como si no
}

// Leer los cursos de LocalStorage al cargar la pagina
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function (curso) {
        //Vamos a crear una tabla con los datos del curso
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> 
            <img src="${curso.imagen}" width=100></img>
        </td>
        <td> 
            ${curso.titulo} 
        </td>
        <td> 
            ${curso.precio} 
        </td>
        <td> 
            <a href="#" class="borrar-curso" data-id=" ${curso.id} ">X</a> 
        </td>
    `;
        listaCursos.appendChild(row);
    });
}
//Eliminar los cursos de LocalStorage
function eliminarCursoLocalStorage(cursoId) {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function (cursoLS, index) {
        if (cursoLS.id == cursoId) {
            cursosLS.splice(index, 1);
        }
    });
    
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Vaciar de golpe el LocalStorage
function vaciarLocalStorage() {
    localStorage.clear();
}