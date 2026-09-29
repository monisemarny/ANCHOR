/* =========================================================
   ANCHOR - PÁGINA DE CONTATO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de contato iniciada!");

    /* =====================================================
       MENU PRINCIPAL
    ====================================================== */

    const menuBtn = document.getElementById("menu-btn");
    const menuLateral = document.getElementById("menu-lateral");

    if (menuBtn && menuLateral) {

        menuBtn.addEventListener("click", function () {

            menuLateral.classList.toggle("ativo");

        });

    }


    /* =====================================================
       BOTÕES DE CONTATO
    ====================================================== */

    const botoesContato =
        document.querySelectorAll(".btn-contato");

    botoesContato.forEach(function (botao) {

        botao.addEventListener("click", function () {

            console.log("Canal de contato selecionado.");

        });

    });


    /* =====================================================
       BOTÃO FALE COM ALGUÉM
    ====================================================== */

    const btnFalar =
        document.querySelector(".btn-falar");

    if (btnFalar) {

        btnFalar.addEventListener("click", function () {

            console.log("Usuário escolheu falar com alguém.");

        });

    }

});