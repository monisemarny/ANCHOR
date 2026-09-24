// ==========================================================
// ANCHOR - RECUPERAR SENHA
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de recuperação de senha iniciada!");


    // ======================================================
    // ETAPAS
    // ======================================================

    const etapaIdentificacao =
        document.getElementById("etapaIdentificacao");

    const etapaCodigo =
        document.getElementById("etapaCodigo");

    const etapaNovaSenha =
        document.getElementById("etapaNovaSenha");

    const etapaConcluida =
        document.getElementById("etapaConcluida");


    // ======================================================
    // FORMULÁRIOS
    // ======================================================

    const formIdentificacao =
        document.getElementById("formIdentificacao");

    const formCodigo =
        document.getElementById("formCodigo");

    const formNovaSenha =
        document.getElementById("formNovaSenha");


    // ======================================================
    // CAMPOS
    // ======================================================

    const identificacao =
        document.getElementById("identificacao");

    const codigoRecuperacao =
        document.getElementById("codigoRecuperacao");

    const novaSenha =
        document.getElementById("novaSenha");

    const confirmarNovaSenha =
        document.getElementById("confirmarNovaSenha");


    // ======================================================
    // BOTÃO VOLTAR
    // ======================================================

    const btnVoltarIdentificacao =
        document.getElementById("btnVoltarIdentificacao");


    // ======================================================
    // CÓDIGO DE TESTE
    // ======================================================

    const codigoTeste = "123456";


    // ======================================================
    // FUNÇÃO PARA TROCAR DE ETAPA
    // ======================================================

    function mostrarEtapa(etapa) {

        etapaIdentificacao.style.display = "none";
        etapaCodigo.style.display = "none";
        etapaNovaSenha.style.display = "none";
        etapaConcluida.style.display = "none";

        etapa.style.display = "block";

    }


    // ======================================================
    // ETAPA 1
    // ENVIAR CÓDIGO
    // ======================================================

    formIdentificacao.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (identificacao.value.trim() === "") {

                alert(
                    "Digite seu e-mail, telefone ou nome de usuário."
                );

                identificacao.focus();

                return;

            }


            console.log(
                "Identificação informada:",
                identificacao.value
            );


            alert(
                "Um código de recuperação foi enviado!"
            );


            console.log(
                "Código de teste:",
                codigoTeste
            );


            mostrarEtapa(etapaCodigo);


            codigoRecuperacao.focus();

        }
    );


    // ======================================================
    // ETAPA 2
    // CONFIRMAR CÓDIGO
    // ======================================================

    formCodigo.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const codigoDigitado =
                codigoRecuperacao.value.trim();


            if (codigoDigitado === "") {

                alert(
                    "Digite o código de recuperação."
                );

                codigoRecuperacao.focus();

                return;

            }


            if (codigoDigitado.length !== 6) {

                alert(
                    "O código precisa ter 6 números."
                );

                codigoRecuperacao.focus();

                return;

            }


            if (codigoDigitado !== codigoTeste) {

                alert(
                    "Código incorreto. Tente novamente."
                );

                codigoRecuperacao.focus();

                return;

            }


            alert(
                "Código confirmado com sucesso!"
            );


            mostrarEtapa(etapaNovaSenha);


            novaSenha.focus();

        }
    );


    // ======================================================
    // VOLTAR PARA ETAPA 1
    // ======================================================

    btnVoltarIdentificacao.addEventListener(
        "click",
        function () {

            mostrarEtapa(etapaIdentificacao);

            codigoRecuperacao.value = "";

            identificacao.focus();

        }
    );


    // ======================================================
    // ETAPA 3
    // CRIAR NOVA SENHA
    // ======================================================

    formNovaSenha.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const senha =
                novaSenha.value;

            const confirmarSenha =
                confirmarNovaSenha.value;


            // Verifica tamanho da senha

            if (senha.length < 6) {

                alert(
                    "A nova senha precisa ter pelo menos 6 caracteres."
                );

                novaSenha.focus();

                return;

            }


            // Verifica se as senhas são iguais

            if (senha !== confirmarSenha) {

                alert(
                    "As senhas não coincidem."
                );

                confirmarNovaSenha.focus();

                return;

            }


            console.log(
                "Nova senha criada para:",
                identificacao.value
            );


            alert(
                "Sua senha foi alterada com sucesso!"
            );


            mostrarEtapa(etapaConcluida);

        }
    );


    // ======================================================
    // MOSTRAR / OCULTAR SENHA
    // ======================================================

    const botoesSenha =
        document.querySelectorAll(
            ".btn-mostrar-senha"
        );


    botoesSenha.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const idCampo =
                    botao.getAttribute("data-target");

                const campoSenha =
                    document.getElementById(idCampo);


                if (campoSenha.type === "password") {

                    campoSenha.type = "text";

                    botao.innerHTML =
                        '<i class="fa-solid fa-eye-slash"></i>';

                } else {

                    campoSenha.type = "password";

                    botao.innerHTML =
                        '<i class="fa-solid fa-eye"></i>';

                }

            }
        );

    });


    // ======================================================
    // ACEITAR SOMENTE NÚMEROS NO CÓDIGO
    // ======================================================

    codigoRecuperacao.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(/\D/g, "");

        }
    );

});