document.addEventListener("DOMContentLoaded", function () {

    const noticias = [

        {
            id: 1,
            categoria: "conscientizacao",
            categoriaNome: "Conscientização",
            data: "27 AGO • 2026",
            titulo:
                "Como identificar sinais de violência e quando buscar ajuda",
            resumo:
                "Entenda como reconhecer diferentes formas de violência, perceber sinais de alerta e saber quando e onde buscar ajuda.",
            imagem:
                "img/noticia-01.png",
            introducao:
                "Reconhecer sinais de violência pode ser importante para proteger a própria pessoa ou alguém próximo.",
            texto: `
                A violência pode aparecer de diferentes formas e nem sempre deixa sinais visíveis.

                Ela pode envolver agressões físicas, violência psicológica, ameaças,
                violência sexual, humilhações, controle e outras situações que prejudicam
                a segurança e o bem-estar da pessoa.

                Alguns sinais podem aparecer por meio de mudanças repentinas de comportamento,
                medo, isolamento, ansiedade, tristeza ou dificuldade para falar sobre
                determinadas situações.

                Ao perceber uma situação de violência, é importante buscar ajuda de pessoas
                de confiança e procurar os serviços de proteção e atendimento disponíveis.

                A informação e o acolhimento podem ajudar a pessoa a entender que não precisa
                enfrentar a situação sozinha.
            `,
            fonte:
                "Instituto Maria da Penha e Ministério da Saúde"
        },

        {
            id: 2,
            categoria: "conscientizacao",
            categoriaNome: "Conscientização",
            data: "25 AGO • 2026",
            titulo:
                "Bullying e cyberbullying: quando a brincadeira deixa de ser brincadeira",
            resumo:
                "Entenda as diferenças entre bullying e cyberbullying, reconheça sinais de alerta e saiba como buscar apoio.",
            imagem:
                "img/noticia-bullying-cyberbullying.png",
            introducao:
                "Nem toda brincadeira é inofensiva. Quando existe repetição, humilhação ou intenção de prejudicar alguém, a situação precisa ser levada a sério.",
            texto: `
                O bullying pode acontecer em ambientes escolares e em outros espaços
                de convivência.

                Ele pode envolver apelidos ofensivos, humilhações, exclusão, ameaças
                ou outras atitudes que causam sofrimento.

                No cyberbullying, situações semelhantes acontecem no ambiente digital,
                podendo envolver redes sociais, mensagens, grupos ou outras plataformas.

                A exposição na internet pode fazer com que uma situação alcance muitas
                pessoas rapidamente.

                Por isso, procurar um adulto de confiança, comunicar a escola e buscar
                apoio pode ser importante.

                Pedir ajuda não significa exagerar uma situação. É uma forma de buscar
                proteção e interromper uma situação de violência.
            `,
            fonte:
                "Brasil Escola e materiais educacionais sobre bullying"
        },

        {
            id: 3,
            categoria: "direitos",
            categoriaNome: "Direitos",
            data: "23 AGO • 2026",
            titulo:
                "Homofobia: reconhecer o preconceito é o primeiro passo para combatê-lo",
            resumo:
                "Entenda como a homofobia pode aparecer no cotidiano e conheça informações sobre proteção contra discriminação.",
            imagem:
                "img/noticia-homofobia.png",
            introducao:
                "A discriminação contra pessoas LGBTQIA+ pode aparecer em diferentes ambientes e precisa ser reconhecida e denunciada.",
            texto: `
                A LGBTQIAfobia pode aparecer por meio de discriminação, ameaças,
                agressões, humilhações e outras formas de violência motivadas pela
                orientação sexual ou identidade de gênero.

                Reconhecer essas situações é importante para que a pessoa afetada
                consiga buscar apoio e para que os casos possam ser comunicados
                aos órgãos responsáveis.

                O respeito à diversidade e à dignidade das pessoas é fundamental
                para uma sociedade mais segura e igualitária.

                Em situações de violação de direitos humanos, existem canais oficiais
                para receber denúncias e encaminhá-las aos órgãos responsáveis.
            `,
            fonte:
                "Ministério dos Direitos Humanos e da Cidadania"
        },

        {
            id: 4,
            categoria: "direitos",
            categoriaNome: "Direitos",
            data: "10 SET • 2026",
            titulo:
                "PF investiga crimes de racismo, homofobia e transfobia praticados pela internet",
            resumo:
                "Operação da Polícia Federal investiga publicações relacionadas à prática de discriminação e preconceito nas redes sociais.",
            imagem:
                "img/noticia-racismo-internet.png",
            introducao:
                "A internet também pode ser utilizada para a prática e disseminação de crimes de ódio.",
            texto: `
                A Polícia Federal realizou uma operação para investigar crimes relacionados
                à apologia ao nazismo, racismo, homofobia e transfobia praticados pela internet.

                A investigação envolveu publicações em redes sociais que, segundo a Polícia
                Federal, promoviam discriminação e preconceito.

                O caso mostra a importância de reconhecer situações de ódio e discriminação
                também no ambiente digital e utilizar os canais adequados para denúncias.
            `,
            fonte:
                "Polícia Federal"
        },

        {
            id: 5,
            categoria: "direitos",
            categoriaNome: "Direitos",
            data: "19 SET • 2026",
            titulo:
                "Ministério da Igualdade Racial se manifesta sobre ataques racistas contra atleta",
            resumo:
                "Órgãos públicos divulgaram manifestação sobre ataques racistas direcionados a um atleta brasileiro.",
            imagem:
                "img/noticia-racismo-esporte.png",
            introducao:
                "Casos de racismo também podem atingir pessoas em ambientes esportivos e públicos.",
            texto: `
                O Ministério da Igualdade Racial divulgou uma manifestação relacionada
                a ataques racistas contra um atleta brasileiro.

                A situação reforça a importância do combate ao racismo e da responsabilização
                diante de manifestações discriminatórias.

                O esporte deve ser um espaço de respeito, convivência e igualdade,
                sem discriminação.
            `,
            fonte:
                "Ministério da Igualdade Racial"
        },

        {
            id: 6,
            categoria: "direitos",
            categoriaNome: "Direitos",
            data: "03 AGO • 2026",
            titulo:
                "Violência psicológica contra pessoas LGBTQIA+: o que é e como agir?",
            resumo:
                "Informações ajudam a reconhecer situações de violência psicológica e conhecer caminhos para buscar apoio.",
            imagem:
                "img/noticia-violencia-psicologica-lgbtqia.png",
            introducao:
                "A violência psicológica também pode afetar pessoas LGBTQIA+ e pode aparecer de diferentes maneiras.",
            texto: `
                A violência psicológica pode envolver ameaças, humilhações,
                intimidações, controle e outras atitudes que prejudicam o bem-estar
                emocional de uma pessoa.

                Reconhecer essas situações é importante para que a pessoa consiga
                procurar apoio e orientação.

                Os canais oficiais de atendimento podem receber denúncias de violações
                de direitos humanos e encaminhar cada situação aos órgãos responsáveis.
            `,
            fonte:
                "Ministério dos Direitos Humanos e da Cidadania"
        },

        {
            id: 7,
            categoria: "digital",
            categoriaNome: "Digital",
            data: "16 SET • 2026",
            titulo:
                "Segurança digital: como proteger crianças e adolescentes no ambiente online",
            resumo:
                "Orientações ajudam famílias e responsáveis a reconhecer riscos e aumentar a segurança no ambiente digital.",
            imagem:
                "img/noticia-07.png",
            introducao:
                "O ambiente digital oferece muitas possibilidades, mas também exige atenção e cuidados.",
            texto: `
                Crianças e adolescentes utilizam cada vez mais a internet para estudar,
                conversar, se divertir e acessar informações.

                Ao mesmo tempo, podem ficar expostos a situações como cyberbullying,
                golpes, contatos inadequados e outras formas de violência digital.

                Conversar sobre segurança, privacidade e comportamento online pode ajudar
                a prevenir situações de risco.

                Em casos de violência ou violação de direitos, é importante procurar
                adultos de confiança e utilizar os canais oficiais de atendimento.
            `,
            fonte:
                "Ministério dos Direitos Humanos e da Cidadania"
        },

        {
            id: 8,
            categoria: "seguranca",
            categoriaNome: "Segurança",
            data: "21 AGO • 2026",
            titulo:
                "Brasil reforça ações de combate à violência contra as mulheres",
            resumo:
                "Medidas e ações públicas buscam fortalecer a prevenção e o enfrentamento da violência contra as mulheres.",
            imagem:
                "img/noticia-08.png",
            introducao:
                "A prevenção da violência contra as mulheres envolve informação, proteção, atendimento e políticas públicas.",
            texto: `
                Órgãos do Governo Federal anunciaram medidas voltadas ao fortalecimento
                das ações de prevenção e enfrentamento da violência contra as mulheres.

                Essas iniciativas envolvem diferentes áreas do poder público e buscam
                ampliar a proteção e o atendimento às mulheres em situação de violência.

                Conhecer os canais de atendimento e saber onde procurar ajuda pode ser
                importante para quem está passando por uma situação de violência ou
                conhece alguém que precisa de apoio.
            `,
            fonte:
                "Ministério da Justiça e Segurança Pública e Ministério das Mulheres"
        },

        {
            id: 9,
            categoria: "educacao",
            categoriaNome: "Educação",
            data: "21 SET • 2026",
            titulo:
                "Inclusão na educação: acessibilidade é fundamental para garantir participação de todos",
            resumo:
                "Inclusão e acessibilidade na educação ajudam a garantir que estudantes com deficiência tenham condições adequadas para participar de avaliações e atividades escolares.",
            imagem:
                "img/noticia-educacao.png",
            introducao:
                "A inclusão na educação depende de acessibilidade, atendimento adequado e condições que permitam a participação dos estudantes.",
            texto: `
                O Dia Nacional de Luta da Pessoa com Deficiência, celebrado em 21 de setembro,
                também chama atenção para a importância da inclusão no ambiente educacional.

                Na educação, recursos de acessibilidade e atendimento especializado podem ser
                disponibilizados em exames e avaliações, de acordo com as regras estabelecidas
                em cada edital.

                Garantir acessibilidade contribui para que estudantes com deficiência possam
                participar das atividades educacionais em condições adequadas.

                A inclusão também envolve combater barreiras e promover o respeito às diferenças
                dentro das escolas e das instituições de ensino.
            `,
            fonte:
                "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep)"
        },

        {
            id: 10,
            categoria: "saude",
            categoriaNome: "Saúde",
            data: "17 SET • 2026",
            titulo:
                "Segurança do paciente: informação também faz parte do cuidado com a saúde",
            resumo:
                "Manter informações de saúde atualizadas, esclarecer dúvidas e participar das decisões pode contribuir para um atendimento mais seguro.",
            imagem:
                "img/noticia-saude.png",
            introducao:
                "Cuidar da saúde também envolve conhecer as próprias informações, esclarecer dúvidas e participar das decisões sobre o tratamento.",
            texto: `
                A segurança do paciente é uma parte importante do cuidado em saúde.

                Manter as informações de saúde atualizadas, esclarecer dúvidas e participar
                das decisões relacionadas ao tratamento são atitudes que podem contribuir
                para um cuidado mais seguro.

                Essas medidas são especialmente importantes durante o acompanhamento de
                doenças crônicas, quando o paciente pode precisar de consultas, exames,
                medicamentos e diferentes profissionais de saúde.

                Buscar informações confiáveis e conversar com os profissionais responsáveis
                pelo atendimento pode ajudar o paciente a compreender melhor seu cuidado.
            `,
            fonte:
                "Ministério da Saúde"
        }
    ];


    const carrossel =
        document.getElementById("carrossel");

    const btnAnterior =
        document.getElementById("btnAnterior");

    const btnProxima =
        document.getElementById("btnProxima");

    const indicadores =
        document.getElementById("indicadores");

    const areaCarrossel =
        document.getElementById("areaCarrossel");

    const categorias =
        document.querySelectorAll(".categoria-btn");

    const materiaCompleta =
        document.getElementById("materiaCompleta");

    const catalogoNoticias =
        document.getElementById("catalogoNoticias");

    const btnVoltar =
        document.getElementById("btnVoltar");

    const conteudoMateria =
        document.getElementById("conteudoMateria");


    let noticiasFiltradas = [...noticias];

    let paginaAtual = 0;

    const noticiasPorPagina = 3;


    function criarCards() {

        if (!carrossel) return;

        carrossel.innerHTML = "";

        noticiasFiltradas.forEach(function (noticia) {

            const card =
                document.createElement("article");

            card.className =
                "card-noticia";

            card.innerHTML = `

                <div class="imagem-noticia">

                    <img
                        src="${noticia.imagem}"
                        alt="${noticia.titulo}"
                    >

                </div>


                <div class="conteudo-noticia">

                    <div class="informacoes-noticia">

                        <span class="categoria-noticia">
                            ${noticia.categoriaNome}
                        </span>

                        <span class="data-noticia">
                            ${noticia.data}
                        </span>

                    </div>


                    <h2>
                        ${noticia.titulo}
                    </h2>


                    <p>
                        ${noticia.resumo}
                    </p>


                    <button
                        class="btn-ler-noticia"
                        data-id="${noticia.id}"
                        type="button"
                    >

                        Ler notícia

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                </div>

            `;

            carrossel.appendChild(card);

        });

        adicionarEventosCards();

        criarIndicadores();

        atualizarCarrossel();

    }


    function adicionarEventosCards() {

        const botoes =
            document.querySelectorAll(
                ".btn-ler-noticia"
            );

        botoes.forEach(function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    abrirMateria(id);

                }
            );

        });

    }


    function atualizarCarrossel() {

        const cards =
            document.querySelectorAll(
                ".card-noticia"
            );

        if (!cards.length) return;

        const totalPaginas =
            Math.ceil(
                noticiasFiltradas.length /
                noticiasPorPagina
            );

        if (paginaAtual < 0) {

            paginaAtual =
                totalPaginas - 1;

        }

        if (paginaAtual >= totalPaginas) {

            paginaAtual = 0;

        }

        cards.forEach(function (card, index) {

            const inicio =
                paginaAtual *
                noticiasPorPagina;

            const fim =
                inicio +
                noticiasPorPagina;

            if (
                index >= inicio &&
                index < fim
            ) {

                card.style.display =
                    "flex";

            } else {

                card.style.display =
                    "none";

            }

        });

        atualizarIndicadores();

    }


    function criarIndicadores() {

        if (!indicadores) return;

        indicadores.innerHTML = "";

        const totalPaginas =
            Math.ceil(
                noticiasFiltradas.length /
                noticiasPorPagina
            );

        for (
            let i = 0;
            i < totalPaginas;
            i++
        ) {

            const indicador =
                document.createElement("button");

            indicador.className =
                "indicador";

            indicador.type =
                "button";

            indicador.dataset.pagina =
                i;

            indicador.addEventListener(
                "click",
                function () {

                    paginaAtual =
                        Number(
                            this.dataset.pagina
                        );

                    atualizarCarrossel();

                }
            );

            indicadores.appendChild(
                indicador
            );

        }

    }


    function atualizarIndicadores() {

        const indicadoresAtuais =
            document.querySelectorAll(
                ".indicador"
            );

        indicadoresAtuais.forEach(
            function (indicador, index) {

                indicador.classList.toggle(
                    "ativo",
                    index === paginaAtual
                );

            }
        );

    }


    if (btnAnterior) {

        btnAnterior.addEventListener(
            "click",
            function () {

                paginaAtual--;

                atualizarCarrossel();

            }
        );

    }


    if (btnProxima) {

        btnProxima.addEventListener(
            "click",
            function () {

                paginaAtual++;

                atualizarCarrossel();

            }
        );

    }


    categorias.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                categorias.forEach(
                    function (item) {

                        item.classList.remove(
                            "ativa"
                        );

                    }
                );

                this.classList.add(
                    "ativa"
                );

                const categoria =
                    this.dataset.categoria;

                if (
                    categoria === "todas"
                ) {

                    noticiasFiltradas =
                        [...noticias];

                } else {

                    noticiasFiltradas =
                        noticias.filter(
                            function (noticia) {

                                return (
                                    noticia.categoria ===
                                    categoria
                                );

                            }
                        );

                }

                paginaAtual = 0;

                criarCards();

            }
        );

    });


    function abrirMateria(id) {

        const noticia =
            noticias.find(
                function (item) {

                    return item.id === id;

                }
            );

        if (!noticia) return;


        /*
         * Esconde o catálogo de notícias
         */

        if (catalogoNoticias) {

            catalogoNoticias.style.display =
                "none";

        }


        /*
         * Esconde os filtros
         */

        const categoriasArea =
            document.getElementById(
                "categorias"
            );

        if (categoriasArea) {

            categoriasArea.style.display =
                "none";

        }


        /*
         * Esconde o carrossel
         */

        if (areaCarrossel) {

            areaCarrossel.style.display =
                "none";

        }


        /*
         * Esconde os indicadores
         */

        if (indicadores) {

            indicadores.style.display =
                "none";

        }


        /*
         * Mostra a área da matéria
         */

        if (materiaCompleta) {

            materiaCompleta.style.display =
                "block";

        }


        /*
         * Coloca TODA a matéria dentro
         * do elemento conteudoMateria
         */

        if (conteudoMateria) {

            conteudoMateria.innerHTML = `

                <div class="materia-cabecalho">

                    <span class="materia-categoria">
                        ${noticia.categoriaNome}
                    </span>

                    <span class="materia-data">
                        ${noticia.data}
                    </span>

                </div>


                <h2 class="materia-titulo">
                    ${noticia.titulo}
                </h2>


                <p class="materia-introducao">
                    ${noticia.introducao}
                </p>


                <p class="materia-resumo">
                    ${noticia.resumo}
                </p>


                <img
                    class="materia-imagem"
                    src="${noticia.imagem}"
                    alt="${noticia.titulo}"
                >


                <div class="texto-materia">

                    ${noticia.texto
                        .trim()
                        .replace(
                            /\n\s*\n/g,
                            "<br><br>"
                        )}

                </div>


                <div class="materia-fonte">

                    <strong>Fonte:</strong>

                    ${noticia.fonte}

                </div>

            `;

        }


        /*
         * Coloca a notícia na URL
         */

        history.pushState(
            {},
            "",
            "noticias.html?noticia=" +
            noticia.id
        );


        /*
         * Volta para o topo da matéria
         */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (btnVoltar) {

        btnVoltar.addEventListener(
            "click",
            function () {

                /*
                 * Mostra novamente o catálogo
                 */

                if (catalogoNoticias) {

                    catalogoNoticias.style.display =
                        "block";

                }


                /*
                 * Mostra novamente os filtros
                 */

                const categoriasArea =
                    document.getElementById(
                        "categorias"
                    );

                if (categoriasArea) {

                    categoriasArea.style.display =
                        "flex";

                }


                /*
                 * Mostra novamente o carrossel
                 */

                if (areaCarrossel) {

                    areaCarrossel.style.display =
                        "flex";

                }


                /*
                 * Mostra novamente os indicadores
                 */

                if (indicadores) {

                    indicadores.style.display =
                        "flex";

                }


                /*
                 * Esconde a matéria
                 */

                if (materiaCompleta) {

                    materiaCompleta.style.display =
                        "none";

                }


                /*
                 * Limpa a URL
                 */

                history.pushState(
                    {},
                    "",
                    "noticias.html"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /*
     * Verifica se uma notícia foi aberta
     * diretamente pela URL
     */

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    const noticiaURL =
        parametros.get("noticia");


    if (noticiaURL) {

        abrirMateria(
            Number(noticiaURL)
        );

    } else {

        criarCards();

    }


    /*
     * PERFIL / LOGIN
     */

    const usuarioLogado =
        localStorage.getItem(
            "usuarioLogado"
        );

    const perfilArea =
        document.getElementById(
            "perfil-area"
        );

    const perfilBtn =
        document.getElementById(
            "perfil-btn"
        );

    const perfilMenu =
        document.getElementById(
            "perfil-menu"
        );

    const btnSair =
        document.getElementById(
            "btn-sair"
        );


    if (usuarioLogado === "true") {

        if (perfilArea) {

            perfilArea.style.display =
                "block";

        }

    }


    if (perfilBtn && perfilMenu) {

        perfilBtn.addEventListener(
            "click",
            function (evento) {

                evento.stopPropagation();

                perfilMenu.classList.toggle(
                    "ativo"
                );

            }
        );

    }


    document.addEventListener(
        "click",
        function () {

            if (perfilMenu) {

                perfilMenu.classList.remove(
                    "ativo"
                );

            }

        }
    );


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