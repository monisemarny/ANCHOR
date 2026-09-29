// ==========================================================
// SAFEPSI - CHAT
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("SafePsi iniciado!");


    // ======================================================
    // ELEMENTOS
    // ======================================================

    const campoMensagem =
        document.getElementById("campoMensagem");

    const btnEnviar =
        document.getElementById("btnEnviar");

    const mensagens =
        document.getElementById("mensagens");

    const btnAnexo =
        document.getElementById("btnAnexo");

    const btnEncerrar =
        document.getElementById("btnEncerrar");


    // ======================================================
    // IDENTIFICAÇÃO DA SESSÃO
    // ======================================================

    let sessaoId =
        localStorage.getItem("safepsiSessaoId");


    if (!sessaoId) {

        sessaoId =
            Date.now().toString(36) +
            Math.random().toString(36).substring(2);

        localStorage.setItem(
            "safepsiSessaoId",
            sessaoId
        );

    }


    // ======================================================
    // HISTÓRICO
    // ======================================================

    let historicoConversa = [];


    // ======================================================
    // ESTADO
    // ======================================================

    let conversaEncerrada = false;


    // ======================================================
    // CARREGAR HISTÓRICO SALVO
    // ======================================================

    const historicoSalvo =
        localStorage.getItem("safepsiHistorico");


    if (historicoSalvo) {

        try {

            historicoConversa =
                JSON.parse(historicoSalvo);

            historicoConversa.forEach(function (item) {

                if (
                    item.role === "user" &&
                    item.content
                ) {

                    adicionarMensagem(
                        item.content,
                        "usuario"
                    );

                }

                if (
                    item.role === "assistant" &&
                    item.content
                ) {

                    adicionarMensagem(
                        item.content,
                        "safepsi"
                    );

                }

            });

        } catch (erro) {

            console.error(
                "Erro ao carregar histórico:",
                erro
            );

            historicoConversa = [];

        }

    }


    // ======================================================
    // SALVAR HISTÓRICO
    // ======================================================

    function salvarHistorico() {

        localStorage.setItem(
            "safepsiHistorico",
            JSON.stringify(historicoConversa)
        );

    }


    // ======================================================
    // ENVIAR MENSAGEM
    // ======================================================

    async function enviarMensagem() {

        if (conversaEncerrada) {
            return;
        }


        const texto =
            campoMensagem.value.trim();


        if (texto === "") {
            return;
        }


        // ==============================================
        // ADICIONA USUÁRIO AO HISTÓRICO
        // ==============================================

        const mensagemUsuario = {

            role: "user",

            content: texto

        };


        historicoConversa.push(
            mensagemUsuario
        );


        salvarHistorico();


        // ==============================================
        // MOSTRA NA TELA
        // ==============================================

        adicionarMensagem(
            texto,
            "usuario"
        );


        campoMensagem.value = "";


        // ==============================================
        // DESABILITA ENVIO
        // ==============================================

        btnEnviar.disabled = true;

        campoMensagem.disabled = true;


        // ==============================================
        // DIGITANDO
        // ==============================================

        const digitando =
            adicionarMensagem(
                "SafePsi está digitando...",
                "safepsi"
            );


        try {

            const resposta =
                await fetch(
                    "/api/safepsi",
                    {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            sessaoId:
                                sessaoId,

                            mensagens:
                                historicoConversa

                        })

                    }
                );


            const dados =
                await resposta.json();


            digitando.remove();


            if (!resposta.ok) {

                throw new Error(
                    dados.erro ||
                    "Erro no servidor."
                );

            }


            // ==========================================
            // RESPOSTA DO SAFEPSI
            // ==========================================

            const respostaSafePsi = {

                role: "assistant",

                content:
                    dados.resposta

            };


            historicoConversa.push(
                respostaSafePsi
            );


            salvarHistorico();


            adicionarMensagem(
                dados.resposta,
                "safepsi"
            );


        } catch (erro) {

            console.error(
                "Erro no SafePsi:",
                erro
            );


            digitando.remove();


            // Remove a mensagem do histórico
            historicoConversa.pop();


            salvarHistorico();


            adicionarMensagem(

                "Não consegui me conectar ao SafePsi agora. " +
                "Verifique se o servidor está funcionando.",

                "safepsi"

            );

        }


        // ==========================================
        // LIBERA CAMPO
        // ==========================================

        btnEnviar.disabled = false;

        campoMensagem.disabled = false;

        campoMensagem.focus();

    }


    // ======================================================
    // ADICIONAR MENSAGEM
    // ======================================================

    function adicionarMensagem(texto, tipo) {

        const mensagem =
            document.createElement("div");


        if (tipo === "safepsi") {

            mensagem.className =
                "mensagem mensagem-safepsi";


            // ==========================================
            // AVATAR
            // ==========================================

            const avatar =
                document.createElement("div");

            avatar.className =
                "mini-avatar";


            const icone =
                document.createElement("i");

            icone.className =
                "fa-solid fa-robot";


            avatar.appendChild(
                icone
            );


            // ==========================================
            // CONTEÚDO
            // ==========================================

            const conteudo =
                document.createElement("div");

            conteudo.className =
                "conteudo-mensagem";


            const nome =
                document.createElement("span");

            nome.className =
                "nome-mensagem";

            nome.textContent =
                "SafePsi";


            const balao =
                document.createElement("div");

            balao.className =
                "balao-mensagem";


            const textoMensagem =
                document.createElement("p");

            textoMensagem.textContent =
                texto;


            balao.appendChild(
                textoMensagem
            );


            conteudo.appendChild(
                nome
            );

            conteudo.appendChild(
                balao
            );


            mensagem.appendChild(
                avatar
            );

            mensagem.appendChild(
                conteudo
            );

        }


        // ==================================================
        // USUÁRIO
        // ==================================================

        else {

            mensagem.className =
                "mensagem mensagem-usuario";


            const conteudo =
                document.createElement("div");

            conteudo.className =
                "conteudo-mensagem";


            const balao =
                document.createElement("div");

            balao.className =
                "balao-mensagem";


            const textoMensagem =
                document.createElement("p");

            textoMensagem.textContent =
                texto;


            balao.appendChild(
                textoMensagem
            );


            conteudo.appendChild(
                balao
            );


            mensagem.appendChild(
                conteudo
            );

        }


        mensagens.appendChild(
            mensagem
        );


        // Rola para a última mensagem

        mensagens.scrollTop =
            mensagens.scrollHeight;


        return mensagem;

    }


    // ======================================================
    // ENTER
    // ======================================================

    campoMensagem.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                enviarMensagem();

            }

        }
    );


    // ======================================================
    // BOTÃO ENVIAR
    // ======================================================

    btnEnviar.addEventListener(
        "click",
        enviarMensagem
    );


    // ======================================================
    // BOTÃO ANEXO
    // ======================================================

    btnAnexo.addEventListener(
        "click",
        function () {

            alert(
                "O envio de arquivos será disponibilizado em uma próxima versão."
            );

        }
    );


    // ======================================================
    // ENCERRAR CONVERSA
    // ======================================================

    btnEncerrar.addEventListener(
        "click",
        async function () {

            if (conversaEncerrada) {
                return;
            }


            const confirmar =
                confirm(
                    "Deseja realmente encerrar esta conversa?"
                );


            if (!confirmar) {
                return;
            }


            conversaEncerrada = true;


            try {

                await fetch(
                    "/api/safepsi/encerrar",
                    {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            sessaoId: sessaoId
                        })

                    }
                );

            } catch (erro) {

                console.log(
                    "Não foi possível limpar a sessão no servidor."
                );

            }


            // Limpa histórico local

            localStorage.removeItem(
                "safepsiHistorico"
            );


            campoMensagem.disabled = true;

            btnEnviar.disabled = true;

            btnAnexo.disabled = true;


            adicionarMensagem(

                "A conversa foi encerrada. " +
                "Obrigado por conversar com o SafePsi. 💙",

                "safepsi"

            );

        }
    );


    // ======================================================
    // FOCO AUTOMÁTICO
    // ======================================================

    if (!conversaEncerrada) {

        campoMensagem.focus();

    }


});