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

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        menuLateral.classList.toggle("ativo");

    });


    document.addEventListener("click", function (event) {

        if (
            !menuLateral.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            menuLateral.classList.remove("ativo");

        }

    });


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



if (
    slides.length > 0 &&
    indicadores.length > 0 &&
    botaoAnterior &&
    botaoProximo
) {


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



    function proximoSlide() {

        slideAtual++;

        if (slideAtual >= slides.length) {

            slideAtual = 0;

        }

        mostrarSlide(slideAtual);

    }



    function slideAnterior() {

        slideAtual--;

        if (slideAtual < 0) {

            slideAtual = slides.length - 1;

        }

        mostrarSlide(slideAtual);

    }



    function iniciarCarrossel() {

        intervalo = setInterval(function () {

            proximoSlide();

        }, 5000);

    }



    function pararCarrossel() {

        clearInterval(intervalo);

    }



    botaoProximo.addEventListener("click", function () {

        proximoSlide();

        pararCarrossel();

        iniciarCarrossel();

    });



    botaoAnterior.addEventListener("click", function () {

        slideAnterior();

        pararCarrossel();

        iniciarCarrossel();

    });



    indicadores.forEach(function (indicador, indice) {

        indicador.addEventListener("click", function () {

            mostrarSlide(indice);

            pararCarrossel();

            iniciarCarrossel();

        });

    });



    const carrossel = document.querySelector(".carrossel");

    if (carrossel) {

        carrossel.addEventListener("mouseenter", function () {

            pararCarrossel();

        });


        carrossel.addEventListener("mouseleave", function () {

            iniciarCarrossel();

        });

    }



    mostrarSlide(0);

    iniciarCarrossel();

}



// ==================================================
// DENÚNCIA - ANCHOR
// ==================================================



// ==================================================
// ELEMENTOS PRINCIPAIS
// ==================================================

const destinatario = document.getElementById("destinatario");
const campoOutroOrgao = document.getElementById("campoOutroOrgao");

const estado = document.getElementById("estado");
const campoOutroEstado = document.getElementById("campoOutroEstado");

const tiposDenuncia = document.querySelectorAll('input[name="tipo"]');
const campoOutroTipo = document.getElementById("campoOutroTipo");

const tipoIdentificacao = document.querySelectorAll(
    'input[name="tipoIdentificacao"]'
);

const campoIdentificacao = document.getElementById(
    "campoIdentificacao"
);

const nomeDenunciante = document.getElementById(
    "nomeDenunciante"
);

const btnCancelar = document.querySelector(
    ".pagina-denuncia .btn-cancelar"
);

const btnContinuar = document.querySelector(
    ".pagina-denuncia .btn-continuar"
);

const btnVoltar = document.querySelector(
    ".pagina-denuncia .btn-voltar"
);

const etapas = document.querySelectorAll(
    ".pagina-denuncia .etapa"
);



// ==================================================
// CONTEÚDOS DAS ETAPAS
// ==================================================

const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");
const etapa3 = document.getElementById("etapa3");

const resumoDenuncia = document.getElementById(
    "resumoDenuncia"
);

let etapaAtual = 1;



// ==================================================
// IDENTIFICAÇÃO DO DENUNCIANTE
// ==================================================

tipoIdentificacao.forEach(function (opcao) {

    opcao.addEventListener("change", function () {

        if (!campoIdentificacao) {
            return;
        }


        if (this.value === "identificada") {

            campoIdentificacao.style.display = "block";

        } else {

            campoIdentificacao.style.display = "none";

        }

    });

});



// ==================================================
// ÓRGÃO RESPONSÁVEL - OUTRO
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
// TIPO DE DENÚNCIA - OUTRO
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
// ESTADO - OUTRO
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
// TESTEMUNHAS
// ==================================================

const testemunhas = document.querySelectorAll(
    'input[name="testemunhas"]'
);

const campoTestemunhas = document.getElementById(
    "campoTestemunhas"
);


testemunhas.forEach(function (opcao) {

    opcao.addEventListener("change", function () {

        if (!campoTestemunhas) {
            return;
        }


        if (this.value === "sim") {

            campoTestemunhas.classList.add("visivel");

        } else {

            campoTestemunhas.classList.remove("visivel");

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

if (btnVoltar) {

    btnVoltar.addEventListener("click", function () {


        if (etapaAtual === 2) {

            etapaAtual = 1;

            atualizarEtapa();

            return;

        }


        if (etapaAtual === 3) {

            etapaAtual = 2;

            atualizarEtapa();

            return;

        }

    });

}



// ==================================================
// VALIDAÇÃO DA ETAPA 1
// ==================================================

function validarEtapa1() {


    // ------------------------------------------
    // IDENTIFICAÇÃO
    // ------------------------------------------

    const identificacaoSelecionada =
        document.querySelector(
            'input[name="tipoIdentificacao"]:checked'
        );


    if (!identificacaoSelecionada) {

        alert(
            "Escolha se deseja se identificar ou fazer uma denúncia anônima."
        );

        return false;

    }



    // ------------------------------------------
    // NOME SE ESCOLHEU SE IDENTIFICAR
    // ------------------------------------------

    if (
        identificacaoSelecionada.value === "identificada" &&
        nomeDenunciante &&
        nomeDenunciante.value.trim() === ""
    ) {

        alert(
            "Informe seu nome ou escolha a opção de denúncia anônima."
        );

        nomeDenunciante.focus();

        return false;

    }



    // ------------------------------------------
    // ÓRGÃO
    // ------------------------------------------

    if (
        destinatario &&
        destinatario.value === ""
    ) {

        alert(
            "Selecione o órgão responsável."
        );

        destinatario.focus();

        return false;

    }



    // ------------------------------------------
    // OUTRO ÓRGÃO
    // ------------------------------------------

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

            return false;

        }

    }



    // ------------------------------------------
    // TIPO
    // ------------------------------------------

    const tipoSelecionado =
        document.querySelector(
            'input[name="tipo"]:checked'
        );


    if (!tipoSelecionado) {

        alert(
            "Selecione o tipo de denúncia."
        );

        return false;

    }



    // ------------------------------------------
    // OUTRO TIPO
    // ------------------------------------------

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

            return false;

        }

    }



    // ------------------------------------------
    // ESTADO
    // ------------------------------------------

    if (
        estado &&
        estado.value === ""
    ) {

        alert(
            "Selecione o estado."
        );

        estado.focus();

        return false;

    }



    // ------------------------------------------
    // OUTRO ESTADO
    // ------------------------------------------

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

            return false;

        }

    }


    return true;

}



// ==================================================
// VALIDAÇÃO DA ETAPA 2
// ==================================================

function validarEtapa2() {


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

        return false;

    }



    const dataOcorrencia =
        document.getElementById("dataOcorrencia");


    if (
        dataOcorrencia &&
        dataOcorrencia.value === ""
    ) {

        alert(
            "Informe a data da ocorrência."
        );

        dataOcorrencia.focus();

        return false;

    }


    return true;

}



// ==================================================
// ESCAPAR TEXTO PARA A REVISÃO
// ==================================================

function escaparHTML(texto) {

    if (texto === null || texto === undefined) {

        return "";

    }


    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



// ==================================================
// PEGAR TEXTO DO SELECT
// ==================================================

function textoSelecionado(id) {

    const elemento =
        document.getElementById(id);


    if (
        !elemento ||
        elemento.selectedIndex < 0
    ) {

        return "";

    }


    return elemento.options[
        elemento.selectedIndex
    ].text;

}



// ==================================================
// FORMATAR DATA
// ==================================================

function formatarData(data) {

    if (!data) {

        return "Não informada";

    }


    const partes = data.split("-");


    if (partes.length !== 3) {

        return data;

    }


    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}



// ==================================================
// CRIAR LINHA DA FICHA
// ==================================================

function criarLinhaFicha(titulo, valor) {

    const valorFinal =
        valor && String(valor).trim() !== ""
            ? escaparHTML(valor)
            : "Não informado";


    return `
        <div class="linha-resumo">

            <span class="rotulo-resumo">
                ${escaparHTML(titulo)}
            </span>

            <span class="valor-resumo">
                ${valorFinal}
            </span>

        </div>
    `;

}



// ==================================================
// GERAR FICHA DE REVISÃO
// ==================================================

function gerarResumoDenuncia() {

    if (!resumoDenuncia) {
        return;
    }


    // =================================================
    // IDENTIFICAÇÃO
    // =================================================

    const identificacao =
        document.querySelector(
            'input[name="tipoIdentificacao"]:checked'
        );


    let blocoIdentificacao = "";


    if (
        identificacao &&
        identificacao.value === "anonima"
    ) {

        blocoIdentificacao = `

            <div class="secao-resumo">

                <div class="titulo-secao-resumo">

                    <i class="fa-solid fa-user-secret"></i>

                    <h3>
                        Identificação do denunciante
                    </h3>

                </div>

                <div class="resumo-destaque anonimato">

                    <i class="fa-solid fa-shield-halved"></i>

                    <div>

                        <strong>
                            Denúncia anônima
                        </strong>

                        <p>
                            Os dados de identificação do denunciante não foram informados.
                        </p>

                    </div>

                </div>

            </div>

        `;

    } else {

        const nome =
            document.getElementById("nomeDenunciante")?.value.trim();

        const email =
            document.getElementById("emailDenunciante")?.value.trim();

        const telefone =
            document.getElementById("telefoneDenunciante")?.value.trim();


        blocoIdentificacao = `

            <div class="secao-resumo">

                <div class="titulo-secao-resumo">

                    <i class="fa-solid fa-user"></i>

                    <h3>
                        Identificação do denunciante
                    </h3>

                </div>

                ${criarLinhaFicha("Nome", nome)}

                ${criarLinhaFicha("E-mail", email)}

                ${criarLinhaFicha("Telefone", telefone)}

            </div>

        `;

    }



    // =================================================
    // DESTINATÁRIO
    // =================================================

    let destinatarioTexto =
        textoSelecionado("destinatario");


    if (
        destinatario &&
        destinatario.value === "outro"
    ) {

        destinatarioTexto =
            document.getElementById("outroOrgao")?.value.trim();

    }



    // =================================================
    // TIPO
    // =================================================

    const tipoSelecionado =
        document.querySelector(
            'input[name="tipo"]:checked'
        );


    let tipoTexto = "";


    if (tipoSelecionado) {

        tipoTexto =
            tipoSelecionado.parentElement
                ?.querySelector("span:last-child")
                ?.textContent.trim()
            || tipoSelecionado.value;

    }


    if (
        tipoSelecionado &&
        tipoSelecionado.value === "outro"
    ) {

        tipoTexto =
            document.getElementById("outroTipo")?.value.trim();

    }



    // =================================================
    // PESSOA AFETADA
    // =================================================

    const quemSofreu =
        textoSelecionado("quemSofreu");

    const nomeVitima =
        document.getElementById("nomeVitima")?.value.trim();

    const idadeVitima =
        document.getElementById("idadeVitima")?.value.trim();

    const relacaoVitima =
        textoSelecionado("relacaoVitima");



    // =================================================
    // LOCAL
    // =================================================

    let estadoTexto =
        textoSelecionado("estado");


    if (
        estado &&
        estado.value === "outro"
    ) {

        estadoTexto =
            document.getElementById("outroEstado")?.value.trim();

    }


    const cidade =
        document.getElementById("cidade")?.value.trim();

    const local =
        document.getElementById("local")?.value.trim();



    // =================================================
    // ETAPA 2
    // =================================================

    const descricao =
        document.getElementById("descricao")?.value.trim();

    const data =
        document.getElementById("dataOcorrencia")?.value;

    const hora =
        document.getElementById("horaOcorrencia")?.value;

    const envolvidos =
        document.getElementById("envolvidos")?.value.trim();

    const testemunhaSelecionada =
        document.querySelector(
            'input[name="testemunhas"]:checked'
        );

    const testemunhasTexto =
        testemunhaSelecionada
            ? testemunhaSelecionada.value === "sim"
                ? "Sim"
                : "Não"
            : "Não informado";

    const descricaoTestemunhas =
        document.getElementById(
            "descricaoTestemunhas"
        )?.value.trim();



    // =================================================
    // ARQUIVOS
    // =================================================

    const camposAnexos =
        document.querySelectorAll(
            '.card-anexo input[type="file"]'
        );


    let arquivos = [];


    camposAnexos.forEach(function (campo) {

        Array.from(campo.files).forEach(function (arquivo) {

            arquivos.push(arquivo.name);

        });

    });


    let arquivosHTML = "";


    if (arquivos.length === 0) {

        arquivosHTML = `
            <div class="nenhum-arquivo">
                <i class="fa-regular fa-file"></i>
                Nenhum arquivo anexado.
            </div>
        `;

    } else {

        arquivosHTML = `

            <div class="lista-arquivos-resumo">

                ${arquivos.map(function (arquivo) {

                    return `
                        <div class="arquivo-resumo">

                            <i class="fa-solid fa-paperclip"></i>

                            <span>
                                ${escaparHTML(arquivo)}
                            </span>

                        </div>
                    `;

                }).join("")}

            </div>

        `;

    }



    // =================================================
    // MONTAR FICHA
    // =================================================

    resumoDenuncia.innerHTML = `

        <div class="cabecalho-resumo">

            <div class="icone-resumo-principal">

                <i class="fa-solid fa-file-circle-check"></i>

            </div>

            <div>

                <h3>
                    Ficha da denúncia
                </h3>

                <p>
                    Confira cuidadosamente as informações abaixo antes de enviar.
                </p>

            </div>

        </div>



        ${blocoIdentificacao}



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-building"></i>

                <h3>
                    Destinatário
                </h3>

            </div>

            ${criarLinhaFicha(
                "Órgão responsável",
                destinatarioTexto
            )}

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-tag"></i>

                <h3>
                    Tipo de denúncia
                </h3>

            </div>

            ${criarLinhaFicha(
                "Tipo",
                tipoTexto
            )}

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-person"></i>

                <h3>
                    Pessoa afetada
                </h3>

            </div>

            ${criarLinhaFicha(
                "Quem sofreu",
                quemSofreu
            )}

            ${criarLinhaFicha(
                "Nome",
                nomeVitima
            )}

            ${criarLinhaFicha(
                "Idade aproximada",
                idadeVitima
            )}

            ${criarLinhaFicha(
                "Relação com o denunciante",
                relacaoVitima
            )}

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-location-dot"></i>

                <h3>
                    Local da ocorrência
                </h3>

            </div>

            ${criarLinhaFicha(
                "Estado",
                estadoTexto
            )}

            ${criarLinhaFicha(
                "Cidade",
                cidade
            )}

            ${criarLinhaFicha(
                "Local específico",
                local
            )}

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-regular fa-calendar"></i>

                <h3>
                    Quando aconteceu
                </h3>

            </div>

            ${criarLinhaFicha(
                "Data",
                formatarData(data)
            )}

            ${criarLinhaFicha(
                "Horário aproximado",
                hora
            )}

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-file-lines"></i>

                <h3>
                    Descrição da ocorrência
                </h3>

            </div>

            <div class="texto-resumo">

                ${descricao
                    ? escaparHTML(descricao).replace(/\n/g, "<br>")
                    : "Não informado"
                }

            </div>

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-users"></i>

                <h3>
                    Pessoas envolvidas
                </h3>

            </div>

            <div class="texto-resumo">

                ${envolvidos
                    ? escaparHTML(envolvidos).replace(/\n/g, "<br>")
                    : "Não informado"
                }

            </div>

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-eye"></i>

                <h3>
                    Testemunhas
                </h3>

            </div>

            ${criarLinhaFicha(
                "Havia testemunhas?",
                testemunhasTexto
            )}

            ${
                testemunhaSelecionada &&
                testemunhaSelecionada.value === "sim"
                    ? `
                        <div class="texto-resumo">

                            ${
                                descricaoTestemunhas
                                    ? escaparHTML(
                                        descricaoTestemunhas
                                    ).replace(/\n/g, "<br>")
                                    : "Nenhuma informação adicional."
                            }

                        </div>
                    `
                    : ""
            }

        </div>



        <div class="secao-resumo">

            <div class="titulo-secao-resumo">

                <i class="fa-solid fa-paperclip"></i>

                <h3>
                    Arquivos anexados
                </h3>

            </div>

            ${arquivosHTML}

        </div>



        <div class="aviso-revisao">

            <i class="fa-solid fa-circle-info"></i>

            <p>
                Confira os dados acima. Se precisar alterar alguma informação,
                use o botão <strong>Voltar</strong> para retornar à etapa anterior.
            </p>

        </div>

    `;

}



// ==================================================
// BOTÃO CONTINUAR
// ==================================================

if (btnContinuar) {

    btnContinuar.addEventListener("click", function () {


        // =================================================
        // ETAPA 1 → ETAPA 2
        // =================================================

        if (etapaAtual === 1) {

            if (!validarEtapa1()) {
                return;
            }


            etapaAtual = 2;

            atualizarEtapa();

            return;

        }



        // =================================================
        // ETAPA 2 → ETAPA 3
        // =================================================

        if (etapaAtual === 2) {

            if (!validarEtapa2()) {
                return;
            }


            gerarResumoDenuncia();


            etapaAtual = 3;

            atualizarEtapa();

            return;

        }



        // =================================================
        // ETAPA 3 → ENVIO
        // =================================================

        if (etapaAtual === 3) {

            const confirmar =
                confirm(
                    "Você conferiu todas as informações e deseja enviar a denúncia?"
                );


            if (!confirmar) {
                return;
            }


            /*
             * IMPORTANTE:
             * Aqui ainda estamos trabalhando apenas com o protótipo.
             * O envio real para o banco será implementado posteriormente.
             */

            alert(
                "Denúncia preparada com sucesso!\n\n" +
                "No protótipo do Anchor, o próximo passo será conectar " +
                "este formulário ao banco de dados."
            );

        }

    });

}



// ==================================================
// ATUALIZAR ETAPAS
// ==================================================

function atualizarEtapa() {


    // =================================================
    // INDICADORES
    // =================================================

    etapas.forEach(function (etapa, index) {

        const numeroEtapa = index + 1;


        if (numeroEtapa === etapaAtual) {

            etapa.classList.add("ativa");

            etapa.classList.remove("concluida");

        }


        else if (numeroEtapa < etapaAtual) {

            etapa.classList.remove("ativa");

            etapa.classList.add("concluida");

        }


        else {

            etapa.classList.remove("ativa");

            etapa.classList.remove("concluida");

        }

    });



    // =================================================
    // MOSTRAR / ESCONDER ETAPA 1
    // =================================================

    if (etapa1) {

        etapa1.style.display =
            etapaAtual === 1
                ? "block"
                : "none";

    }



    // =================================================
    // MOSTRAR / ESCONDER ETAPA 2
    // =================================================

    if (etapa2) {

        etapa2.style.display =
            etapaAtual === 2
                ? "block"
                : "none";

    }



    // =================================================
    // MOSTRAR / ESCONDER ETAPA 3
    // =================================================

    if (etapa3) {

        etapa3.style.display =
            etapaAtual === 3
                ? "block"
                : "none";

    }



    // =================================================
    // BOTÃO VOLTAR
    // =================================================

    if (btnVoltar) {

        if (
            etapaAtual === 2 ||
            etapaAtual === 3
        ) {

            btnVoltar.style.display =
                "inline-flex";

        } else {

            btnVoltar.style.display =
                "none";

        }

    }



    // =================================================
    // BOTÃO CONTINUAR
    // =================================================

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
// ANEXOS
// ==================================================

const blocoAnexos =
    document.querySelector(".bloco-anexos");

const abrirAnexos =
    document.querySelector("#abrirAnexos");

const arquivosSelecionados =
    document.querySelector("#arquivosSelecionados");



if (
    blocoAnexos &&
    abrirAnexos
) {

    abrirAnexos.addEventListener(
        "click",
        function () {

            blocoAnexos.classList.toggle(
                "aberto"
            );

        }
    );

}



// ==================================================
// MOSTRAR ARQUIVOS ESCOLHIDOS
// ==================================================

const camposAnexos =
    document.querySelectorAll(
        '.card-anexo input[type="file"]'
    );



function renderizarArquivosSelecionados() {

    if (!arquivosSelecionados) {
        return;
    }


    arquivosSelecionados.innerHTML = "";


    let quantidadeArquivos = 0;


    camposAnexos.forEach(function (campo) {

        Array.from(campo.files).forEach(
            function (arquivo) {

                quantidadeArquivos++;


                const item =
                    document.createElement("div");

                item.className =
                    "arquivo-selecionado";


                let icone = "fa-file";


                if (
                    arquivo.type.startsWith(
                        "image/"
                    )
                ) {

                    icone = "fa-image";

                }

                else if (
                    arquivo.type.startsWith(
                        "video/"
                    )
                ) {

                    icone = "fa-video";

                }

                else if (
                    arquivo.type.startsWith(
                        "audio/"
                    )
                ) {

                    icone = "fa-microphone";

                }

                else if (
                    arquivo.type ===
                    "application/pdf"
                ) {

                    icone = "fa-file-pdf";

                }


                item.innerHTML = `

                    <i class="fa-solid ${icone}"></i>

                    <strong>
                        ${escaparHTML(arquivo.name)}
                    </strong>

                `;


                arquivosSelecionados.appendChild(
                    item
                );

            }
        );

    });


    if (quantidadeArquivos === 0) {

        arquivosSelecionados.innerHTML = "";

    }

}



if (
    camposAnexos.length &&
    arquivosSelecionados
) {

    camposAnexos.forEach(
        function (campo) {

            campo.addEventListener(
                "change",
                function () {

                    renderizarArquivosSelecionados();

                }
            );

        }
    );

}



// ==================================================
// INICIALIZAÇÃO
// ==================================================

atualizarEtapa();

