/* =========================================================
   ANCHOR - PAINEL DO PROFISSIONAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const $ = function (id) {
        return document.getElementById(id);
    };

    const CHAVE = "anchorPainelProfissional";


    /* =====================================================
       ESTADO (salvo no navegador)
    ===================================================== */

    const HORAS = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

    const DIAS = [
        { id: 1, nome: "Segunda" },
        { id: 2, nome: "Terça" },
        { id: 3, nome: "Quarta" },
        { id: 4, nome: "Quinta" },
        { id: 5, nome: "Sexta" },
        { id: 6, nome: "Sábado" }
    ];

    let estado = {
        status: {},
        notas: {},
        disp: null,
        config: { duracao: "50", valor: 80 },
        aceitando: true
    };

    try {
        const salvo = JSON.parse(localStorage.getItem(CHAVE));
        if (salvo) {
            estado = Object.assign(estado, salvo);
        }
    } catch (erro) {}

    if (!estado.disp) {

        estado.disp = {};

        DIAS.forEach(function (dia) {
            estado.disp[dia.id] = dia.id === 6
                ? []
                : ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
        });

    }

    function salvar() {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(estado));
        } catch (erro) {}
    }


    /* =====================================================
       DADOS DE DEMONSTRAÇÃO
       (dia: 0 = hoje, 1 = amanhã, ...)
    ===================================================== */

    const pacientes = [
        { id: 1, nome: "Lucas Almeida",    idade: 24, tel: "(11) 91234-5678", desde: "mar/2026", sessoes: 12, status: "ativo", motivo: "Ansiedade" },
        { id: 2, nome: "Marina Costa",     idade: 29, tel: "(11) 92345-6789", desde: "jan/2026", sessoes: 18, status: "ativo", motivo: "Estresse no trabalho" },
        { id: 3, nome: "Rafael Souza",     idade: 21, tel: "(11) 93456-7890", desde: "mai/2026", sessoes: 7,  status: "ativo", motivo: "Autoestima" },
        { id: 4, nome: "Camila Duarte",    idade: 27, tel: "(11) 94567-8901", desde: "abr/2026", sessoes: 9,  status: "ativo", motivo: "Luto" },
        { id: 5, nome: "Henrique Rocha",   idade: 32, tel: "(11) 95678-9012", desde: "fev/2026", sessoes: 15, status: "ativo", motivo: "Relacionamentos" },
        { id: 6, nome: "Ana Clara Ribeiro", idade: 22, tel: "(11) 96789-0123", desde: "set/2026", sessoes: 0, status: "novo",  motivo: "Apoio emocional" },
        { id: 7, nome: "João Pedro Nunes", idade: 26, tel: "(11) 97890-1234", desde: "jun/2026", sessoes: 5,  status: "ativo", motivo: "Rotina e sono" },
        { id: 8, nome: "Beatriz Lima",     idade: 23, tel: "(11) 98901-2345", desde: "set/2026", sessoes: 0,  status: "novo",  motivo: "Ansiedade social" }
    ];

    const consultas = [
        { id: 1,  paciente: 1, dia: 0, hora: "09:00", modalidade: "Online",      tipo: "Retorno",          status: "concluida" },
        { id: 2,  paciente: 2, dia: 0, hora: "10:30", modalidade: "Online",      tipo: "Retorno",          status: "confirmada" },
        { id: 3,  paciente: 3, dia: 0, hora: "14:00", modalidade: "Presencial",  tipo: "Retorno",          status: "confirmada" },
        { id: 4,  paciente: 4, dia: 0, hora: "16:00", modalidade: "Online",      tipo: "Retorno",          status: "confirmada" },
        { id: 5,  paciente: 5, dia: 1, hora: "08:00", modalidade: "Online",      tipo: "Retorno",          status: "confirmada" },
        { id: 6,  paciente: 6, dia: 1, hora: "11:00", modalidade: "Online",      tipo: "Primeira consulta", status: "pendente" },
        { id: 7,  paciente: 2, dia: 2, hora: "10:30", modalidade: "Online",      tipo: "Retorno",          status: "confirmada" },
        { id: 8,  paciente: 7, dia: 2, hora: "15:00", modalidade: "Presencial",  tipo: "Retorno",          status: "confirmada" },
        { id: 9,  paciente: 8, dia: 3, hora: "09:00", modalidade: "Online",      tipo: "Primeira consulta", status: "pendente" },
        { id: 10, paciente: 1, dia: 3, hora: "14:00", modalidade: "Online",      tipo: "Retorno",          status: "confirmada" },
        { id: 11, paciente: 3, dia: 4, hora: "14:00", modalidade: "Presencial",  tipo: "Retorno",          status: "confirmada" },
        { id: 12, paciente: 4, dia: 5, hora: "10:00", modalidade: "Online",      tipo: "Retorno",          status: "confirmada" }
    ];


    /* =====================================================
       AUXILIARES
    ===================================================== */

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const diasCurtos = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    function dataDoDia(deslocamento) {
        const d = new Date(hoje);
        d.setDate(d.getDate() + deslocamento);
        return d;
    }

    function formatarData(d) {
        return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    }

    function rotuloDia(deslocamento) {

        if (deslocamento === 0) return "Hoje";
        if (deslocamento === 1) return "Amanhã";

        const d = dataDoDia(deslocamento);

        return diasCurtos[d.getDay()] + " " + formatarData(d);

    }

    function dataHora(consulta) {
        const d = dataDoDia(consulta.dia);
        const partes = consulta.hora.split(":");
        d.setHours(Number(partes[0]), Number(partes[1]), 0, 0);
        return d;
    }

    function iniciais(nome) {

        const partes = nome.trim().split(/\s+/);

        if (partes.length === 1) {
            return partes[0].charAt(0).toUpperCase();
        }

        return (partes[0].charAt(0) + partes[partes.length - 1].charAt(0)).toUpperCase();

    }

    function statusAtual(consulta) {
        return estado.status[consulta.id] || consulta.status;
    }

    function pacientePorId(id) {
        return pacientes.find(function (p) { return p.id === id; });
    }

    function ordenar(lista) {
        return lista.slice().sort(function (a, b) {
            return dataHora(a) - dataHora(b);
        });
    }

    function ativas(lista) {
        return lista.filter(function (c) {
            return statusAtual(c) !== "cancelada";
        });
    }

    let toastTempo;

    function mostrarAviso(mensagem) {

        const toast = $("toast");

        toast.textContent = mensagem;
        toast.classList.add("visivel");

        clearTimeout(toastTempo);

        toastTempo = setTimeout(function () {
            toast.classList.remove("visivel");
        }, 2600);

    }


    /* =====================================================
       TOPO
    ===================================================== */

    let nome = "";

    try {
        nome = localStorage.getItem("usuarioNome") || localStorage.getItem("nomeUsuario") || "";
    } catch (erro) {}

    if (!nome) {
        nome = "Gabrielly Estevan Rosa";
    }

    const hora = new Date().getHours();
    const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

    $("saudacaoPro").textContent = saudacao + "!";
    $("nomePro").textContent = nome;
    $("avatarPro").textContent = iniciais(nome);

    const dataExtenso = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    $("dataHoje").textContent = dataExtenso.charAt(0).toUpperCase() + dataExtenso.slice(1);

    $("switchNovos").checked = estado.aceitando;

    function atualizarSwitch() {
        $("textoSwitch").textContent = $("switchNovos").checked
            ? "Aceitando novos pacientes"
            : "Agenda fechada para novos pacientes";
    }

    atualizarSwitch();

    $("switchNovos").addEventListener("change", function () {

        estado.aceitando = this.checked;

        salvar();

        atualizarSwitch();

        mostrarAviso(this.checked
            ? "Você está aceitando novos pacientes."
            : "Agenda fechada para novos pacientes.");

    });


    /* =====================================================
       HTML DAS CONSULTAS
    ===================================================== */

    function chipStatus(status) {

        const mapa = {
            confirmada: ["Confirmada", "verde"],
            pendente:   ["Aguardando", "laranja"],
            concluida:  ["Concluída", "azul"],
            cancelada:  ["Cancelada", "vermelho"]
        };

        return '<span class="chip ' + mapa[status][1] + '">' + mapa[status][0] + '</span>';

    }

    function htmlConsulta(consulta, mostrarDia) {

        const paciente = pacientePorId(consulta.paciente);
        const status = statusAtual(consulta);

        let acoes = "";

        if (status === "pendente") {

            acoes =
                '<button type="button" class="btn-mini ok" data-acao="aceitar" data-id="' + consulta.id + '">Aceitar</button>' +
                '<button type="button" class="btn-mini nao" data-acao="recusar" data-id="' + consulta.id + '">Recusar</button>';

        } else if (status === "confirmada") {

            acoes =
                '<button type="button" class="btn-mini ok" data-acao="concluir" data-id="' + consulta.id + '">Concluir</button>' +
                '<button type="button" class="btn-mini nao" data-acao="cancelar" data-id="' + consulta.id + '">Cancelar</button>';

        }

        const icone = consulta.modalidade === "Online" ? "fa-video" : "fa-location-dot";

        return (
            '<div class="consulta ' + status + '">' +
                '<div class="consulta-hora">' +
                    '<strong>' + consulta.hora + '</strong>' +
                    (mostrarDia ? '<small>' + rotuloDia(consulta.dia) + '</small>' : '') +
                '</div>' +
                '<div class="consulta-info" data-ficha="' + paciente.id + '">' +
                    '<strong>' + paciente.nome + '</strong>' +
                    '<small><i class="fa-solid ' + icone + '"></i>' + consulta.modalidade + ' · ' + consulta.tipo + '</small>' +
                '</div>' +
                chipStatus(status) +
                '<div class="consulta-acoes">' + acoes + '</div>' +
            '</div>'
        );

    }

    function htmlVazio(icone, texto) {
        return '<div class="vazio"><i class="fa-regular ' + icone + '"></i>' + texto + '</div>';
    }


    /* =====================================================
       ABA: PAINEL
    ===================================================== */

    function renderizarVisao() {

        // ----- agenda de hoje -----
        const deHoje = ordenar(consultas.filter(function (c) { return c.dia === 0; }));

        $("listaHoje").innerHTML = deHoje.length
            ? deHoje.map(function (c) { return htmlConsulta(c, false); }).join("")
            : htmlVazio("fa-calendar", "Nenhuma consulta para hoje.");

        // ----- solicitações pendentes -----
        const pendentes = ordenar(consultas.filter(function (c) {
            return statusAtual(c) === "pendente";
        }));

        $("contPendentes").textContent = pendentes.length;

        $("listaPendentes").innerHTML = pendentes.length
            ? pendentes.map(function (c) { return htmlConsulta(c, true); }).join("")
            : htmlVazio("fa-circle-check", "Nenhuma solicitação aguardando resposta.");

        // ----- próxima consulta -----
        const agora = new Date();

        const proxima = ordenar(consultas).find(function (c) {
            return statusAtual(c) === "confirmada" && dataHora(c) >= agora;
        });

        if (proxima) {

            const p = pacientePorId(proxima.paciente);
            const icone = proxima.modalidade === "Online" ? "fa-video" : "fa-location-dot";

            $("cardProxima").innerHTML =
                '<span class="rotulo">PRÓXIMA CONSULTA</span>' +
                '<h2>' + p.nome + '</h2>' +
                '<div class="proxima-linha"><i class="fa-regular fa-clock"></i>' + rotuloDia(proxima.dia) + ' às ' + proxima.hora + '</div>' +
                '<div class="proxima-linha"><i class="fa-solid ' + icone + '"></i>' + proxima.modalidade + ' · ' + proxima.tipo + '</div>' +
                '<div class="proxima-linha"><i class="fa-regular fa-heart"></i>Motivo: ' + p.motivo + '</div>' +
                '<div class="proxima-acoes">' +
                    '<a href="conversas.html" class="btn-claro"><i class="fa-solid fa-comments"></i>Abrir conversa</a>' +
                    '<button type="button" class="btn-claro fantasma" data-ficha="' + p.id + '"><i class="fa-regular fa-file-lines"></i>Ver ficha</button>' +
                '</div>';

        } else {

            $("cardProxima").innerHTML =
                '<span class="rotulo">PRÓXIMA CONSULTA</span>' +
                '<h2>Sem consultas agendadas</h2>' +
                '<div class="proxima-linha">Você não tem consultas confirmadas pela frente.</div>';

        }

        // ----- gráfico dos 7 dias -----
        const contagens = [];

        for (let i = 0; i < 7; i++) {
            contagens.push(ativas(consultas.filter(function (c) { return c.dia === i; })).length);
        }

        const maior = Math.max(1, Math.max.apply(null, contagens));

        $("barras").innerHTML = contagens.map(function (total, i) {

            const d = dataDoDia(i);

            return (
                '<div class="barra ' + (i === 0 ? "hoje" : "") + '">' +
                    '<span class="barra-valor">' + total + '</span>' +
                    '<div class="barra-preenchimento" style="height:' + Math.round((total / maior) * 100) + '%"></div>' +
                    '<span class="barra-rotulo">' + (i === 0 ? "Hoje" : diasCurtos[d.getDay()]) + '</span>' +
                '</div>'
            );

        }).join("");

        // ----- números do topo -----
        $("statHoje").textContent = ativas(deHoje).length;
        $("statPacientes").textContent = pacientes.length;
        $("statPendentes").textContent = pendentes.length;
        $("statSemana").textContent = contagens.reduce(function (a, b) { return a + b; }, 0);

    }


    /* =====================================================
       ABA: AGENDA
    ===================================================== */

    let diaSelecionado = 0;

    function renderizarAgenda() {

        let chips = "";

        for (let i = 0; i < 7; i++) {

            const d = dataDoDia(i);
            const total = ativas(consultas.filter(function (c) { return c.dia === i; })).length;

            chips +=
                '<button type="button" class="dia-chip ' + (i === diaSelecionado ? "ativo" : "") + '" data-dia="' + i + '">' +
                    '<span>' + (i === 0 ? "Hoje" : diasCurtos[d.getDay()]) + '</span>' +
                    '<strong>' + String(d.getDate()).padStart(2, "0") + '</strong>' +
                    '<small>' + total + (total === 1 ? " consulta" : " consultas") + '</small>' +
                '</button>';

        }

        $("diasChips").innerHTML = chips;

        const doDia = ordenar(consultas.filter(function (c) { return c.dia === diaSelecionado; }));

        $("listaAgenda").innerHTML = doDia.length
            ? doDia.map(function (c) { return htmlConsulta(c, false); }).join("")
            : htmlVazio("fa-calendar", "Nenhuma consulta neste dia.");

    }

    $("diasChips").addEventListener("click", function (evento) {

        const chip = evento.target.closest("[data-dia]");

        if (!chip) return;

        diaSelecionado = Number(chip.dataset.dia);

        renderizarAgenda();

    });


    /* =====================================================
       ABA: PACIENTES
    ===================================================== */

    function proximaConsultaDe(pacienteId) {

        const agora = new Date();

        return ordenar(consultas).find(function (c) {
            const st = statusAtual(c);
            return c.paciente === pacienteId &&
                (st === "confirmada" || st === "pendente") &&
                dataHora(c) >= agora;
        });

    }

    function textoProxima(pacienteId) {

        const c = proximaConsultaDe(pacienteId);

        return c ? rotuloDia(c.dia) + " · " + c.hora : "Sem consulta marcada";

    }

    function renderizarPacientes() {

        const busca = $("buscaPac").value.trim().toLowerCase();
        const filtro = $("filtroPac").value;

        const lista = pacientes.filter(function (p) {
            const bateBusca = p.nome.toLowerCase().indexOf(busca) !== -1;
            const bateFiltro = filtro === "todos" || p.status === filtro;
            return bateBusca && bateFiltro;
        });

        $("listaPacientes").innerHTML = lista.length
            ? lista.map(function (p) {

                return (
                    '<div class="paciente" data-ficha="' + p.id + '">' +
                        '<div class="avatar-peq">' + iniciais(p.nome) + '</div>' +
                        '<div class="paciente-info">' +
                            '<strong>' + p.nome + '</strong>' +
                            '<small>' + p.idade + ' anos · ' + p.motivo + '</small>' +
                        '</div>' +
                        '<div class="paciente-meta"><strong>' + p.sessoes + '</strong>sessões</div>' +
                        '<div class="paciente-meta"><strong>' + textoProxima(p.id) + '</strong>próxima consulta</div>' +
                        (p.status === "novo"
                            ? '<span class="chip laranja">Novo</span>'
                            : '<span class="chip verde">Ativo</span>') +
                    '</div>'
                );

            }).join("")
            : htmlVazio("fa-face-meh", "Nenhum paciente encontrado.");

    }

    $("buscaPac").addEventListener("input", renderizarPacientes);
    $("filtroPac").addEventListener("change", renderizarPacientes);


    /* =====================================================
       FICHA DO PACIENTE (MODAL)
    ===================================================== */

    let pacienteAberto = null;

    function abrirFicha(id) {

        const p = pacientePorId(id);

        if (!p) return;

        pacienteAberto = id;

        $("mpAvatar").textContent = iniciais(p.nome);
        $("mpNome").textContent = p.nome;
        $("mpSub").textContent = p.idade + " anos · " + p.motivo;
        $("mpTel").textContent = p.tel;
        $("mpDesde").textContent = p.desde;
        $("mpSessoes").textContent = p.sessoes;
        $("mpProxima").textContent = textoProxima(id);
        $("mpNotas").value = estado.notas[id] || "";

        $("modalPaciente").classList.add("aberto");
        $("modalPaciente").setAttribute("aria-hidden", "false");

    }

    function fecharFicha() {

        $("modalPaciente").classList.remove("aberto");
        $("modalPaciente").setAttribute("aria-hidden", "true");

    }

    $("fecharModal").addEventListener("click", fecharFicha);

    $("modalPaciente").addEventListener("click", function (evento) {
        if (evento.target === this) fecharFicha();
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") fecharFicha();
    });

    $("mpSalvar").addEventListener("click", function () {

        estado.notas[pacienteAberto] = $("mpNotas").value;

        salvar();

        mostrarAviso("Anotações salvas.");

    });


    /* =====================================================
       ABA: DISPONIBILIDADE
    ===================================================== */

    function renderizarDisponibilidade() {

        $("gradeDisp").innerHTML = DIAS.map(function (dia) {

            const horas = HORAS.map(function (h) {

                const ativa = estado.disp[dia.id].indexOf(h) !== -1;

                return '<button type="button" class="hora-chip ' + (ativa ? "ativa" : "") +
                    '" data-dia-disp="' + dia.id + '" data-hora="' + h + '">' + h + '</button>';

            }).join("");

            return (
                '<div class="disp-linha">' +
                    '<span class="disp-dia">' + dia.nome + '</span>' +
                    '<div class="horas">' + horas + '</div>' +
                '</div>'
            );

        }).join("");

        $("cfgDuracao").value = estado.config.duracao;
        $("cfgValor").value = estado.config.valor;

    }

    $("gradeDisp").addEventListener("click", function (evento) {

        const botao = evento.target.closest("[data-hora]");

        if (!botao) return;

        const dia = Number(botao.dataset.diaDisp);
        const horaEscolhida = botao.dataset.hora;
        const lista = estado.disp[dia];
        const posicao = lista.indexOf(horaEscolhida);

        if (posicao === -1) {
            lista.push(horaEscolhida);
        } else {
            lista.splice(posicao, 1);
        }

        botao.classList.toggle("ativa");

    });

    $("salvarDisp").addEventListener("click", function () {

        estado.config.duracao = $("cfgDuracao").value;
        estado.config.valor = Number($("cfgValor").value) || 0;

        salvar();

        mostrarAviso("Disponibilidade salva!");

    });


    /* =====================================================
       AÇÕES DAS CONSULTAS
    ===================================================== */

    const acoes = {
        aceitar:  { novo: "confirmada", aviso: "Consulta confirmada." },
        recusar:  { novo: "cancelada",  aviso: "Solicitação recusada.", confirmar: "Recusar esta solicitação?" },
        concluir: { novo: "concluida",  aviso: "Consulta marcada como concluída." },
        cancelar: { novo: "cancelada",  aviso: "Consulta cancelada.", confirmar: "Cancelar esta consulta?" }
    };

    function renderizarTudo() {
        renderizarVisao();
        renderizarAgenda();
        renderizarPacientes();
    }

    document.addEventListener("click", function (evento) {

        // botões de ação
        const botaoAcao = evento.target.closest("[data-acao]");

        if (botaoAcao) {

            const acao = acoes[botaoAcao.dataset.acao];
            const id = Number(botaoAcao.dataset.id);

            if (acao.confirmar && !confirm(acao.confirmar)) {
                return;
            }

            estado.status[id] = acao.novo;

            salvar();

            renderizarTudo();

            mostrarAviso(acao.aviso);

            return;

        }

        // abrir ficha do paciente
        const ficha = evento.target.closest("[data-ficha]");

        if (ficha) {
            abrirFicha(Number(ficha.dataset.ficha));
            return;
        }

        // atalhos para outras abas
        const ir = evento.target.closest("[data-ir]");

        if (ir) {
            mostrarAba(ir.dataset.ir);
        }

    });


    /* =====================================================
       ABAS
    ===================================================== */

    const abasValidas = ["visao", "agenda", "pacientes", "disponibilidade"];

    function mostrarAba(nomeAba) {

        document.querySelectorAll(".aba-conteudo").forEach(function (secao) {
            secao.classList.toggle("ativa", secao.id === "aba-" + nomeAba);
        });

        document.querySelectorAll(".aba").forEach(function (botao) {
            botao.classList.toggle("ativa", botao.dataset.aba === nomeAba);
        });

        history.replaceState(null, "", "#" + nomeAba);

        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    document.querySelectorAll(".aba").forEach(function (botao) {
        botao.addEventListener("click", function () {
            mostrarAba(botao.dataset.aba);
        });
    });


    /* =====================================================
       INICIA
    ===================================================== */

    renderizarTudo();
    renderizarDisponibilidade();

    const abaInicial = window.location.hash.replace("#", "");

    if (abasValidas.indexOf(abaInicial) !== -1) {
        mostrarAba(abaInicial);
    }

});