/* =========================================================
   ANCHOR - PERFIL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const el = function (id) {
        return document.getElementById(id);
    };

    const fotoPerfil = el("fotoPerfil");
    const fotoIcone = el("fotoIcone");
    const fotoIniciais = el("fotoIniciais");
    const fotoImg = el("fotoImg");
    const inputFoto = el("inputFoto");
    const btnFoto = el("btn-foto");

    const saudacao = el("saudacao");
    const nomePerfil = el("nomePerfil");
    const emailPerfil = el("emailPerfil");
    const membroDesde = el("membroDesde");

    const nomeUsuario = el("nomeUsuario");
    const telefoneUsuario = el("telefoneUsuario");
    const emailUsuario = el("emailUsuario");
    const redesUsuario = el("redesUsuario");

    const modal = el("modalEditar");
    const formEditar = el("formEditar");
    const campoNome = el("campoNome");
    const campoEmail = el("campoEmail");
    const campoTelefone = el("campoTelefone");
    const campoRedes = el("campoRedes");

    const toast = el("toast");


    /* =====================================================
       ARMAZENAMENTO (localStorage)
    ===================================================== */

    function ler(chave) {
        try {
            return localStorage.getItem(chave) || "";
        } catch (erro) {
            return "";
        }
    }

    function salvar(chave, valor) {
        try {
            localStorage.setItem(chave, valor);
            return true;
        } catch (erro) {
            return false;
        }
    }

    function apagar(chave) {
        try {
            localStorage.removeItem(chave);
        } catch (erro) {}
    }


    /* =====================================================
       AVISO (TOAST)
    ===================================================== */

    let tempoToast;

    function mostrarAviso(mensagem) {

        toast.textContent = mensagem;

        toast.classList.add("visivel");

        clearTimeout(tempoToast);

        tempoToast = setTimeout(function () {
            toast.classList.remove("visivel");
        }, 2600);

    }


    /* =====================================================
       DADOS DO USUÁRIO
    ===================================================== */

    function pegarDados() {

        return {
            // aceita os dois nomes de chave que o login já usou
            nome: ler("usuarioNome") || ler("nomeUsuario"),
            email: ler("usuarioEmail"),
            telefone: ler("usuarioTelefone"),
            redes: ler("usuarioRedes"),
            foto: ler("usuarioFoto")
        };

    }

    function escreverCampo(elemento, valor) {

        if (valor) {
            elemento.textContent = valor;
            elemento.classList.remove("vazio");
        } else {
            elemento.textContent = "Não informado";
            elemento.classList.add("vazio");
        }

    }

    function pegarIniciais(nome) {

        const partes = nome.trim().split(/\s+/);

        if (partes.length === 1) {
            return partes[0].charAt(0).toUpperCase();
        }

        return (
            partes[0].charAt(0) +
            partes[partes.length - 1].charAt(0)
        ).toUpperCase();

    }

    function saudacaoDoDia() {

        const hora = new Date().getHours();

        if (hora < 12) return "Bom dia";
        if (hora < 18) return "Boa tarde";

        return "Boa noite";

    }


    /* =====================================================
       ATUALIZA A TELA
    ===================================================== */

    function atualizarTela() {

        const dados = pegarDados();

        // Saudação e nome
        saudacao.textContent = saudacaoDoDia() + "!";

        nomePerfil.textContent = dados.nome || "Seu nome";

        emailPerfil.textContent = dados.email || "Adicione seu e-mail";

        // Informações da conta
        escreverCampo(nomeUsuario, dados.nome);
        escreverCampo(emailUsuario, dados.email);
        escreverCampo(telefoneUsuario, dados.telefone);
        escreverCampo(redesUsuario, dados.redes);

        // Foto: imagem > iniciais > ícone
        fotoImg.hidden = true;
        fotoIniciais.hidden = true;
        fotoIcone.hidden = false;
        fotoPerfil.classList.remove("com-iniciais");

        if (dados.foto) {

            fotoImg.src = dados.foto;
            fotoImg.hidden = false;
            fotoIcone.hidden = true;

        } else if (dados.nome) {

            fotoIniciais.textContent = pegarIniciais(dados.nome);
            fotoIniciais.hidden = false;
            fotoIcone.hidden = true;
            fotoPerfil.classList.add("com-iniciais");

        }

    }


    /* =====================================================
       MEMBRO DESDE
    ===================================================== */

    let desde = ler("usuarioDesde");

    if (!desde) {
        desde = new Date().toISOString();
        salvar("usuarioDesde", desde);
    }

    const dataDesde = new Date(desde);

    const textoDesde = dataDesde.toLocaleDateString("pt-BR", {
        month: "short",
        year: "numeric"
    }).replace(".", "");

    membroDesde.innerHTML =
        '<i class="fa-regular fa-calendar"></i> Membro desde ' + textoDesde;


    /* =====================================================
       FOTO DE PERFIL
    ===================================================== */

    btnFoto.addEventListener("click", function () {
        inputFoto.click();
    });

    fotoPerfil.addEventListener("click", function () {
        inputFoto.click();
    });

    fotoPerfil.style.cursor = "pointer";

    inputFoto.addEventListener("change", function () {

        const arquivo = inputFoto.files[0];

        if (!arquivo) return;

        if (!arquivo.type.startsWith("image/")) {
            mostrarAviso("Escolha um arquivo de imagem.");
            return;
        }

        const leitor = new FileReader();

        leitor.onload = function () {

            const imagem = new Image();

            imagem.onload = function () {

                // Recorta no centro e reduz para 300x300
                // (assim a foto cabe no armazenamento do navegador)
                const tamanho = 300;

                const canvas = document.createElement("canvas");
                canvas.width = tamanho;
                canvas.height = tamanho;

                const contexto = canvas.getContext("2d");

                const lado = Math.min(imagem.width, imagem.height);
                const origemX = (imagem.width - lado) / 2;
                const origemY = (imagem.height - lado) / 2;

                contexto.drawImage(
                    imagem,
                    origemX, origemY, lado, lado,
                    0, 0, tamanho, tamanho
                );

                const fotoFinal = canvas.toDataURL("image/jpeg", 0.85);

                if (salvar("usuarioFoto", fotoFinal)) {
                    atualizarTela();
                    mostrarAviso("Foto atualizada!");
                } else {
                    mostrarAviso("Não foi possível salvar a foto.");
                }

            };

            imagem.src = leitor.result;

        };

        leitor.readAsDataURL(arquivo);

        // permite escolher a mesma foto de novo
        inputFoto.value = "";

    });

    el("btn-remover-foto").addEventListener("click", function () {

        apagar("usuarioFoto");

        atualizarTela();

        mostrarAviso("Foto removida.");

    });


    /* =====================================================
       MODAL DE EDIÇÃO
    ===================================================== */

    function abrirModal() {

        const dados = pegarDados();

        campoNome.value = dados.nome;
        campoEmail.value = dados.email;
        campoTelefone.value = dados.telefone;
        campoRedes.value = dados.redes;

        modal.classList.add("aberto");
        modal.setAttribute("aria-hidden", "false");

        setTimeout(function () {
            campoNome.focus();
        }, 150);

    }

    function fecharModal() {

        modal.classList.remove("aberto");
        modal.setAttribute("aria-hidden", "true");

    }

    el("btn-editar").addEventListener("click", abrirModal);
    el("btn-editar-conta").addEventListener("click", abrirModal);
    el("fecharModal").addEventListener("click", fecharModal);
    el("btn-cancelar").addEventListener("click", fecharModal);

    // Fecha clicando fora da caixa
    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {
            fecharModal();
        }

    });

    // Fecha com ESC
    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            fecharModal();
        }

    });

    // Máscara do telefone: (11) 99999-9999
    campoTelefone.addEventListener("input", function () {

        let numeros = campoTelefone.value.replace(/\D/g, "").slice(0, 11);

        if (numeros.length > 6) {
            numeros = "(" + numeros.slice(0, 2) + ") " +
                numeros.slice(2, 7) + "-" + numeros.slice(7);
        } else if (numeros.length > 2) {
            numeros = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2);
        } else if (numeros.length > 0) {
            numeros = "(" + numeros;
        }

        campoTelefone.value = numeros;

    });

    // Salvar
    formEditar.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nome = campoNome.value.trim();

        if (!nome) {
            mostrarAviso("Digite seu nome para salvar.");
            campoNome.focus();
            return;
        }

        salvar("usuarioNome", nome);
        salvar("usuarioEmail", campoEmail.value.trim());
        salvar("usuarioTelefone", campoTelefone.value.trim());
        salvar("usuarioRedes", campoRedes.value.trim());

        atualizarTela();

        fecharModal();

        mostrarAviso("Perfil atualizado!");

    });


    /* =====================================================
       AÇÕES DOS CARDS
    ===================================================== */

    const paginas = {
        chat: "safepsi.html",
        conversas: "conversas.html",
        agendamentos: "agendamento.html",
        psicologo: "profissionais.html",
        acompanhar: "acompanhar.html"
    };

    document.querySelectorAll("[data-acao]").forEach(function (botao) {

        botao.addEventListener("click", function () {

            const acao = botao.getAttribute("data-acao");

            if (paginas[acao]) {
                window.location.href = paginas[acao];
            } else if (acao === "historico") {
                mostrarAviso("O histórico estará disponível em breve.");
            }

        });

    });


    /* =====================================================
       NOTIFICAÇÕES
    ===================================================== */

    el("btn-notificacoes").addEventListener("click", function () {

        mostrarAviso("Você não possui novas notificações.");

        const ponto = document.querySelector(".ponto-notificacao");

        if (ponto) {
            ponto.style.display = "none";
        }

    });


    /* =====================================================
       PREFERÊNCIAS
    ===================================================== */

    const mensagensPreferencias = [
        "As configurações de notificações estarão disponíveis em breve.",
        "As configurações de privacidade estarão disponíveis em breve.",
        "As configurações da conta estarão disponíveis em breve."
    ];

    document.querySelectorAll(".preferencia-item").forEach(function (item, indice) {

        item.addEventListener("click", function () {
            mostrarAviso(mensagensPreferencias[indice]);
        });

    });


    /* =====================================================
       SAIR DA CONTA
    ===================================================== */

    el("btn-sair-conta").addEventListener("click", function () {

        if (!confirm("Deseja realmente sair da sua conta?")) {
            return;
        }

        apagar("usuarioLogado");

        window.location.href = "login.html";

    });


    /* =====================================================
       INICIA
    ===================================================== */

    atualizarTela();

});