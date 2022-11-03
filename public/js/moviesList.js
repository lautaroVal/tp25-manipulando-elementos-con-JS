let body = document.querySelector('body');
let h1 = document.querySelector('h1.moviesListTitulo');

let confirmModo = prompt('¿Desea modo oscuro?');

if (confirmModo) {
    body.style.backgroundColor = "#7f7f7f";
    body.classList('fondoMoviesList');
}

h1.innerText = "LISTADO DE PELÍCULAS"
h1.style.color = "white";
h1.style.backgroundColor = "teal"
h1.style.fontSize = "20px";

