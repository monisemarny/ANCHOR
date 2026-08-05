console.log("Anchor iniciado!");


const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-lateral");
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("ativo");
});
document.addEventListener("click", () => {
    menu.classList.remove("ativo");
});
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});



const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

let slideAtual = 0;
let intervalo; 

/* ========================= */
/* MOSTRAR SLIDE */
/* ========================= */

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(indicador => {
        indicador.classList.remove("ativo");
    });

    slides[indice].classList.add("ativo");
    indicadores[indice].classList.add("ativo");

    slideAtual = indice;
}


/* ========================= */
/* PRÓXIMO SLIDE */
/* ========================= */

function proximoSlide() {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
}


/* ========================= */
/* SLIDE ANTERIOR */
/* ========================= */

function slideAnterior() {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
}


/* ========================= */
/* TROCA AUTOMÁTICA */
/* ========================= */

function iniciarCarrossel() {

    intervalo = setInterval(() => {
        proximoSlide();
    }, 5000);

}


/* ========================= */
/* PARAR CARROSSEL */
/* ========================= */

function pararCarrossel() {

    clearInterval(intervalo);

}


/* ========================= */
/* BOTÃO PRÓXIMO */
/* ========================= */

botaoProximo.addEventListener("click", () => {

    proximoSlide();

    pararCarrossel();

    iniciarCarrossel();

});


/* ========================= */
/* BOTÃO ANTERIOR */
/* ========================= */
botaoAnterior.addEventListener("click", () => {
    slideAnterior();
    pararCarrossel();
    iniciarCarrossel();
});


/* ========================= */
/* INDICADORES */
/* ========================= */
indicadores.forEach((indicador, indice) => {
    indicador.addEventListener("click", () => {
        mostrarSlide(indice);
        pararCarrossel();
        iniciarCarrossel();
    });
});


/* ========================= */
/* PAUSAR AO PASSAR O MOUSE */
/* ========================= */
const carrossel = document.querySelector(".carrossel");
carrossel.addEventListener("mouseenter", () => {
    pararCarrossel();
});


/* ========================= */
/* CONTINUAR AO TIRAR O MOUSE */
/* ========================= */
carrossel.addEventListener("mouseleave", () => {
    iniciarCarrossel();
});
/* ========================= */
/* INICIAR CARROSSEL */
/* ========================= */
iniciarCarrossel();
