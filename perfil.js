/* =========================================================
   ANCHOR - PERFIL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de perfil iniciada!");


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const menuBtn =
        document.getElementById("menu-btn");

    const menuLateral =
        document.getElementById("menu-lateral");

    const perfilBtn =
        document.getElementById("perfil-btn");

    const perfilMenu =
        document.getElementById("perfil-menu");

    const btnSair =
        document.getElementById("btn-sair");

    const btnSairConta =
        document.getElementById("btn-sair-conta");

    const nomePerfil =
        document.getElementById("nomePerfil");

    const emailPerfil =
        document.getElementById("emailPerfil");

    const nomeUsuario =
        document.getElementById("nomeUsuario");

    const emailUsuario =
        document.getElementById("emailUsuario");


    /* =====================================================
       MENU HAMBÚRGUER
    ===================================================== */

    if (menuBtn && menuLateral) {

        menuBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            menuLateral.classList.toggle("ativo");

        });

    }


    /* =====================================================
       FECHAR MENU AO CLICAR FORA
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (
            menuLateral &&
            menuBtn &&
            !menuLateral.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            menuLateral.classList.remove("ativo");

        }

    });


    /* =====================================================
       MENU DO PERFIL
    ===================================================== */

    if (perfilBtn && perfilMenu) {

        perfilBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            perfilMenu.classList.toggle("ativo");

        });

    }


    document.addEventListener("click", function (event) {

        if (
            perfilMenu &&
            perfilBtn &&
            !perfilMenu.contains(event.target) &&
            !perfilBtn.contains(event.target)
        ) {

            perfilMenu.classList.remove("ativo");

        }

    });


    /* =====================================================
       DADOS DO USUÁRIO
    ===================================================== */

    const usuarioNome =
        localStorage.getItem("usuarioNome");

    const usuarioEmail =
        localStorage.getItem("usuarioEmail");


    if (usuarioNome) {

        if (nomePerfil) {
            nomePerfil.textContent = usuarioNome;
        }

        if (nomeUsuario) {
            nomeUsuario.textContent = usuarioNome;
        }

    }


    if (usuarioEmail) {

        if (emailPerfil) {
            emailPerfil.textContent = usuarioEmail;
        }

        if (emailUsuario) {
            emailUsuario.textContent = usuarioEmail;
        }

    }


    /* =====================================================
       AÇÕES DOS CARDS
    ===================================================== */

    const botoesAcao =
        document.querySelectorAll("[data-acao]");


    botoesAcao.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const acao =
                botao.getAttribute("data-acao");


            /* =============================================
               CHAT COM IA
            ============================================= */

            if (acao === "chat") {

                window.location.href =
                    "chat.html";

            }


            /* =============================================
               CONVERSAS COM PROFISSIONAIS
            ============================================= */

            else if (acao === "conversas") {

                window.location.href =
                    "conversas.html";

            }


            /* =============================================
               AGENDAMENTOS
            ============================================= */

            else if (acao === "agendamentos") {

                window.location.href =
                    "agendamentos.html";

            }


            /* =============================================
               PSICÓLOGO
            ============================================= */

            else if (acao === "psicologo") {

                alert(
                    "Aqui serão exibidas as informações do seu profissional de referência."
                );

            }


            /* =============================================
               ACOMPANHAR DENÚNCIA
            ============================================= */

            else if (acao === "acompanhar") {

                window.location.href =
                    "acompanhar.html";

            }


            /* =============================================
               HISTÓRICO
            ============================================= */

            else if (acao === "historico") {

                window.location.href =
                    "historico.html";

            }

        });

    });


    /* =====================================================
       NOTIFICAÇÕES
    ===================================================== */

    const btnNotificacoes =
        document.getElementById("btn-notificacoes");


    if (btnNotificacoes) {

        btnNotificacoes.addEventListener("click", function () {

            alert(
                "Você não possui novas notificações."
            );

        });

    }


    /* =====================================================
       EDITAR PERFIL
    ===================================================== */

    const btnEditar =
        document.getElementById("btn-editar");


    if (btnEditar) {

        btnEditar.addEventListener("click", function () {

            alert(
                "A edição do perfil será disponibilizada nesta área."
            );

        });

    }


    /* =====================================================
       SAIR DA CONTA
    ===================================================== */

    function sairDaConta() {

        const confirmar =
            confirm(
                "Deseja realmente sair da sua conta?"
            );

        if (!confirmar) {
            return;
        }


        localStorage.removeItem("usuarioLogado");

        localStorage.removeItem("usuarioNome");

        localStorage.removeItem("usuarioEmail");


        window.location.href =
            "login.html";

    }


    if (btnSair) {

        btnSair.addEventListener(
            "click",
            sairDaConta
        );

    }


    if (btnSairConta) {

        btnSairConta.addEventListener(
            "click",
            sairDaConta
        );

    }


    /* =====================================================
       PREFERÊNCIAS
    ===================================================== */

    const preferencias =
        document.querySelectorAll(".preferencia-item");


    preferencias.forEach(function (item, index) {

        item.addEventListener("click", function () {

            if (index === 0) {

                alert(
                    "Aqui ficarão as configurações de notificações."
                );

            }

            else if (index === 1) {

                alert(
                    "Aqui ficarão as configurações de privacidade."
                );

            }

            else if (index === 2) {

                alert(
                    "Aqui ficarão as configurações da conta."
                );

            }

        });

    });

});