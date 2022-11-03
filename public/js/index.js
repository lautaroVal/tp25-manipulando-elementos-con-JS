const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

/* 1 */
//const main = document.querySelector('#mainContainer')
//const main = document.getElementById('mainContainer')
const main = $('mainContainer');
const subtitulo = qs('.subtitulo');
const parrafos = qsa('p');
const listado = qs('h2 a');

const cambiarFondo = () => {
    qs('body').classList.toggle('fondo')
}

let nombre = prompt('¿Cómo te llamas?');

//console.log(nombre);
subtitulo.textContent +=  nombre ? " " + nombre : " " + "invitado"

subtitulo.style.textTransform = "uppercase";

subtitulo.style.color = "#E51B3E";

let respuesta = confirm('Querés cambiar el fondo');

if (respuesta) {
    qs('body').classList.add('fondo')
}

parrafos.forEach((parrafo,index) => {
    if (index%2 === 0) {
        parrafo.classList.add('destacadoImpar')
    }else{
        parrafo.classList.add('destacadoPar')
    }
});

qs('body').classList.remove('fondo')


main.style.display = "block"
