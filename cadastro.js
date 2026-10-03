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
    const confirmarSenhaUsuario = document.getElementById("confirmarSenhaUsuario");

    const nomeProfissional = document.getElementById("nomeProfissional");
    const emailProfissional = document.getElementById("emailProfissional");
    const crpProfissional = document.getElementById("crpProfissional");
    const estadoProfissional = document.getElementById("estadoProfissional");
    const especialidadeProfissional = document.getElementById("especialidadeProfissional");
    const telefoneProfissional = document.getElementById("telefoneProfissional");
    const senhaProfissional = document.getElementById("senhaProfissional");
    const confirmarSenhaProfissional = document.getElementById("confirmarSenhaProfissional");


    // ======================================================
    // CONTAS (ficam salvas só neste navegador)
    // PROTÓTIPO: num sistema real, isso fica num servidor
    // e a senha NUNCA é guardada em texto puro.
    // ======================================================

    const CHAVE_CONTAS = "anchorContas";

    function lerContas() {

        try {
            return JSON.parse(localStorage.getItem(CHAVE_CONTAS)) || [];
        } catch (erro) {
            return [];
        }

    }

    function salvarContas(contas) {

        try {
            localStorage.setItem(CHAVE_CONTAS, JSON.stringify(contas));
            return true;
        } catch (erro) {
            return false;
        }

    }

    function emailJaCadastrado(email) {

        const procurado = email.trim().toLowerCase();

        return lerContas().some(function (conta) {
            return conta.email === procurado;
        });

    }

    function iniciarSessao(conta) {

        try {

            // se for outra conta, limpa foto e redes da anterior
            const anterior = localStorage.getItem("usuarioEmail");

            if (anterior && anterior !== conta.email) {
                localStorage.removeItem("usuarioFoto");
                localStorage.removeItem("usuarioRedes");
            }

            localStorage.setItem("usuarioLogado", "true");
            localStorage.setItem("usuarioTipo", conta.tipo);
            localStorage.setItem("usuarioNome", conta.nome);
            localStorage.setItem("usuarioEmail", conta.email);
            localStorage.setItem("usuarioTelefone", conta.telefone || "");

            if (conta.tipo === "profissional") {

                localStorage.setItem("usuarioCRP", conta.crp);
                localStorage.setItem("usuarioUF", conta.uf);
                localStorage.setItem("usuarioEspecialidade", conta.especialidade);

            } else {

                localStorage.removeItem("usuarioCRP");
                localStorage.removeItem("usuarioUF");
                localStorage.removeItem("usuarioEspecialidade");

            }

        } catch (erro) {
            console.log("Não foi possível salvar a sessão.", erro);
        }

    }


    // ======================================================
    // MÁSCARA DE TELEFONE: (11) 99999-9999
    // ======================================================

    function aplicarMascaraTelefone(campo) {

        campo.setAttribute("maxlength", "15");

        campo.addEventListener("input", function () {

            let numeros = campo.value.replace(/\D/g, "").slice(0, 11);

            if (numeros.length > 6) {
                numeros = "(" + numeros.slice(0, 2) + ") " +
                    numeros.slice(2, 7) + "-" + numeros.slice(7);
            } else if (numeros.length > 2) {
                numeros = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2);
            } else if (numeros.length > 0) {
                numeros = "(" + numeros;
            }

            campo.value = numeros;

        });

    }

    aplicarMascaraTelefone(telefoneUsuario);
    aplicarMascaraTelefone(telefoneProfissional);

    // UF sempre em maiúsculas, só letras
    estadoProfissional.addEventListener("input", function () {

        estadoProfissional.value = estadoProfissional.value
            .replace(/[^a-zA-Z]/g, "")
            .toUpperCase();

    });


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

    const botoesSenha = document.querySelectorAll(".btn-mostrar-senha");

    botoesSenha.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const idCampo = botao.getAttribute("data-target");
            const campoSenha = document.getElementById(idCampo);

            if (campoSenha.type === "password") {

                campoSenha.type = "text";

                botao.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                campoSenha.type = "password";

                botao.innerHTML = '<i class="fa-solid fa-eye"></i>';

            }

        });

    });


    // ======================================================
    // CADASTRO DE USUÁRIO
    // ======================================================

    formUsuario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = nomeUsuario.value.trim();
        const email = emailUsuario.value.trim().toLowerCase();

        if (nome.length < 3) {
            alert("Digite seu nome completo.");
            nomeUsuario.focus();
            return;
        }

        if (email === "") {
            alert("Digite seu e-mail.");
            emailUsuario.focus();
            return;
        }

        if (emailJaCadastrado(email)) {
            alert("Já existe uma conta com esse e-mail. Use a opção Entrar.");
            emailUsuario.focus();
            return;
        }

        if (senhaUsuario.value.length < 6) {
            alert("A senha precisa ter pelo menos 6 caracteres.");
            senhaUsuario.focus();
            return;
        }

        if (senhaUsuario.value !== confirmarSenhaUsuario.value) {
            alert("As senhas não coincidem.");
            confirmarSenhaUsuario.focus();
            return;
        }

        if (!document.getElementById("termosUsuario").checked) {
            alert("Você precisa aceitar os termos de uso.");
            return;
        }

        const conta = {
            tipo: "usuario",
            nome: nome,
            email: email,
            nascimento: nascimentoUsuario.value,
            telefone: telefoneUsuario.value.trim(),
            senha: senhaUsuario.value
        };

        const contas = lerContas();
        contas.push(conta);

        if (!salvarContas(contas)) {
            alert("Não foi possível salvar a conta neste navegador.");
            return;
        }

        iniciarSessao(conta);

        alert("Conta criada com sucesso! Bem-vindo(a) ao Anchor.");

        window.location.href = "index.html";

    });


    // ======================================================
    // CADASTRO DE PROFISSIONAL
    // ======================================================

    formProfissional.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = nomeProfissional.value.trim();
        const email = emailProfissional.value.trim().toLowerCase();

        // aceita "CRP 06/123456" ou só "06/123456"
        const crp = crpProfissional.value
            .replace(/^\s*crp\s*/i, "")
            .replace(/\s+/g, "");

        const uf = estadoProfissional.value.trim().toUpperCase();
        const especialidade = especialidadeProfissional.value.trim();

        if (nome.length < 3) {
            alert("Digite seu nome completo.");
            nomeProfissional.focus();
            return;
        }

        if (email === "") {
            alert("Digite seu e-mail profissional.");
            emailProfissional.focus();
            return;
        }

        if (emailJaCadastrado(email)) {
            alert("Já existe uma conta com esse e-mail. Use a opção Entrar.");
            emailProfissional.focus();
            return;
        }

        if (!/^\d{1,2}\/\d{3,7}$/.test(crp)) {
            alert("Digite o CRP no formato 06/123456.");
            crpProfissional.focus();
            return;
        }

        if (!/^[A-Z]{2}$/.test(uf)) {
            alert("Digite a UF com 2 letras. Ex.: SP");
            estadoProfissional.focus();
            return;
        }

        if (especialidade === "") {
            alert("Informe sua especialidade.");
            especialidadeProfissional.focus();
            return;
        }

        if (senhaProfissional.value.length < 6) {
            alert("A senha precisa ter pelo menos 6 caracteres.");
            senhaProfissional.focus();
            return;
        }

        if (senhaProfissional.value !== confirmarSenhaProfissional.value) {
            alert("As senhas não coincidem.");
            confirmarSenhaProfissional.focus();
            return;
        }

        if (!document.getElementById("termosProfissional").checked) {
            alert("Você precisa aceitar os termos de uso.");
            return;
        }

        const conta = {
            tipo: "profissional",
            nome: nome,
            email: email,
            crp: crp,
            uf: uf,
            especialidade: especialidade,
            telefone: telefoneProfissional.value.trim(),
            senha: senhaProfissional.value
        };

        const contas = lerContas();
        contas.push(conta);

        if (!salvarContas(contas)) {
            alert("Não foi possível salvar a conta neste navegador.");
            return;
        }

        iniciarSessao(conta);

        alert("Conta profissional criada com sucesso! Vamos para o seu painel.");

        window.location.href = "painel-profissional.html";

    });


    console.log("Página de cadastro iniciada!");

});