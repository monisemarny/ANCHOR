// ==========================================================
// ANCHOR - PÁGINA DE INFORMAÇÕES
// ==========================================================


// ==========================================================
// ELEMENTOS DA PÁGINA
// ==========================================================

const cardsCategoria = document.querySelectorAll(".card-categoria");

const categoriaVazia = document.getElementById("categoriaVazia");
const categoriaDetalhes = document.getElementById("categoriaDetalhes");

const iconeCategoria = document.getElementById("iconeCategoria");
const categoriaTag = document.getElementById("categoriaTag");
const categoriaTitulo = document.getElementById("categoriaTitulo");
const categoriaDescricao = document.getElementById("categoriaDescricao");

const listaConteudos = document.getElementById("listaConteudos");


// ==========================================================
// CONTEÚDOS DAS CATEGORIAS
// ==========================================================

const categorias = {

    direitos: {
        tag: "DIREITOS",
        titulo: "Conheça seus direitos",
        descricao:
            "Informações para conhecer seus direitos, reconhecer situações de desrespeito e saber onde procurar orientação.",
        icone: "fa-scale-balanced",

        conteudos: [
            {
                titulo: "Conheça seus direitos",
                descricao:
                    "Informações para compreender seus direitos e saber quando eles podem estar sendo desrespeitados."
            },

            {
                titulo: "Igualdade e respeito",
                descricao:
                    "Entenda a importância do respeito, da dignidade e da igualdade entre as pessoas."
            },

            {
                titulo: "Situações de violência",
                descricao:
                    "Aprenda a reconhecer situações que podem representar violações de direitos."
            },

            {
                titulo: "Onde procurar orientação",
                descricao:
                    "Conheça caminhos para buscar informações, orientação e apoio."
            }
        ]
    },


    saude: {
        tag: "SAÚDE",
        titulo: "Cuide da sua saúde",
        descricao:
            "Informações para ajudar você a cuidar da saúde física e emocional.",
        icone: "fa-heart-pulse",

        conteudos: [
            {
                titulo: "Saúde física",
                descricao:
                    "Cuidados importantes para manter uma rotina saudável."
            },

            {
                titulo: "Saúde mental",
                descricao:
                    "Entenda a importância de cuidar também da sua saúde emocional."
            },

            {
                titulo: "Quando procurar ajuda",
                descricao:
                    "Saiba identificar quando é importante buscar atendimento profissional."
            },

            {
                titulo: "Serviços de saúde",
                descricao:
                    "Conheça serviços públicos e locais onde você pode procurar atendimento."
            }
        ]
    },


    autocuidado: {
        tag: "AUTOCUIDADO",
        titulo: "Cuide de você",
        descricao:
            "Pequenas atitudes podem ajudar a preservar seu bem-estar e sua segurança.",
        icone: "fa-hand-holding-heart",

        conteudos: [
            {
                titulo: "Conheça seus limites",
                descricao:
                    "Aprenda a reconhecer seus limites e respeitar suas próprias necessidades."
            },

            {
                titulo: "Cuidados emocionais",
                descricao:
                    "Atitudes que podem contribuir para o seu bem-estar emocional."
            },

            {
                titulo: "Relacionamentos saudáveis",
                descricao:
                    "Informações sobre respeito, confiança e limites nos relacionamentos."
            },

            {
                titulo: "Busque apoio",
                descricao:
                    "Não enfrente situações difíceis sozinho. Saiba quando procurar ajuda."
            }
        ]
    },


    prevencao: {
        tag: "PREVENÇÃO",
        titulo: "Prevenir também é cuidar",
        descricao:
            "Informação e atenção podem ajudar a evitar situações de risco.",
        icone: "fa-shield-heart",

        conteudos: [
            {
                titulo: "Prevenção da violência",
                descricao:
                    "Conheça atitudes que podem ajudar na prevenção de diferentes tipos de violência."
            },

            {
                titulo: "Identifique situações de risco",
                descricao:
                    "Aprenda a perceber sinais que podem indicar uma situação perigosa."
            },

            {
                titulo: "Proteção",
                descricao:
                    "Conheça formas de buscar proteção e apoio quando necessário."
            },

            {
                titulo: "Informação salva",
                descricao:
                    "Ter informações corretas ajuda a tomar decisões mais seguras."
            }
        ]
    },


    digital: {
        tag: "DIGITAL",
        titulo: "Segurança no ambiente digital",
        descricao:
            "Informações para navegar na internet de maneira mais segura e consciente.",
        icone: "fa-globe",

        conteudos: [
            {
                titulo: "Privacidade na internet",
                descricao:
                    "Cuidados importantes para proteger seus dados e informações pessoais."
            },

            {
                titulo: "Cyberbullying",
                descricao:
                    "Entenda o que é violência virtual e como procurar ajuda."
            },

            {
                titulo: "Golpes virtuais",
                descricao:
                    "Aprenda a reconhecer situações que podem representar golpes na internet."
            },

            {
                titulo: "Uso responsável das redes",
                descricao:
                    "Dicas para utilizar redes sociais de maneira consciente e segura."
            }
        ]
    },


    ajuda: {
        tag: "AJUDA",
        titulo: "Onde encontrar ajuda",
        descricao:
            "Conheça serviços e canais que podem oferecer orientação e apoio.",
        icone: "fa-handshake-angle",

        conteudos: [
            {
                titulo: "Canais de apoio",
                descricao:
                    "Conheça canais que podem ajudar em diferentes situações."
            },

            {
                titulo: "Atendimento psicológico",
                descricao:
                    "Saiba onde procurar apoio para questões emocionais."
            },

            {
                titulo: "Serviços públicos",
                descricao:
                    "Conheça serviços públicos que podem oferecer atendimento e orientação."
            },

            {
                titulo: "Emergências",
                descricao:
                    "Em situações de emergência, saiba quais serviços procurar."
            }
        ]
    },


    violencias: {
        tag: "VIOLÊNCIAS",
        titulo: "Reconheça diferentes formas de violência",
        descricao:
            "Informação para reconhecer situações de violência e saber onde procurar ajuda.",
        icone: "fa-triangle-exclamation",

        conteudos: [
            {
                titulo: "Violência doméstica",
                descricao:
                    "Conheça sinais e informações sobre violência dentro de relações familiares ou afetivas."
            },

            {
                titulo: "Bullying e cyberbullying",
                descricao:
                    "Entenda essas formas de violência e saiba como buscar ajuda."
            },

            {
                titulo: "Violência contra grupos",
                descricao:
                    "Conheça situações relacionadas a preconceito, discriminação e intolerância."
            },

            {
                titulo: "Denuncie",
                descricao:
                    "Saiba como procurar os canais adequados para realizar uma denúncia."
            }
        ]
    },


    conteudos: {
        tag: "CONTEÚDOS",
        titulo: "Informação para você",
        descricao:
            "Materiais educativos para ampliar o conhecimento e ajudar na prevenção.",
        icone: "fa-book-open",

        conteudos: [
            {
                titulo: "Notícias",
                descricao:
                    "Acompanhe informações e conteúdos relacionados aos temas abordados pelo Anchor."
            },

            {
                titulo: "Materiais educativos",
                descricao:
                    "Conteúdos para aprender mais sobre prevenção, direitos e segurança."
            },

            {
                titulo: "Orientações",
                descricao:
                    "Informações simples para ajudar você a entender diferentes situações."
            },

            {
                titulo: "Saiba mais",
                descricao:
                    "Explore outros conteúdos disponíveis na plataforma."
            }
        ]
    }

};


// ==========================================================
// CLIQUE NAS CATEGORIAS
// ==========================================================

cardsCategoria.forEach(function (card) {

    card.addEventListener("click", function () {

        const categoriaSelecionada =
            card.dataset.categoria;

        const dados =
            categorias[categoriaSelecionada];

        if (!dados) {
            return;
        }


        // ==================================================
        // ATUALIZA CABEÇALHO DA CATEGORIA
        // ==================================================

        iconeCategoria.className =
            "fa-solid " + dados.icone;

        categoriaTag.textContent =
            dados.tag;

        categoriaTitulo.textContent =
            dados.titulo;

        categoriaDescricao.textContent =
            dados.descricao;


        // ==================================================
        // LIMPA OS CONTEÚDOS ANTERIORES
        // ==================================================

        listaConteudos.innerHTML = "";


        // ==================================================
        // CRIA OS CONTEÚDOS
        // ==================================================

        dados.conteudos.forEach(function (conteudo, index) {

            const item =
                document.createElement("article");

            item.classList.add("item-conteudo");


            item.innerHTML = `
                <i class="fa-solid fa-arrow-right"></i>

                <h3>
                    ${conteudo.titulo}
                </h3>

                <p>
                    ${conteudo.descricao}
                </p>
            `;


            // ==================================================
            // CATEGORIA DIREITOS
            // ==================================================

            if (categoriaSelecionada === "direitos") {

                item.classList.add("clicavel");


                item.addEventListener("click", function () {

                    window.location.href =
                        "conheca-direitos.html?topico=" +
                        (index + 1);

                });

            }


            // ==================================================
            // CATEGORIA SAÚDE
            // ==================================================

            if (categoriaSelecionada === "saude") {

                item.classList.add("clicavel");


                item.addEventListener("click", function () {

                    window.location.href =
                        "conheca-saude.html?topico=" +
                        (index + 1);

                });

            }


            // ==================================================
            // ADICIONA O ITEM NA LISTA
            // ==================================================

            listaConteudos.appendChild(item);

        });


        // ==================================================
        // MOSTRA A ÁREA DE DETALHES
        // ==================================================

        categoriaVazia.style.display =
            "none";

        categoriaDetalhes.classList.add(
            "visivel"
        );


        // ==================================================
        // ROLA ATÉ OS CONTEÚDOS
        // ==================================================

        setTimeout(function () {

            categoriaDetalhes.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    });

});