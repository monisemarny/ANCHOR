// ==========================================================
// ANCHOR - AGENDAMENTO PSICOLÓGICO
// ==========================================================


document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de agendamento iniciada!");


    // ======================================================
    // ELEMENTOS
    // ======================================================

    const etapas = document.querySelectorAll(".conteudo-etapa");

    const indicadores =
        document.querySelectorAll(".etapa");

    const linhas =
        document.querySelectorAll(".linha-etapa");


    // PROFISSIONAIS

    const profissionais =
        document.querySelectorAll(
            'input[name="profissional"]'
        );


    // MODALIDADE

    const modalidades =
        document.querySelectorAll(
            'input[name="modalidade"]'
        );


    // PAGAMENTO

    const pagamentos =
        document.querySelectorAll(
            'input[name="pagamento"]'
        );


    // CALENDÁRIO

    const calendario =
        document.getElementById("calendario");

    const mesAno =
        document.getElementById("mesAno");

    const mesAnterior =
        document.getElementById("mesAnterior");

    const mesProximo =
        document.getElementById("mesProximo");


    // DATA / HORÁRIO

    const dataEscolhida =
        document.getElementById("dataEscolhida");

    const horarioEscolhido =
        document.getElementById("horarioEscolhido");


    // BOTÕES

    const btnEtapa1 =
        document.getElementById("btnEtapa1");

    const btnEtapa2 =
        document.getElementById("btnEtapa2");

    const btnEtapa3 =
        document.getElementById("btnEtapa3");

    const btnPagamento =
        document.getElementById("btnPagamento");


    const btnVoltar2 =
        document.getElementById("btnVoltar2");

    const btnVoltar3 =
        document.getElementById("btnVoltar3");

    const btnVoltar4 =
        document.getElementById("btnVoltar4");


    // ======================================================
    // ESTADO DO AGENDAMENTO
    // ======================================================

    let etapaAtual = 1;

    let dataAtual = new Date();

    let dataSelecionada = null;

    let horarioSelecionado = null;

    let modalidadeSelecionada = "Online";


    // ======================================================
    // MESES
    // ======================================================

    const nomesMeses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];


    // ======================================================
    // MOSTRAR ETAPA
    // ======================================================

    function mostrarEtapa(numero) {

        etapaAtual = numero;


        // ----------------------------------------------
        // ESCONDE TODAS AS ETAPAS
        // ----------------------------------------------

        etapas.forEach(function (etapa) {

            etapa.classList.remove("ativa");

        });


        // ----------------------------------------------
        // MOSTRA A ETAPA ATUAL
        // ----------------------------------------------

        const etapaSelecionada =
            document.querySelector(
                `.conteudo-etapa[data-etapa="${numero}"]`
            );


        if (etapaSelecionada) {

            etapaSelecionada.classList.add("ativa");

        }


        // ----------------------------------------------
        // ATUALIZA INDICADORES
        // ----------------------------------------------

        indicadores.forEach(function (indicador) {

            const numeroIndicador =
                Number(
                    indicador.dataset.etapaIndicador
                );


            indicador.classList.remove("ativa");
            indicador.classList.remove("concluida");


            if (numeroIndicador === numero) {

                indicador.classList.add("ativa");

            }


            if (numeroIndicador < numero) {

                indicador.classList.add("concluida");

            }

        });


        // ----------------------------------------------
        // ATUALIZA LINHAS
        // ----------------------------------------------

        linhas.forEach(function (linha, index) {

            if (index < numero - 1) {

                linha.classList.add("concluida");

            } else {

                linha.classList.remove("concluida");

            }

        });


        // ----------------------------------------------
        // VOLTA PARA O TOPO
        // ----------------------------------------------

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // ======================================================
    // PROFISSIONAIS
    // ======================================================

    profissionais.forEach(function (profissional) {

        profissional.addEventListener(
            "change",
            function () {

                document
                    .querySelectorAll(".profissional-card")
                    .forEach(function (card) {

                        card.classList.remove(
                            "selecionado"
                        );

                    });


                const card =
                    profissional.closest(
                        ".profissional-card"
                    );


                if (card) {

                    card.classList.add(
                        "selecionado"
                    );

                }

            }
        );

    });


    // ======================================================
    // MODALIDADES
    // ======================================================

    modalidades.forEach(function (modalidade) {

        modalidade.addEventListener(
            "change",
            function () {

                modalidadeSelecionada =
                    modalidade.value;


                document
                    .querySelectorAll(".modalidade-card")
                    .forEach(function (card) {

                        card.classList.remove(
                            "selecionado"
                        );

                    });


                const card =
                    modalidade.closest(
                        ".modalidade-card"
                    );


                if (card) {

                    card.classList.add(
                        "selecionado"
                    );

                }

            }
        );

    });


    // ======================================================
    // PAGAMENTOS
    // ======================================================

    pagamentos.forEach(function (pagamento) {

        pagamento.addEventListener(
            "change",
            function () {

                document
                    .querySelectorAll(".pagamento-card")
                    .forEach(function (card) {

                        card.classList.remove(
                            "selecionado"
                        );

                    });


                const card =
                    pagamento.closest(
                        ".pagamento-card"
                    );


                if (card) {

                    card.classList.add(
                        "selecionado"
                    );

                }

            }
        );

    });


    // ======================================================
    // CALENDÁRIO
    // ======================================================

    function criarCalendario() {

        calendario.innerHTML = "";


        const ano =
            dataAtual.getFullYear();

        const mes =
            dataAtual.getMonth();


        mesAno.textContent =
            `${nomesMeses[mes]} ${ano}`;


        // Primeiro dia do mês

        const primeiroDia =
            new Date(
                ano,
                mes,
                1
            ).getDay();


        // Quantidade de dias

        const quantidadeDias =
            new Date(
                ano,
                mes + 1,
                0
            ).getDate();


        // ----------------------------------------------
        // ESPAÇOS ANTES DO PRIMEIRO DIA
        // ----------------------------------------------

        for (
            let i = 0;
            i < primeiroDia;
            i++
        ) {

            const vazio =
                document.createElement("div");

            vazio.classList.add("dia", "vazio");

            calendario.appendChild(vazio);

        }


        // ----------------------------------------------
        // DIAS
        // ----------------------------------------------

        for (
            let dia = 1;
            dia <= quantidadeDias;
            dia++
        ) {

            const botao =
                document.createElement("button");


            botao.type = "button";

            botao.textContent = dia;

            botao.classList.add("dia");


            const dataDia =
                new Date(
                    ano,
                    mes,
                    dia
                );


            // ------------------------------------------
            // DATA DE HOJE
            // ------------------------------------------

            const hoje =
                new Date();

            hoje.setHours(
                0,
                0,
                0,
                0
            );


            if (
                dataDia.getTime() ===
                hoje.getTime()
            ) {

                botao.classList.add("hoje");

            }


            // ------------------------------------------
            // DATAS PASSADAS
            // ------------------------------------------

            if (dataDia < hoje) {

                botao.classList.add(
                    "indisponivel"
                );

                botao.disabled = true;

            }


            // ------------------------------------------
            // DATA SELECIONADA
            // ------------------------------------------

            if (
                dataSelecionada &&
                dataDia.getTime() ===
                dataSelecionada.getTime()
            ) {

                botao.classList.add(
                    "selecionado"
                );

            }


            // ------------------------------------------
            // CLIQUE
            // ------------------------------------------

            if (!botao.disabled) {

                botao.addEventListener(
                    "click",
                    function () {

                        selecionarData(
                            dataDia
                        );

                    }
                );

            }


            calendario.appendChild(botao);

        }

    }


    // ======================================================
    // SELECIONAR DATA
    // ======================================================

    function selecionarData(data) {

        dataSelecionada = data;


        const dia =
            String(
                data.getDate()
            ).padStart(2, "0");


        const mes =
            String(
                data.getMonth() + 1
            ).padStart(2, "0");


        const ano =
            data.getFullYear();


        const texto =
            `${dia}/${mes}/${ano}`;


        dataEscolhida.textContent =
            `Data selecionada: ${texto}`;


        criarCalendario();

    }


    // ======================================================
    // MÊS ANTERIOR
    // ======================================================

    mesAnterior.addEventListener(
        "click",
        function () {

            const hoje =
                new Date();


            const mesAtual =
                hoje.getMonth();

            const anoAtual =
                hoje.getFullYear();


            // Impede voltar para meses anteriores

            if (
                dataAtual.getFullYear() >
                anoAtual ||
                (
                    dataAtual.getFullYear() ===
                    anoAtual &&
                    dataAtual.getMonth() >
                    mesAtual
                )
            ) {

                dataAtual.setMonth(
                    dataAtual.getMonth() - 1
                );

                criarCalendario();

            }

        }
    );


    // ======================================================
    // MÊS PRÓXIMO
    // ======================================================

    mesProximo.addEventListener(
        "click",
        function () {

            dataAtual.setMonth(
                dataAtual.getMonth() + 1
            );

            criarCalendario();

        }
    );


    // ======================================================
    // HORÁRIOS
    // ======================================================

    const horarios =
        document.querySelectorAll(
            ".horario"
        );


    horarios.forEach(function (horario) {

        horario.addEventListener(
            "click",
            function () {

                horarios.forEach(
                    function (item) {

                        item.classList.remove(
                            "selecionado"
                        );

                    }
                );


                horario.classList.add(
                    "selecionado"
                );


                horarioSelecionado =
                    horario.textContent.trim();


                horarioEscolhido.textContent =
                    `Horário selecionado: ${horarioSelecionado}`;

            }
        );

    });


    // ======================================================
    // ATUALIZAR CONFIRMAÇÃO
    // ======================================================

    function atualizarConfirmacao() {

        const profissionalSelecionado =
            document.querySelector(
                'input[name="profissional"]:checked'
            );


        // ----------------------------------------------
        // PROFISSIONAL
        // ----------------------------------------------

        if (profissionalSelecionado) {

            document.getElementById(
                "confirmacaoProfissional"
            ).textContent =
                profissionalSelecionado.value;

        }


        // ----------------------------------------------
        // DATA
        // ----------------------------------------------

        if (dataSelecionada) {

            const dia =
                String(
                    dataSelecionada.getDate()
                ).padStart(2, "0");


            const mes =
                String(
                    dataSelecionada.getMonth() + 1
                ).padStart(2, "0");


            const ano =
                dataSelecionada.getFullYear();


            document.getElementById(
                "confirmacaoData"
            ).textContent =
                `${dia}/${mes}/${ano}`;

        }


        // ----------------------------------------------
        // HORÁRIO
        // ----------------------------------------------

        document.getElementById(
            "confirmacaoHorario"
        ).textContent =
            horarioSelecionado ||
            "Não selecionado";


        // ----------------------------------------------
        // MODALIDADE
        // ----------------------------------------------

        document.getElementById(
            "confirmacaoModalidade"
        ).textContent =
            modalidadeSelecionada;

    }


    // ======================================================
    // ETAPA 1 → ETAPA 2
    // ======================================================

    btnEtapa1.addEventListener(
        "click",
        function () {

            const profissional =
                document.querySelector(
                    'input[name="profissional"]:checked'
                );


            if (!profissional) {

                alert(
                    "Selecione um profissional para continuar."
                );

                return;

            }


            mostrarEtapa(2);

        }
    );


    // ======================================================
    // ETAPA 2 → ETAPA 3
    // ======================================================

    btnEtapa2.addEventListener(
        "click",
        function () {

            if (!dataSelecionada) {

                alert(
                    "Selecione uma data para continuar."
                );

                return;

            }


            if (!horarioSelecionado) {

                alert(
                    "Selecione um horário para continuar."
                );

                return;

            }


            atualizarConfirmacao();

            mostrarEtapa(3);

        }
    );


    // ======================================================
    // ETAPA 3 → ETAPA 4
    // ======================================================

    btnEtapa3.addEventListener(
        "click",
        function () {

            atualizarConfirmacao();

            mostrarEtapa(4);

        }
    );


    // ======================================================
    // ETAPA 4 → ETAPA 5
    // ======================================================

    btnPagamento.addEventListener(
        "click",
        function () {

            const profissional =
                document.querySelector(
                    'input[name="profissional"]:checked'
                );


            // ------------------------------------------
            // GERA CÓDIGO DO AGENDAMENTO
            // ------------------------------------------

            const numero =
                Math.floor(
                    100000 +
                    Math.random() * 900000
                );


            const codigo =
                `ANC-${numero}`;


            document.getElementById(
                "codigoAgendamento"
            ).textContent =
                codigo;


            // ------------------------------------------
            // PROFISSIONAL
            // ------------------------------------------

            document.getElementById(
                "finalProfissional"
            ).textContent =
                profissional
                    ? profissional.value
                    : "-";


            // ------------------------------------------
            // DATA
            // ------------------------------------------

            if (dataSelecionada) {

                const dia =
                    String(
                        dataSelecionada.getDate()
                    ).padStart(2, "0");


                const mes =
                    String(
                        dataSelecionada.getMonth() + 1
                    ).padStart(2, "0");


                const ano =
                    dataSelecionada.getFullYear();


                document.getElementById(
                    "finalData"
                ).textContent =
                    `${dia}/${mes}/${ano}`;

            }


            // ------------------------------------------
            // HORÁRIO
            // ------------------------------------------

            document.getElementById(
                "finalHorario"
            ).textContent =
                horarioSelecionado || "-";


            // ------------------------------------------
            // MODALIDADE
            // ------------------------------------------

            document.getElementById(
                "finalModalidade"
            ).textContent =
                modalidadeSelecionada;


            // ------------------------------------------
            // MOSTRA SUCESSO
            // ------------------------------------------

            mostrarEtapa(5);

        }
    );


    // ======================================================
    // VOLTAR ETAPA 2 → ETAPA 1
    // ======================================================

    btnVoltar2.addEventListener(
        "click",
        function () {

            mostrarEtapa(1);

        }
    );


    // ======================================================
    // VOLTAR ETAPA 3 → ETAPA 2
    // ======================================================

    btnVoltar3.addEventListener(
        "click",
        function () {

            mostrarEtapa(2);

        }
    );


    // ======================================================
    // VOLTAR ETAPA 4 → ETAPA 3
    // ======================================================

    btnVoltar4.addEventListener(
        "click",
        function () {

            mostrarEtapa(3);

        }
    );


    // ======================================================
    // INICIALIZAÇÃO
    // ======================================================

    criarCalendario();

    mostrarEtapa(1);

});