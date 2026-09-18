// ==========================================================
// ANCHOR - ACOMPANHAR DENÚNCIA
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página Acompanhar Denúncia iniciada!");


    // ======================================================
    // ELEMENTOS DA PÁGINA
    // ======================================================

    const codigoDenuncia =
        document.getElementById("codigoDenuncia");

    const btnConsultar =
        document.getElementById("btnConsultar");

    const resultadoAcompanhamento =
        document.getElementById("resultadoAcompanhamento");

    const btnAtualizar =
        document.getElementById("btnAtualizar");

    const btnDetalhes =
        document.getElementById("btnDetalhes");

    const mensagemErro =
        document.getElementById("mensagemErro");

    const codigoExibido =
        document.getElementById("codigoExibido");

    const descricaoStatus =
        document.getElementById("descricaoStatus");

    const prazoResposta =
        document.getElementById("prazoResposta");

    const linhaTempo =
        document.getElementById("linhaTempo");

    const detalhesDenuncia =
        document.getElementById("detalhesDenuncia");

    const detalheTipo =
        document.getElementById("detalheTipo");

    const detalheLocal =
        document.getElementById("detalheLocal");

    const detalheData =
        document.getElementById("detalheData");
        const mensagemConcluida =
    document.getElementById("mensagemConcluida");


    // ======================================================
    // DADOS DE DEMONSTRAÇÃO
    // ======================================================

    /*
        Estes dados são apenas para o protótipo.

        Quando o banco de dados estiver conectado,
        esta parte será substituída por uma consulta
        ao backend/API.
    */

    const denuncias = {

        "A12345": {

            codigo: "A12345",

            status: "Recebida",

            descricaoStatus:
                "Sua denúncia foi recebida com sucesso e está em análise.",

            prazo:
                "Até 7 dias úteis",

            dataRecebimento:
                "10/08/2026",

            horaRecebimento:
                "14:32",

            tipo:
                "Violência doméstica",

            local:
                "São Paulo - SP",

            atualizacoes: [

                {
                    titulo:
                        "Denúncia recebida",

                    descricao:
                        "Sua denúncia foi recebida com sucesso e entrou no sistema.",

                    data:
                        "10/08/2026",

                    hora:
                        "14:32",

                    icone:
                        "fa-check",

                    concluida:
                        true
                },

                {
                    titulo:
                        "Em análise",

                    descricao:
                        "Sua denúncia está sendo analisada pela equipe responsável.",

                    data:
                        "",

                    hora:
                        "",

                    icone:
                        "fa-clipboard-list",

                    concluida:
                        false
                },

                {
                    titulo:
                        "Em investigação",

                    descricao:
                        "A equipe poderá iniciar uma investigação conforme as informações disponíveis.",

                    data:
                        "",

                    hora:
                        "",

                    icone:
                        "fa-magnifying-glass",

                    concluida:
                        false
                },

                {
                    titulo:
                        "Concluída",

                    descricao:
                        "Assim que a análise for concluída, o status será atualizado.",

                    data:
                        "",

                    hora:
                        "",

                    icone:
                        "fa-flag-checkered",

                    concluida:
                        false
                }

            ]

        }

    };


    // ======================================================
    // FORMATAR CÓDIGO
    // ======================================================

    function formatarCodigo(valor) {

        return valor
            .trim()
            .toUpperCase();

    }


    // ======================================================
    // MOSTRAR ERRO
    // ======================================================

    function mostrarErro(mensagem) {

        if (!mensagemErro) {
            return;
        }

        mensagemErro.style.display = "flex";

        const paragrafo =
            mensagemErro.querySelector("p");

        if (paragrafo) {

            paragrafo.textContent =
                mensagem;

        }

    }


    // ======================================================
    // ESCONDER ERRO
    // ======================================================

    function esconderErro() {

        if (mensagemErro) {

            mensagemErro.style.display =
                "none";

        }

    }


    // ======================================================
    // ATUALIZAR LINHA DO TEMPO
    // ======================================================

    function atualizarLinhaDoTempo(denuncia) {

        if (!linhaTempo) {
            return;
        }


        linhaTempo.innerHTML = "";


        denuncia.atualizacoes.forEach(
            function (atualizacao) {

                const item =
                    document.createElement("div");

                item.className =
                    "item-tempo";


                if (atualizacao.concluida) {

                    item.classList.add("atual");

                }
                else {

                    item.classList.add("pendente");

                }


                const marcador =
                    document.createElement("div");

                marcador.className =
                    "marcador-tempo";


                marcador.innerHTML = `
                    <i class="fa-solid ${atualizacao.icone}"></i>
                `;


                const conteudo =
                    document.createElement("div");

                conteudo.className =
                    "conteudo-tempo";


                let dataHora = "";

                if (
                    atualizacao.data &&
                    atualizacao.hora
                ) {

                    dataHora =
                        `${atualizacao.data} • ${atualizacao.hora}`;

                }
                else {

                    dataHora =
                        "Aguardando atualização";

                }


                conteudo.innerHTML = `

                    <div class="cabecalho-tempo">

                        <strong>
                            ${atualizacao.titulo}
                        </strong>

                        <span>
                            ${dataHora}
                        </span>

                    </div>

                    <p>
                        ${atualizacao.descricao}
                    </p>

                `;


                item.appendChild(marcador);

                item.appendChild(conteudo);

                linhaTempo.appendChild(item);

            }
        );

    }


    // ======================================================
    // ATUALIZAR PROGRESSO
    // ======================================================

    function atualizarProgresso(status) {

        const etapas =
            document.querySelectorAll(
                ".status-etapa"
            );


        etapas.forEach(
            function (etapa) {

                etapa.classList.remove(
                    "ativa"
                );

                etapa.classList.remove(
                    "concluida"
                );

            }
        );


        let indiceAtual = 0;


        if (status === "Recebida") {

            indiceAtual = 0;

        }
        else if (status === "Em análise") {

            indiceAtual = 1;

        }
        else if (status === "Em investigação") {

            indiceAtual = 2;

        }
        else if (status === "Concluída") {

            indiceAtual = 3;

        }


        etapas.forEach(
            function (etapa, indice) {

                if (indice < indiceAtual) {

                    etapa.classList.add(
                        "concluida"
                    );

                }

                if (indice === indiceAtual) {

                    etapa.classList.add(
                        "ativa"
                    );

                }

            }
        );

    }


    // ======================================================
    // MOSTRAR RESULTADO
    // ======================================================

    function mostrarResultado(denuncia) {

        if (!resultadoAcompanhamento) {
            return;
        }


        resultadoAcompanhamento.style.display =
            "block";


        // Código

        if (codigoExibido) {

            codigoExibido.textContent =
                "#" + denuncia.codigo;

        }


        // Status

        if (descricaoStatus) {

            descricaoStatus.textContent =
                denuncia.descricaoStatus;

        }


        // Prazo

        if (prazoResposta) {

            prazoResposta.textContent =
                denuncia.prazo;

        }


        // Detalhes

        if (detalheTipo) {

            detalheTipo.textContent =
                denuncia.tipo;

        }


        if (detalheLocal) {

            detalheLocal.textContent =
                denuncia.local;

        }


        if (detalheData) {

            detalheData.textContent =
                `${denuncia.dataRecebimento} às ${denuncia.horaRecebimento}`;

        }


        // Linha do tempo

        atualizarLinhaDoTempo(
            denuncia
        );


        // Progresso

        atualizarProgresso(
            denuncia.status
        );

// Mensagem de denúncia concluída

if (mensagemConcluida) {

    if (denuncia.status === "Concluída") {

        mensagemConcluida.classList.add(
            "aberta"
        );

    }
    else {

        mensagemConcluida.classList.remove(
            "aberta"
        );

    }

}

        // Scroll

        resultadoAcompanhamento.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }


    // ======================================================
    // CONSULTAR DENÚNCIA
    // ======================================================

    function consultarDenuncia() {

        esconderErro();


        if (!codigoDenuncia) {
            return;
        }


        const codigo =
            formatarCodigo(
                codigoDenuncia.value
            );


        // Campo vazio

        if (codigo === "") {

            mostrarErro(
                "Digite o código da denúncia para continuar."
            );

            codigoDenuncia.focus();

            return;

        }


        // Procurar denúncia

        const denuncia =
            denuncias[codigo];


        // Código não encontrado

        if (!denuncia) {

            mostrarErro(
                "Não encontramos uma denúncia com esse código. Verifique se o código foi digitado corretamente."
            );

            return;

        }


        // Denúncia encontrada

        mostrarResultado(
            denuncia
        );

    }

    // ======================================================
// BOTÃO ACOMPANHAR DENÚNCIA
// ======================================================

if (btnConsultar) {

    btnConsultar.addEventListener(
        "click",
        function () {

            consultarDenuncia();

        }
    );

}


// Permite consultar apertando Enter no campo do código

if (codigoDenuncia) {

    codigoDenuncia.addEventListener(
        "keydown",
        function (evento) {

            if (evento.key === "Enter") {

                evento.preventDefault();

                consultarDenuncia();

            }

        }
    );

}
// ======================================================
// BOTÃO ATUALIZAR
// ======================================================

// PROTÓTIPO:
// O status avança pelas etapas usando dados fictícios.
// FUTURO:
// Esta parte será substituída por uma consulta ao banco
// de dados através do backend/API.

let etapaAtual = 0;

if (btnAtualizar) {

    btnAtualizar.addEventListener(
        "click",
        function () {

            const denuncia =
                denuncias["A12345"];

            if (!denuncia) {
                return;
            }


            // Impede vários cliques durante a atualização

            btnAtualizar.disabled = true;


            const icone =
                btnAtualizar.querySelector(
                    ".fa-rotate"
                );


            if (icone) {

                icone.classList.add(
                    "fa-spin"
                );

            }


            const texto =
                btnAtualizar.querySelector(
                    ".texto-acao strong"
                );


            if (texto) {

                texto.textContent =
                    "Atualizando...";

            }


            // Simula uma consulta ao sistema

            setTimeout(
                function () {

                    if (icone) {

                        icone.classList.remove(
                            "fa-spin"
                        );

                    }


                    // Avança uma etapa

                    if (
                        etapaAtual <
                        denuncia.atualizacoes.length - 1
                    ) {

                        etapaAtual++;

                    }


                    // Marca todas as etapas
                    // anteriores e a atual como concluídas

                    denuncia.atualizacoes.forEach(
                        function (atualizacao, indice) {

                            atualizacao.concluida =
                                indice <= etapaAtual;

                        }
                    );


                    // Atualiza o status principal

                    denuncia.status =
                        denuncia.atualizacoes[
                            etapaAtual
                        ].titulo;


                    denuncia.descricaoStatus =
                        denuncia.atualizacoes[
                            etapaAtual
                        ].descricao;


                    // Atualiza a tela

                    mostrarResultado(
                        denuncia
                    );


                    // Texto do botão

                    if (texto) {

                        if (
                            etapaAtual <
                            denuncia.atualizacoes.length - 1
                        ) {

                            texto.textContent =
                                "Atualizar status";

                        }
                        else {

                            texto.textContent =
                                "Status concluído";

                        }

                    }


                    btnAtualizar.disabled =
                        false;


                },
                800
            );

        }
    );

}
    

   


    // ======================================================
    // BOTÃO VER DETALHES
    // ======================================================

    if (btnDetalhes) {

        btnDetalhes.addEventListener(
            "click",
            function () {

                if (!detalhesDenuncia) {
                    return;
                }


                const aberto =
                    detalhesDenuncia.classList.contains(
                        "aberto"
                    );


                if (aberto) {

                    detalhesDenuncia.classList.remove(
                        "aberto"
                    );

                    btnDetalhes.classList.remove(
                        "ativo"
                    );


                    const strong =
                        btnDetalhes.querySelector(
                            ".texto-acao strong"
                        );

                    const seta =
                        btnDetalhes.querySelector(
                            ".seta-acao"
                        );


                    if (strong) {

                        strong.textContent =
                            "Ver detalhes da denúncia";

                    }


                    if (seta) {

                        seta.className =
                            "fa-solid fa-chevron-right seta-acao";

                    }

                }
                else {

                    detalhesDenuncia.classList.add(
                        "aberto"
                    );

                    btnDetalhes.classList.add(
                        "ativo"
                    );


                    const strong =
                        btnDetalhes.querySelector(
                            ".texto-acao strong"
                        );

                    const seta =
                        btnDetalhes.querySelector(
                            ".seta-acao"
                        );


                    if (strong) {

                        strong.textContent =
                            "Ocultar detalhes da denúncia";

                    }


                    if (seta) {

                        seta.className =
                            "fa-solid fa-chevron-up seta-acao";

                    }


                    detalhesDenuncia.scrollIntoView({

                        behavior: "smooth",

                        block: "nearest"

                    });

                }

            }
        );

    }


});