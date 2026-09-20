document.addEventListener("DOMContentLoaded", function () {

    /* ============================= */
    /* DADOS DOS PROFISSIONAIS */
    /* ============================= */

    const profissionais = {

        gabrielly: {
            nome: "Gabrielly Estevan Rosa",
            nomeCurto: "Gabrielly",
            status: "Online",
            online: true,
            cor: "avatar-rosa",

            mensagens: [
                {
                    tipo: "recebida",
                    texto: "Olá! Como posso te ajudar?",
                    hora: "14:32"
                },
                {
                    tipo: "enviada",
                    texto: "Oi, eu queria conversar um pouco.",
                    hora: "14:34"
                },
                {
                    tipo: "recebida",
                    texto: "Claro. Pode ficar à vontade para me contar o que está acontecendo.",
                    hora: "14:35"
                }
            ]
        },


        yuta: {
            nome: "Yuta Okazaki",
            nomeCurto: "Yuta",
            status: "Online",
            online: true,
            cor: "avatar-roxo",

            mensagens: [
                {
                    tipo: "recebida",
                    texto: "Olá! Estou disponível para conversar.",
                    hora: "13:48"
                },
                {
                    tipo: "enviada",
                    texto: "Oi, tudo bem?",
                    hora: "13:50"
                },
                {
                    tipo: "recebida",
                    texto: "Tudo bem por aqui. Como você está se sentindo hoje?",
                    hora: "13:51"
                }
            ]
        },


        caroline: {
            nome: "Caroline Ferreira",
            nomeCurto: "Caroline",
            status: "Online",
            online: true,
            cor: "avatar-amarelo",

            mensagens: [
                {
                    tipo: "recebida",
                    texto: "Olá! Podemos conversar com calma.",
                    hora: "Ontem"
                },
                {
                    tipo: "enviada",
                    texto: "Eu queria tirar uma dúvida.",
                    hora: "Ontem"
                },
                {
                    tipo: "recebida",
                    texto: "Claro. Pode me contar um pouco mais sobre sua dúvida.",
                    hora: "Ontem"
                }
            ]
        },


        marina: {
            nome: "Marina Alves",
            nomeCurto: "Marina",
            status: "Online",
            online: true,
            cor: "avatar-verde",

            mensagens: [
                {
                    tipo: "recebida",
                    texto: "Quando estiver pronta, podemos conversar.",
                    hora: "Ontem"
                },
                {
                    tipo: "enviada",
                    texto: "Obrigada por estar disponível.",
                    hora: "Ontem"
                }
            ]
        },


        lucas: {
            nome: "Lucas Mendes",
            nomeCurto: "Lucas",
            status: "Offline",
            online: false,
            cor: "avatar-azul",

            mensagens: [
                {
                    tipo: "recebida",
                    texto: "Olá! No momento estou offline, mas sua mensagem poderá ser respondida posteriormente.",
                    hora: "Seg."
                },
                {
                    tipo: "enviada",
                    texto: "Tudo bem, obrigado.",
                    hora: "Seg."
                }
            ]
        },


        beatriz: {
            nome: "Beatriz Oliveira",
            nomeCurto: "Beatriz",
            status: "Online",
            online: true,
            cor: "avatar-laranja",

            mensagens: [
                {
                    tipo: "recebida",
                    texto: "Estou aqui caso queira conversar.",
                    hora: "Dom."
                },
                {
                    tipo: "enviada",
                    texto: "Oi, eu gostaria de conversar.",
                    hora: "Dom."
                },
                {
                    tipo: "recebida",
                    texto: "Claro. Fique à vontade para me contar o que está acontecendo.",
                    hora: "Dom."
                }
            ]
        }

    };


    /* ============================= */
    /* ELEMENTOS */
    /* ============================= */

    const botoesProfissionais =
        document.querySelectorAll(".profissional-conversa");

    const nomeChat =
        document.getElementById("nomeChat");

    const statusChat =
        document.getElementById("statusChat");

    const avatarChat =
        document.getElementById("avatarChat");

    const mensagensChat =
        document.getElementById("mensagensChat");

    const mensagemInput =
        document.getElementById("mensagemInput");

    const btnEnviar =
        document.getElementById("btnEnviar");

    const buscaConversa =
        document.getElementById("buscaConversa");

    const btnLigacao =
        document.getElementById("btnLigacao");

    const btnVideo =
        document.getElementById("btnVideo");

    const modalChamada =
        document.getElementById("modalChamada");

    const fecharChamada =
        document.getElementById("fecharChamada");

    const btnDesligar =
        document.getElementById("btnDesligar");

    const nomeChamada =
        document.getElementById("nomeChamada");

    const tipoChamada =
        document.getElementById("tipoChamada");

    const avatarChamada =
        document.getElementById("avatarChamada");


    /* ============================= */
    /* PROFISSIONAL ATUAL */
    /* ============================= */

    let profissionalAtual = "gabrielly";


    /* ============================= */
    /* ABRIR PROFISSIONAL */
    /* ============================= */

    function abrirConversa(id) {

        const profissional = profissionais[id];

        if (!profissional) {
            return;
        }

        profissionalAtual = id;


        /* ============================= */
        /* NOME */
        /* ============================= */

        nomeChat.textContent =
            profissional.nome;


        /* ============================= */
        /* STATUS */
        /* ============================= */

        if (profissional.online) {

            statusChat.innerHTML = `
                <span class="bolinha-status"></span>
                Online
            `;

        } else {

            statusChat.innerHTML = `
                <span
                    class="bolinha-status"
                    style="background:#aab3bf;"
                ></span>
                Offline
            `;
        }


        /* ============================= */
        /* AVATAR */
        /* ============================= */

        avatarChat.className =
            `avatar-chat ${profissional.cor}`;

        avatarChat.innerHTML = `
            <i class="fa-solid fa-user"></i>

            <span class="${
                profissional.online
                    ? "status-online"
                    : "status-offline"
            }"></span>
        `;


        /* ============================= */
        /* MENSAGENS */
        /* ============================= */

        renderizarMensagens(profissional);


        /* ============================= */
        /* BOTÃO ATIVO */
        /* ============================= */

        botoesProfissionais.forEach(function (botao) {

            botao.classList.remove("ativo");

            if (
                botao.dataset.profissional === id
            ) {

                botao.classList.add("ativo");

            }

        });

    }


    /* ============================= */
    /* RENDERIZAR MENSAGENS */
    /* ============================= */

    function renderizarMensagens(profissional) {

        mensagensChat.innerHTML = `
            <div class="data-chat">
                <span>Hoje</span>
            </div>
        `;


        profissional.mensagens.forEach(function (mensagem) {

            const divMensagem =
                document.createElement("div");


            divMensagem.className =
                `mensagem ${mensagem.tipo}`;


            /* ============================= */
            /* MENSAGEM RECEBIDA */
            /* ============================= */

            if (mensagem.tipo === "recebida") {

                divMensagem.innerHTML = `

                    <div class="avatar-mensagem ${profissional.cor}">
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div class="conteudo-mensagem">

                        <div class="nome-mensagem">
                            ${profissional.nomeCurto}
                        </div>

                        <div class="balao">
                            ${mensagem.texto}
                        </div>

                        <span class="horario-mensagem">
                            ${mensagem.hora}
                        </span>

                    </div>

                `;

            }


            /* ============================= */
            /* MENSAGEM ENVIADA */
            /* ============================= */

            else {

                divMensagem.innerHTML = `

                    <div class="conteudo-mensagem">

                        <div class="balao">
                            ${mensagem.texto}
                        </div>

                        <span class="horario-mensagem">
                            ${mensagem.hora}
                        </span>

                    </div>

                `;

            }


            mensagensChat.appendChild(
                divMensagem
            );

        });


        /* ============================= */
        /* IR PARA O FINAL DO CHAT */
        /* ============================= */

        mensagensChat.scrollTop =
            mensagensChat.scrollHeight;

    }


    /* ============================= */
    /* CLICAR NO PROFISSIONAL */
    /* ============================= */

    botoesProfissionais.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const id =
                    botao.dataset.profissional;

                abrirConversa(id);

            }
        );

    });


    /* ============================= */
    /* ENVIAR MENSAGEM */
    /* ============================= */

    function enviarMensagem() {

        const texto =
            mensagemInput.value.trim();


        /* Não envia mensagem vazia */

        if (!texto) {
            return;
        }


        const profissional =
            profissionais[profissionalAtual];


        /* ============================= */
        /* ADICIONA A MENSAGEM */
        /* ============================= */

        profissional.mensagens.push({

            tipo: "enviada",

            texto: texto,

            hora: obterHoraAtual()

        });


        /* ============================= */
        /* LIMPA O CAMPO */
        /* ============================= */

        mensagemInput.value = "";


        /* ============================= */
        /* ATUALIZA O CHAT */
        /* ============================= */

        renderizarMensagens(
            profissional
        );


        /*
            NÃO EXISTE RESPOSTA AUTOMÁTICA.

            A resposta será adicionada
            posteriormente pelo profissional
            através da área profissional
            do Anchor.
        */

    }


    /* ============================= */
    /* BOTÃO ENVIAR */
    /* ============================= */

    if (btnEnviar) {

        btnEnviar.addEventListener(
            "click",
            enviarMensagem
        );

    }


    /* ============================= */
    /* ENTER PARA ENVIAR */
    /* ============================= */

    if (mensagemInput) {

        mensagemInput.addEventListener(
            "keydown",
            function (evento) {

                if (evento.key === "Enter") {

                    evento.preventDefault();

                    enviarMensagem();

                }

            }
        );

    }


    /* ============================= */
    /* HORA ATUAL */
    /* ============================= */

    function obterHoraAtual() {

        const agora =
            new Date();


        return agora.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    }


    /* ============================= */
    /* BUSCAR PROFISSIONAL */
    /* ============================= */

    if (buscaConversa) {

        buscaConversa.addEventListener(
            "input",
            function () {

                const busca =
                    buscaConversa.value
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(
                            /[\u0300-\u036f]/g,
                            ""
                        );


                botoesProfissionais.forEach(
                    function (botao) {

                        const id =
                            botao.dataset.profissional;


                        const profissional =
                            profissionais[id];


                        const nome =
                            profissional.nome
                                .toLowerCase()
                                .normalize("NFD")
                                .replace(
                                    /[\u0300-\u036f]/g,
                                    ""
                                );


                        if (
                            nome.includes(busca)
                        ) {

                            botao.style.display =
                                "flex";

                        } else {

                            botao.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }


    /* ============================= */
    /* ABRIR MODAL DE LIGAÇÃO */
    /* ============================= */

    function abrirChamada(tipo) {

        const profissional =
            profissionais[profissionalAtual];


        if (!profissional) {
            return;
        }


        /* ============================= */
        /* NOME */
        /* ============================= */

        nomeChamada.textContent =
            profissional.nome;


        /* ============================= */
        /* TIPO DA CHAMADA */
        /* ============================= */

        if (tipo === "video") {

            tipoChamada.textContent =
                profissional.online
                    ? "Iniciando videochamada..."
                    : "Profissional offline";

        } else {

            tipoChamada.textContent =
                profissional.online
                    ? "Ligando..."
                    : "Profissional offline";

        }


        /* ============================= */
        /* AVATAR */
        /* ============================= */

        avatarChamada.className =
            `avatar-chamada ${profissional.cor}`;

        avatarChamada.innerHTML = `
            <i class="fa-solid fa-user"></i>
        `;


        /* ============================= */
        /* ABRIR MODAL */
        /* ============================= */

        modalChamada.classList.add(
            "aberto"
        );

    }


    /* ============================= */
    /* BOTÃO DE LIGAÇÃO */
    /* ============================= */

    if (btnLigacao) {

        btnLigacao.addEventListener(
            "click",
            function () {

                abrirChamada("audio");

            }
        );

    }


    /* ============================= */
    /* BOTÃO DE VÍDEO */
    /* ============================= */

    if (btnVideo) {

        btnVideo.addEventListener(
            "click",
            function () {

                abrirChamada("video");

            }
        );

    }


    /* ============================= */
    /* FECHAR MODAL */
    /* ============================= */

    function fecharModalChamada() {

        modalChamada.classList.remove(
            "aberto"
        );

    }


    /* ============================= */
    /* BOTÃO X */
    /* ============================= */

    if (fecharChamada) {

        fecharChamada.addEventListener(
            "click",
            fecharModalChamada
        );

    }


    /* ============================= */
    /* BOTÃO DESLIGAR */
    /* ============================= */

    if (btnDesligar) {

        btnDesligar.addEventListener(
            "click",
            fecharModalChamada
        );

    }


    /* ============================= */
    /* INICIAR */
    /* ============================= */

    abrirConversa("gabrielly");

});