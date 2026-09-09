console.log("Anchor iniciado!");


// =================================================
// MENU LATERAL
// =================================================

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-btn");
    const menuLateral = document.getElementById("menu-lateral");

    if (!menuBtn || !menuLateral) {
        return;
    }

    // ABRIR / FECHAR MENU
    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        menuLateral.classList.toggle("ativo");

    });


    // FECHAR AO CLICAR FORA
    document.addEventListener("click", function (event) {

        if (
            !menuLateral.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            menuLateral.classList.remove("ativo");

        }

    });


    // NÃO FECHAR AO CLICAR DENTRO DO MENU
    menuLateral.addEventListener("click", function (event) {

        event.stopPropagation();

    });

});



// =================================================
// CARROSSEL
// =================================================

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

let slideAtual = 0;
let intervalo;


// =================================================
// VERIFICAR SE EXISTE CARROSSEL
// =================================================

if (
    slides.length > 0 &&
    indicadores.length > 0 &&
    botaoAnterior &&
    botaoProximo
) {


    // =================================================
    // MOSTRAR SLIDE
    // =================================================

    function mostrarSlide(indice) {

        slides.forEach(function (slide) {

            slide.classList.remove("ativo");

        });


        indicadores.forEach(function (indicador) {

            indicador.classList.remove("ativo");

        });


        slides[indice].classList.add("ativo");
        indicadores[indice].classList.add("ativo");

        slideAtual = indice;

    }



    // =================================================
    // PRÓXIMO SLIDE
    // =================================================

    function proximoSlide() {

        slideAtual++;

        if (slideAtual >= slides.length) {

            slideAtual = 0;

        }

        mostrarSlide(slideAtual);

    }



    // =================================================
    // SLIDE ANTERIOR
    // =================================================

    function slideAnterior() {

        slideAtual--;

        if (slideAtual < 0) {

            slideAtual = slides.length - 1;

        }

        mostrarSlide(slideAtual);

    }



    // =================================================
    // INICIAR CARROSSEL
    // =================================================

    function iniciarCarrossel() {

        intervalo = setInterval(function () {

            proximoSlide();

        }, 5000);

    }



    // =================================================
    // PARAR CARROSSEL
    // =================================================

    function pararCarrossel() {

        clearInterval(intervalo);

    }



    // =================================================
    // BOTÃO PRÓXIMO
    // =================================================

    botaoProximo.addEventListener("click", function () {

        proximoSlide();

        pararCarrossel();

        iniciarCarrossel();

    });



    // =================================================
    // BOTÃO ANTERIOR
    // =================================================

    botaoAnterior.addEventListener("click", function () {

        slideAnterior();

        pararCarrossel();

        iniciarCarrossel();

    });



    // =================================================
    // INDICADORES
    // =================================================

    indicadores.forEach(function (indicador, indice) {

        indicador.addEventListener("click", function () {

            mostrarSlide(indice);

            pararCarrossel();

            iniciarCarrossel();

        });

    });



    // =================================================
    // PAUSAR AO PASSAR O MOUSE
    // =================================================

    const carrossel = document.querySelector(".carrossel");

    if (carrossel) {

        carrossel.addEventListener("mouseenter", function () {

            pararCarrossel();

        });


        carrossel.addEventListener("mouseleave", function () {

            iniciarCarrossel();

        });

    }



    // =================================================
    // INICIAR
    // =================================================

    mostrarSlide(0);

    iniciarCarrossel();

}



// ==================================================
// DENÚNCIA - ANCHOR
// ==================================================


// ==================================================
// ELEMENTOS DO HTML
// ==================================================

const destinatario = document.getElementById("destinatario");
const campoOutroOrgao = document.getElementById("campoOutroOrgao");

const estado = document.getElementById("estado");
const campoOutroEstado = document.getElementById("campoOutroEstado");

const tiposDenuncia = document.querySelectorAll('input[name="tipo"]');
const campoOutroTipo = document.getElementById("campoOutroTipo");

const btnCancelar = document.querySelector(".btn-cancelar");
const btnContinuar = document.querySelector(".btn-continuar");

const etapas = document.querySelectorAll(".etapa");


// ==================================================
// ETAPAS DO FORMULÁRIO
// ==================================================

const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");


// ==================================================
// ETAPA ATUAL
// ==================================================

let etapaAtual = 1;


// ==================================================
// ÓRGÃO RESPONSÁVEL - "OUTRO"
// ==================================================

if (destinatario) {

    destinatario.addEventListener("change", function () {

        if (this.value === "outro") {

            if (campoOutroOrgao) {

                campoOutroOrgao.style.display = "block";

            }

        } else {

            if (campoOutroOrgao) {

                campoOutroOrgao.style.display = "none";

            }

        }

    });

}



// ==================================================
// TIPO DE DENÚNCIA - "OUTRO"
// ==================================================

tiposDenuncia.forEach(function (tipo) {

    tipo.addEventListener("change", function () {

        if (this.value === "outro") {

            if (campoOutroTipo) {

                campoOutroTipo.style.display = "block";

            }

        } else {

            if (campoOutroTipo) {

                campoOutroTipo.style.display = "none";

            }

        }

    });

});



// ==================================================
// ESTADO - "OUTRO"
// ==================================================

if (estado) {

    estado.addEventListener("change", function () {

        if (this.value === "outro") {

            if (campoOutroEstado) {

                campoOutroEstado.style.display = "block";

            }

        } else {

            if (campoOutroEstado) {

                campoOutroEstado.style.display = "none";

            }

        }

    });

}



// ==================================================
// TESTEMUNHAS - ETAPA 2
// ==================================================

const testemunhas = document.querySelectorAll(
    'input[name="testemunhas"]'
);

const campoTestemunhas = document.getElementById(
    "campoTestemunhas"
);


testemunhas.forEach(function (opcao) {

    opcao.addEventListener("change", function () {

        if (
            this.value === "sim" &&
            campoTestemunhas
        ) {

            campoTestemunhas.classList.add("visivel");

        } else {

            if (campoTestemunhas) {

                campoTestemunhas.classList.remove("visivel");

            }

        }

    });

});



// ==================================================
// BOTÃO CANCELAR
// ==================================================

if (btnCancelar) {

    btnCancelar.addEventListener("click", function () {

        const confirmar = confirm(
            "Deseja cancelar a denúncia? Os dados preenchidos serão perdidos."
        );


        if (confirmar) {

            window.location.href = "index.html";

        }

    });

}



// ==================================================
// BOTÃO VOLTAR
// ==================================================

const btnVoltar = document.querySelector(".btn-voltar");


if (btnVoltar) {

    btnVoltar.addEventListener("click", function () {

        if (etapaAtual === 2) {

            etapaAtual = 1;

            atualizarEtapa();

        }

    });

}



// ==================================================
// BOTÃO CONTINUAR
// ==================================================

if (btnContinuar) {

    btnContinuar.addEventListener("click", function () {


        // ------------------------------------------
        // ETAPA 1 → ETAPA 2
        // ------------------------------------------

        if (etapaAtual === 1) {


            // Verifica órgão
            if (
                destinatario &&
                destinatario.value === ""
            ) {

                alert(
                    "Selecione o órgão responsável."
                );

                destinatario.focus();

                return;

            }



            // Verifica "Outro órgão"
            if (
                destinatario &&
                destinatario.value === "outro" &&
                campoOutroOrgao
            ) {

                const inputOutroOrgao =
                    campoOutroOrgao.querySelector("input");


                if (
                    inputOutroOrgao &&
                    inputOutroOrgao.value.trim() === ""
                ) {

                    alert(
                        "Informe qual é o órgão responsável."
                    );

                    inputOutroOrgao.focus();

                    return;

                }

            }



            // Verifica tipo de denúncia
            const tipoSelecionado =
                document.querySelector(
                    'input[name="tipo"]:checked'
                );


            if (!tipoSelecionado) {

                alert(
                    "Selecione o tipo de denúncia."
                );

                return;

            }



            // Verifica "Outro tipo"
            if (
                tipoSelecionado.value === "outro" &&
                campoOutroTipo
            ) {

                const inputOutroTipo =
                    campoOutroTipo.querySelector("input");


                if (
                    inputOutroTipo &&
                    inputOutroTipo.value.trim() === ""
                ) {

                    alert(
                        "Informe qual é o tipo de denúncia."
                    );

                    inputOutroTipo.focus();

                    return;

                }

            }



            // Verifica estado
            if (
                estado &&
                estado.value === ""
            ) {

                alert(
                    "Selecione o estado."
                );

                estado.focus();

                return;

            }



            // Verifica "Outro estado"
            if (
                estado &&
                estado.value === "outro" &&
                campoOutroEstado
            ) {

                const inputOutroEstado =
                    campoOutroEstado.querySelector("input");


                if (
                    inputOutroEstado &&
                    inputOutroEstado.value.trim() === ""
                ) {

                    alert(
                        "Informe qual é o estado."
                    );

                    inputOutroEstado.focus();

                    return;

                }

            }



            // Vai para etapa 2
            etapaAtual = 2;

            atualizarEtapa();

        }



        // ------------------------------------------
        // ETAPA 2 → ETAPA 3
        // ------------------------------------------

        else if (etapaAtual === 2) {


            // Verifica descrição
            const descricao =
                document.getElementById("descricao");


            if (
                descricao &&
                descricao.value.trim() === ""
            ) {

                alert(
                    "Descreva o que aconteceu antes de continuar."
                );

                descricao.focus();

                return;

            }



            // Verifica data
            const dataOcorrencia =
                document.getElementById(
                    "dataOcorrencia"
                );


            if (
                dataOcorrencia &&
                dataOcorrencia.value === ""
            ) {

                alert(
                    "Informe a data da ocorrência."
                );

                dataOcorrencia.focus();

                return;

            }



            // Continua para revisão
            etapaAtual = 3;

            atualizarEtapa();

        }



        // ------------------------------------------
        // ETAPA 3 → FINAL
        // ------------------------------------------

        else if (etapaAtual === 3) {

            alert(
                "Confira suas informações antes de enviar a denúncia."
            );

        }

    });

}



// ==================================================
// ATUALIZAR ETAPAS
// ==================================================

function atualizarEtapa() {


    // ------------------------------------------
    // INDICADORES
    // ------------------------------------------

    etapas.forEach(function (etapa, index) {

        const numeroEtapa = index + 1;


        // Etapa atual
        if (numeroEtapa === etapaAtual) {

            etapa.classList.add("ativa");

            etapa.classList.remove("concluida");

        }


        // Etapas anteriores
        else if (numeroEtapa < etapaAtual) {

            etapa.classList.remove("ativa");

            etapa.classList.add("concluida");

        }


        // Etapas futuras
        else {

            etapa.classList.remove("ativa");

            etapa.classList.remove("concluida");

        }

    });



    // ------------------------------------------
    // MOSTRAR / ESCONDER ETAPAS
    // ------------------------------------------

    if (etapa1) {

        if (etapaAtual === 1) {

            etapa1.style.display = "block";

        } else {

            etapa1.style.display = "none";

        }

    }



    if (etapa2) {

        if (etapaAtual === 2) {

            etapa2.style.display = "block";

        } else {

            etapa2.style.display = "none";

        }

    }



    // ------------------------------------------
    // BOTÃO VOLTAR
    // ------------------------------------------

    if (btnVoltar) {

        if (etapaAtual === 2) {

            btnVoltar.style.display = "inline-flex";

        } else {

            btnVoltar.style.display = "none";

        }

    }



    // ------------------------------------------
    // TEXTO DO BOTÃO CONTINUAR
    // ------------------------------------------

    if (btnContinuar) {

        if (etapaAtual === 3) {

            btnContinuar.innerHTML =
                'Enviar denúncia <i class="fa-solid fa-paper-plane"></i>';

        } else {

            btnContinuar.innerHTML =
                'Continuar <i class="fa-solid fa-arrow-right"></i>';

        }

    }

}



// ==================================================
// INICIALIZAÇÃO
// ==================================================

atualizarEtapa();