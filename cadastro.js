// ==========================================================
// ANCHOR - CADASTRO
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // ELEMENTOS PRINCIPAIS
    // ======================================================

    const escolhaConta = document.getElementById("escolhaConta");
    const areaFormulario = document.getElementById("areaFormulario");

    const btnUsuario = document.getElementById("btnUsuario");
    const btnProfissional = document.getElementById("btnProfissional");

    const btnVoltarTipo = document.getElementById("btnVoltarTipo");

    const tipoEscolhido = document.getElementById("tipoEscolhido");

    const formUsuario = document.getElementById("formUsuario");
    const formProfissional = document.getElementById("formProfissional");


    // ======================================================
    // ELEMENTOS DOS FORMULÁRIOS
    // ======================================================

    const nomeUsuario = document.getElementById("nomeUsuario");
    const emailUsuario = document.getElementById("emailUsuario");
    const nascimentoUsuario = document.getElementById("nascimentoUsuario");
    const telefoneUsuario = document.getElementById("telefoneUsuario");
    const senhaUsuario = document.getElementById("senhaUsuario");
    const confirmarSenhaUsuario =
        document.getElementById("confirmarSenhaUsuario");

    const nomeProfissional =
        document.getElementById("nomeProfissional");

    const emailProfissional =
        document.getElementById("emailProfissional");

    const crpProfissional =
        document.getElementById("crpProfissional");

    const estadoProfissional =
        document.getElementById("estadoProfissional");

    const especialidadeProfissional =
        document.getElementById("especialidadeProfissional");

    const telefoneProfissional =
        document.getElementById("telefoneProfissional");

    const senhaProfissional =
        document.getElementById("senhaProfissional");

    const confirmarSenhaProfissional =
        document.getElementById("confirmarSenhaProfissional");


    // ======================================================
    // ESCOLHER TIPO DE CONTA
    // ======================================================

    btnUsuario.addEventListener("click", function () {

        escolhaConta.style.display = "none";
        areaFormulario.style.display = "block";

        formUsuario.style.display = "block";
        formProfissional.style.display = "none";

        tipoEscolhido.innerHTML =
            '<i class="fa-solid fa-user"></i>&nbsp;&nbsp; Cadastro de usuário';

    });


    btnProfissional.addEventListener("click", function () {

        escolhaConta.style.display = "none";
        areaFormulario.style.display = "block";

        formUsuario.style.display = "none";
        formProfissional.style.display = "block";

        tipoEscolhido.innerHTML =
            '<i class="fa-solid fa-user-doctor"></i>&nbsp;&nbsp; Cadastro de profissional';

    });


    // ======================================================
    // BOTÃO VOLTAR PARA ESCOLHA
    // ======================================================

    btnVoltarTipo.addEventListener("click", function () {

        areaFormulario.style.display = "none";
        escolhaConta.style.display = "flex";

        formUsuario.style.display = "none";
        formProfissional.style.display = "none";

    });


    // ======================================================
    // MOSTRAR / OCULTAR SENHA
    // ======================================================

    const botoesSenha =
        document.querySelectorAll(".btn-mostrar-senha");


    botoesSenha.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const idCampo = botao.getAttribute("data-target");
            const campoSenha = document.getElementById(idCampo);

            if (campoSenha.type === "password") {

                campoSenha.type = "text";

                botao.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                campoSenha.type = "password";

                botao.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    });


    // ======================================================
    // CADASTRO DE USUÁRIO
    // ======================================================

    formUsuario.addEventListener("submit", function (event) {

        event.preventDefault();


        // Verifica se as senhas são iguais

        if (senhaUsuario.value !== confirmarSenhaUsuario.value) {

            alert("As senhas não coincidem.");

            confirmarSenhaUsuario.focus();

            return;

        }


        // Verifica tamanho mínimo da senha

        if (senhaUsuario.value.length < 6) {

            alert("A senha precisa ter pelo menos 6 caracteres.");

            senhaUsuario.focus();

            return;

        }


        // Verifica termos

        const termosUsuario =
            document.getElementById("termosUsuario");

        if (!termosUsuario.checked) {

            alert("Você precisa aceitar os termos de uso.");

            return;

        }


        // Cadastro provisório

        alert("Cadastro de usuário realizado com sucesso!");


        console.log("Cadastro de usuário:");
        console.log("Nome:", nomeUsuario.value);
        console.log("E-mail:", emailUsuario.value);
        console.log("Nascimento:", nascimentoUsuario.value);
        console.log("Telefone:", telefoneUsuario.value);


        formUsuario.reset();

    });


    // ======================================================
    // CADASTRO DE PROFISSIONAL
    // ======================================================

    formProfissional.addEventListener("submit", function (event) {

        event.preventDefault();


        // Verifica se as senhas são iguais

        if (senhaProfissional.value !==
            confirmarSenhaProfissional.value) {

            alert("As senhas não coincidem.");

            confirmarSenhaProfissional.focus();

            return;

        }


        // Verifica tamanho mínimo da senha

        if (senhaProfissional.value.length < 6) {

            alert("A senha precisa ter pelo menos 6 caracteres.");

            senhaProfissional.focus();

            return;

        }


        // Verifica termos

        const termosProfissional =
            document.getElementById("termosProfissional");

        if (!termosProfissional.checked) {

            alert("Você precisa aceitar os termos de uso.");

            return;

        }


        // Cadastro provisório

        alert("Cadastro de profissional realizado com sucesso!");


        console.log("Cadastro de profissional:");
        console.log("Nome:", nomeProfissional.value);
        console.log("E-mail:", emailProfissional.value);
        console.log("CRP:", crpProfissional.value);
        console.log("Estado:", estadoProfissional.value);
        console.log("Especialidade:", especialidadeProfissional.value);
        console.log("Telefone:", telefoneProfissional.value);


        formProfissional.reset();

    });


    // ======================================================
    // MENSAGEM INICIAL NO CONSOLE
    // ======================================================

    console.log("Página de cadastro iniciada!");

});