// ==========================================================
// ANCHOR - TIPOS DE DENÚNCIA
// ==========================================================


// ==========================================================
// INÍCIO
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {


    // ======================================================
    // ELEMENTOS DA PÁGINA
    // ======================================================

    const catalogo =
        document.getElementById("catalogo-denuncias");

    const conteudo =
        document.getElementById("conteudo-denuncia");

    const cards =
        document.querySelectorAll(".card-denuncia");

    const btnVoltar =
        document.getElementById("btn-voltar");


    // Elementos do conteúdo

    const iconeConteudo =
        document.getElementById("iconeConteudo");

    const categoriaConteudo =
        document.getElementById("categoriaConteudo");

    const tituloConteudo =
        document.getElementById("tituloConteudo");

    const introducaoConteudo =
        document.getElementById("introducaoConteudo");

    const oQueE =
        document.getElementById("oQueE");

    const listaSinais =
        document.getElementById("listaSinais");

    const oQueFazer =
        document.getElementById("oQueFazer");

    const ondeBuscarAjuda =
        document.getElementById("ondeBuscarAjuda");


    // ======================================================
    // CONTEÚDOS DAS DENÚNCIAS
    // ======================================================

    const denuncias = {


        // ==================================================
        // 01 - VIOLÊNCIA DOMÉSTICA
        // ==================================================

        "violencia-domestica": {

            titulo: "Violência Doméstica",

            icone: "fa-house",

            introducao:
                "A violência doméstica pode acontecer dentro de relações familiares ou afetivas e pode assumir diferentes formas.",

            oQueE:
                "É qualquer situação de violência ou abuso que aconteça no contexto doméstico ou familiar. Ela pode envolver violência física, psicológica, sexual, patrimonial ou moral.",

            sinais: [
                "Ameaças, humilhações ou controle excessivo.",
                "Agressões físicas ou intimidações.",
                "Controle de dinheiro, documentos ou outros bens.",
                "Isolamento da vítima de familiares e amigos."
            ],

            oQueFazer:
                "Se você estiver em uma situação de violência, procure um local seguro e busque ajuda de pessoas de confiança ou de serviços especializados. Em situações de emergência, procure os serviços de emergência.",

            ajuda:
                "É possível procurar serviços públicos de atendimento e orientação, além de canais especializados de apoio."
        },


        // ==================================================
        // 02 - XENOFOBIA
        // ==================================================

        "xenofobia": {

            titulo: "Xenofobia",

            icone: "fa-earth-americas",

            introducao:
                "A xenofobia envolve preconceito, discriminação ou violência contra uma pessoa por sua origem, nacionalidade ou pertencimento cultural.",

            oQueE:
                "É uma forma de preconceito direcionada a pessoas estrangeiras ou percebidas como pertencentes a outro grupo nacional ou cultural.",

            sinais: [
                "Ofensas relacionadas à nacionalidade ou origem.",
                "Exclusão ou tratamento desigual.",
                "Ameaças ou agressões motivadas pela origem da pessoa.",
                "Propagação de ideias que inferiorizam determinados povos."
            ],

            oQueFazer:
                "Procure preservar registros da situação, quando for seguro fazer isso, e busque orientação para saber quais canais podem receber a denúncia.",

            ajuda:
                "Casos de discriminação podem ser encaminhados aos órgãos públicos e autoridades responsáveis."
        },


        // ==================================================
        // 03 - NEO NAZISMO
        // ==================================================

        "neo-nazismo": {

            titulo: "Neo Nazismo",

            icone: "fa-skull-crossbones",

            introducao:
                "O neonazismo está relacionado à defesa ou divulgação de ideias inspiradas no nazismo e à propagação de discursos de ódio.",

            oQueE:
                "É um movimento ou conjunto de manifestações que busca resgatar ou divulgar ideias associadas ao nazismo, incluindo ideologias de superioridade racial e perseguição de grupos.",

            sinais: [
                "Divulgação de símbolos ou conteúdos associados ao nazismo.",
                "Propagação de ideias de superioridade racial.",
                "Ameaças ou incentivo à violência contra determinados grupos.",
                "Conteúdos que defendem perseguição ou exclusão de pessoas."
            ],

            oQueFazer:
                "Evite compartilhar ou ampliar conteúdos de ódio. Em situações que possam representar crime ou ameaça, procure orientação das autoridades competentes.",

            ajuda:
                "Situações envolvendo ameaças, violência ou crimes de ódio podem ser encaminhadas às autoridades responsáveis."
        },


        // ==================================================
        // 04 - HOMOFOBIA
        // ==================================================

        "homofobia": {

            titulo: "Homofobia",

            icone: "fa-transgender",

            introducao:
                "A homofobia envolve preconceito, discriminação ou violência contra pessoas por sua orientação sexual.",

            oQueE:
                "É qualquer forma de preconceito, discriminação, ameaça ou violência direcionada a uma pessoa por sua orientação sexual.",

            sinais: [
                "Ofensas ou insultos relacionados à orientação sexual.",
                "Exclusão ou tratamento desigual.",
                "Ameaças ou agressões.",
                "Perseguição ou humilhação."
            ],

            oQueFazer:
                "Busque um ambiente seguro e procure pessoas de confiança ou serviços de apoio. Se houver risco imediato, procure ajuda de emergência.",

            ajuda:
                "Casos de discriminação e violência podem ser comunicados às autoridades e aos serviços públicos de atendimento."
        },


        // ==================================================
        // 05 - PORNOGRAFIA INFANTIL
        // ==================================================

        "pornografia-infantil": {

            titulo: "Pornografia Infantil",

            icone: "fa-child",

            introducao:
                "Conteúdos sexuais envolvendo crianças ou adolescentes são uma forma grave de violência e exploração.",

            oQueE:
                "Envolve a produção, divulgação, armazenamento ou compartilhamento de material sexual envolvendo crianças ou adolescentes.",

            sinais: [
                "Recebimento de conteúdos envolvendo crianças ou adolescentes.",
                "Pedidos para produzir ou enviar imagens íntimas.",
                "Compartilhamento de materiais desse tipo.",
                "Tentativas de contato de adultos com crianças ou adolescentes para exploração."
            ],

            oQueFazer:
                "Não compartilhe, publique ou encaminhe esse tipo de conteúdo. Procure orientação e utilize canais oficiais de denúncia.",

            ajuda:
                "Situações envolvendo crianças e adolescentes devem ser comunicadas aos canais oficiais de proteção e às autoridades competentes."
        },


        // ==================================================
        // 06 - INTOLERÂNCIA RELIGIOSA
        // ==================================================

        "intolerancia-religiosa": {

            titulo: "Intolerância Religiosa",

            icone: "fa-place-of-worship",

            introducao:
                "A intolerância religiosa acontece quando alguém é discriminado, ofendido ou atacado por sua religião ou crença.",

            oQueE:
                "É uma forma de preconceito ou discriminação direcionada à religião, crença ou prática religiosa de uma pessoa ou grupo.",

            sinais: [
                "Ofensas relacionadas à religião.",
                "Desrespeito ou perseguição por causa da crença.",
                "Impedimento injustificado de práticas religiosas.",
                "Ameaças ou agressões motivadas pela religião."
            ],

            oQueFazer:
                "Procure registrar a situação quando for seguro e busque orientação sobre os canais disponíveis para denúncia.",

            ajuda:
                "Casos de discriminação religiosa podem ser encaminhados aos órgãos públicos e autoridades responsáveis."
        },


        // ==================================================
        // 07 - MAUS-TRATOS AOS ANIMAIS
        // ==================================================

        "maus-tratos-animais": {

            titulo: "Maus-Tratos aos Animais",

            icone: "fa-paw",

            introducao:
                "Animais também precisam de proteção. Situações de abandono, violência ou negligência podem configurar maus-tratos.",

            oQueE:
                "São ações ou omissões que causem sofrimento, ferimentos ou condições inadequadas de vida aos animais.",

            sinais: [
                "Abandono de animais.",
                "Falta de alimentação, água ou cuidados básicos.",
                "Agressões ou violência.",
                "Condições de vida inadequadas."
            ],

            oQueFazer:
                "Quando possível, registre informações sobre a situação sem colocar você ou o animal em risco e procure os órgãos responsáveis.",

            ajuda:
                "Casos de maus-tratos podem ser comunicados às autoridades e aos serviços municipais responsáveis pela proteção animal."
        },


        // ==================================================
        // 08 - TRÁFICO HUMANO
        // ==================================================

        "trafico-humano": {

            titulo: "Tráfico Humano",

            icone: "fa-person-walking",

            introducao:
                "O tráfico humano envolve situações de exploração e violação dos direitos de pessoas.",

            oQueE:
                "Envolve o recrutamento, transporte, transferência ou acolhimento de pessoas com finalidade de exploração, utilizando diferentes formas de coerção ou abuso.",

            sinais: [
                "Promessas de trabalho ou oportunidades que parecem enganosas.",
                "Controle de documentos ou liberdade de locomoção.",
                "Ameaças ou coerção.",
                "Situações de exploração."
            ],

            oQueFazer:
                "Se houver suspeita ou risco, procure ajuda de forma segura e evite confrontar diretamente possíveis responsáveis.",

            ajuda:
                "Procure canais oficiais de denúncia e serviços de proteção às vítimas."
        },


        // ==================================================
        // 09 - ASSÉDIO SEXUAL
        // ==================================================

        "assedio-sexual": {

            titulo: "Assédio Sexual",

            icone: "fa-hand",

            introducao:
                "O assédio sexual envolve comportamentos de natureza sexual que causam constrangimento ou são realizados sem consentimento.",

            oQueE:
                "Pode envolver abordagens, comentários, propostas ou comportamentos de natureza sexual que causem constrangimento, especialmente em situações de trabalho ou relações de poder.",

            sinais: [
                "Comentários ou abordagens de natureza sexual indesejadas.",
                "Pressão para aceitar comportamentos ou propostas.",
                "Constrangimentos relacionados à sexualidade.",
                "Uso de posição de autoridade para obter vantagens de natureza sexual."
            ],

            oQueFazer:
                "Procure um ambiente seguro e, quando possível, guarde informações que possam ajudar a documentar o ocorrido.",

            ajuda:
                "Em situações de trabalho, também podem existir canais internos de denúncia, além dos órgãos públicos competentes."
        },


        // ==================================================
        // 10 - ABUSO INFANTIL
        // ==================================================

        "abuso-infantil": {

            titulo: "Abuso Infantil",

            icone: "fa-person-circle-exclamation",

            introducao:
                "Crianças e adolescentes têm direito à proteção contra qualquer forma de violência, abuso e exploração.",

            oQueE:
                "Envolve situações de violência ou exploração praticadas contra crianças ou adolescentes, podendo ocorrer em diferentes ambientes.",

            sinais: [
                "Mudanças repentinas de comportamento.",
                "Medo intenso de determinadas pessoas ou lugares.",
                "Relatos de situações inadequadas.",
                "Sinais de violência ou negligência."
            ],

            oQueFazer:
                "Leve relatos da criança ou adolescente a sério e procure ajuda de adultos responsáveis e serviços de proteção.",

            ajuda:
                "Conselho Tutelar, serviços públicos de proteção e autoridades competentes podem receber denúncias e orientar sobre os próximos passos."
        },


        // ==================================================
        // 11 - MAUS-TRATOS AOS IDOSOS
        // ==================================================

        "maus-tratos-idosos": {

            titulo: "Maus-Tratos aos Idosos",

            icone: "fa-people-group",

            introducao:
                "Pessoas idosas têm direito a viver com respeito, segurança e dignidade.",

            oQueE:
                "São situações de violência, negligência, abandono ou exploração que prejudiquem uma pessoa idosa.",

            sinais: [
                "Abandono ou falta de cuidados necessários.",
                "Agressões físicas ou psicológicas.",
                "Uso indevido de dinheiro ou bens.",
                "Isolamento ou negligência."
            ],

            oQueFazer:
                "Procure garantir a segurança da pessoa idosa e busque orientação junto aos serviços de proteção.",

            ajuda:
                "Casos podem ser comunicados aos órgãos públicos, serviços de assistência e autoridades competentes."
        },


        // ==================================================
        // 12 - CRIMES VIRTUAIS
        // ==================================================

        "crimes-virtuais": {

            titulo: "Crimes Virtuais",

            icone: "fa-laptop",

            introducao:
                "A internet também pode ser utilizada para golpes, ameaças, invasões e outras práticas criminosas.",

            oQueE:
                "São crimes cometidos utilizando computadores, celulares, redes sociais, aplicativos ou outros recursos digitais.",

            sinais: [
                "Mensagens suspeitas solicitando dinheiro ou dados.",
                "Tentativas de invasão de contas.",
                "Ameaças ou perseguição pela internet.",
                "Perfis falsos utilizados para aplicar golpes."
            ],

            oQueFazer:
                "Evite fornecer dados pessoais ou financeiros, preserve evidências e procure os canais adequados para denunciar.",

            ajuda:
                "Casos podem ser comunicados às plataformas envolvidas e às autoridades competentes."
        },


        // ==================================================
        // 13 - ABANDONO DE INCAPAZ
        // ==================================================

        "abandono-de-incapaz": {

            titulo: "Abandono de Incapaz",

            icone: "fa-person-circle-question",

            introducao:
                "Pessoas que dependem de cuidados e proteção não devem ser deixadas em situações de risco ou abandono.",

            oQueE:
                "Envolve situações em que uma pessoa responsável deixa de oferecer os cuidados necessários a alguém que depende de proteção.",

            sinais: [
                "Falta de cuidados básicos.",
                "Pessoa deixada sozinha em situação de risco.",
                "Ausência de alimentação, higiene ou assistência necessária.",
                "Exposição a perigos sem supervisão adequada."
            ],

            oQueFazer:
                "Se houver risco imediato, procure os serviços de emergência. Em outras situações, procure os órgãos responsáveis pela proteção.",

            ajuda:
                "Serviços de assistência social e autoridades competentes podem orientar e receber denúncias."
        },


        // ==================================================
        // 14 - TRÁFICO DE DROGAS
        // ==================================================

        "trafico-de-drogas": {

            titulo: "Tráfico de Drogas",

            icone: "fa-capsules",

            introducao:
                "O tráfico de drogas envolve atividades relacionadas à comercialização e distribuição ilegal de substâncias proibidas.",

            oQueE:
                "É uma atividade criminosa relacionada à produção, distribuição, venda ou transporte ilegal de drogas.",

            sinais: [
                "Comercialização ilegal de substâncias.",
                "Distribuição ou transporte para venda.",
                "Locais utilizados para atividades criminosas.",
                "Ameaças ou violência associadas à atividade."
            ],

            oQueFazer:
                "Não confronte pessoas envolvidas em atividades criminosas. Procure canais oficiais para comunicar a situação.",

            ajuda:
                "Situações suspeitas podem ser encaminhadas às autoridades responsáveis."
        },


        // ==================================================
        // 15 - RACISMO
        // ==================================================

        "racismo": {

            titulo: "Racismo",

            icone: "fa-handshake",

            introducao:
                "O racismo envolve discriminação ou violência relacionada à raça, cor, etnia ou origem.",

            oQueE:
                "É uma forma de discriminação que atinge pessoas ou grupos por características raciais, étnicas ou relacionadas à origem.",

            sinais: [
                "Ofensas relacionadas à raça ou cor.",
                "Tratamento desigual motivado por preconceito.",
                "Exclusão ou impedimento de direitos.",
                "Ameaças ou violência motivadas por discriminação racial."
            ],

            oQueFazer:
                "Quando for seguro, registre informações sobre o ocorrido e procure orientação sobre os canais adequados para denúncia.",

            ajuda:
                "Casos de racismo podem ser comunicados às autoridades e aos órgãos públicos responsáveis."
        },


        // ==================================================
        // 16 - GOLPES E ESTELIONATO
        // ==================================================

        "golpes-estelionato": {

            titulo: "Golpes e Estelionato",

            icone: "fa-money-bill-wave",

            introducao:
                "Golpes utilizam engano ou manipulação para fazer com que uma pessoa entregue dinheiro, dados ou acesso a contas.",

            oQueE:
                "O estelionato envolve obter vantagem ilícita causando prejuízo a outra pessoa por meio de fraude ou engano.",

            sinais: [
                "Pedidos urgentes de dinheiro.",
                "Links ou mensagens suspeitas.",
                "Promessas de vantagens muito grandes.",
                "Solicitação de senhas ou códigos de segurança."
            ],

            oQueFazer:
                "Não envie dinheiro ou informações antes de verificar a situação. Se já tiver sido vítima, preserve comprovantes e procure orientação.",

            ajuda:
                "Procure sua instituição financeira, a plataforma envolvida e as autoridades competentes, conforme o caso."
        }

    };


    // ======================================================
    // FUNÇÃO PARA MOSTRAR UMA DENÚNCIA
    // ======================================================

    function mostrarDenuncia(tipo) {

        const denuncia = denuncias[tipo];

        // Se o tipo não existir, não faz nada

        if (!denuncia) {
            return;
        }


        // ==============================================
        // PREENCHE OS ELEMENTOS
        // ==============================================

        iconeConteudo.className =
            "fa-solid " + denuncia.icone;

        categoriaConteudo.textContent =
            "TIPO DE DENÚNCIA";

        tituloConteudo.textContent =
            denuncia.titulo;

        introducaoConteudo.textContent =
            denuncia.introducao;

        oQueE.textContent =
            denuncia.oQueE;

        oQueFazer.textContent =
            denuncia.oQueFazer;

        ondeBuscarAjuda.textContent =
            denuncia.ajuda;


        // ==============================================
        // LISTA DE SINAIS
        // ==============================================

        listaSinais.innerHTML = "";

        denuncia.sinais.forEach(function (sinal) {

            const li =
                document.createElement("li");

            li.textContent = sinal;

            listaSinais.appendChild(li);

        });


        // ==============================================
        // TROCA DE SEÇÃO
        // ==============================================

        catalogo.style.display = "none";

        conteudo.style.display = "block";


        // ==============================================
        // ATUALIZA A URL
        // ==============================================

        const novaUrl =
            "tipos-denuncia.html?tipo=" +
            encodeURIComponent(tipo);

        window.history.pushState(
            {},
            "",
            novaUrl
        );


        // ==============================================
        // VOLTA PARA O TOPO
        // ==============================================

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // ======================================================
    // CLIQUE NOS CARDS
    // ======================================================

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const tipo =
                card.dataset.tipo;

            mostrarDenuncia(tipo);

        });

    });


    // ======================================================
    // BOTÃO VOLTAR
    // ======================================================

    if (btnVoltar) {

        btnVoltar.addEventListener(
            "click",
            function () {

                catalogo.style.display = "block";

                conteudo.style.display = "none";


                // Remove o parâmetro da URL

                window.history.pushState(
                    {},
                    "",
                    "tipos-denuncia.html"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ======================================================
    // VERIFICA SE A PÁGINA FOI ABERTA
    // COM UM TIPO NA URL
    // ======================================================

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    const tipoInicial =
        parametros.get("tipo");


    if (tipoInicial && denuncias[tipoInicial]) {

        mostrarDenuncia(tipoInicial);

    }


    // ======================================================
    // CONTROLE DO PERFIL
    // ======================================================

    const usuarioLogado =
        localStorage.getItem("usuarioLogado");

    const entrarBtn =
        document.getElementById("entrar-btn");

    const perfilArea =
        document.getElementById("perfil-area");

    const perfilBtn =
        document.getElementById("perfil-btn");

    const perfilMenu =
        document.getElementById("perfil-menu");

    const btnSair =
        document.getElementById("btn-sair");


    // Mostra perfil quando estiver logado

    if (
        usuarioLogado === "true" &&
        entrarBtn &&
        perfilArea
    ) {

        entrarBtn.style.display = "none";

        perfilArea.style.display = "flex";

    }


    // ======================================================
    // ABRIR MENU DO PERFIL
    // ======================================================

    if (perfilBtn && perfilMenu) {

        perfilBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                perfilMenu.classList.toggle("ativo");

            }
        );


        // Fecha ao clicar fora

        document.addEventListener(
            "click",
            function () {

                perfilMenu.classList.remove("ativo");

            }
        );

    }


    // ======================================================
    // SAIR DA CONTA
    // ======================================================

    if (btnSair) {

        btnSair.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "usuarioLogado"
                );

                window.location.href =
                    "index.html";

            }
        );

    }


});

const parametrosTipo = new URLSearchParams(window.location.search);
const tipoSelecionado = parametrosTipo.get("tipo");

if (tipoSelecionado) {
    const cardTipo = document.querySelector(
        '.card-denuncia[data-tipo="' + tipoSelecionado + '"]'
    );

    if (cardTipo) {
        cardTipo.click();
    }
}