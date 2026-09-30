// ==========================================================
// ANCHOR - PÁGINA DE INFORMAÇÕES
// ==========================================================


// ==========================================================
// ELEMENTOS DA PÁGINA
// ==========================================================

const cardsCategoria = document.querySelectorAll(".card-categoria");

const secaoConteudo = document.getElementById("conteudoCategoria");
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

    // ---------------- DIREITOS ----------------
    direitos: {
        tag: "DIREITOS",
        titulo: "Conheça seus direitos",
        descricao: "Informações para conhecer seus direitos, reconhecer situações de desrespeito e saber onde procurar orientação.",
        icone: "fa-scale-balanced",
        conteudos: [
            {
                titulo: "Conheça seus direitos",
                descricao: "Informações para compreender seus direitos e saber quando eles podem estar sendo desrespeitados."
            },
            {
                titulo: "Igualdade e respeito",
                descricao: "Entenda a importância do respeito, da dignidade e da igualdade entre as pessoas."
            },
            {
                titulo: "Situações de violência",
                descricao: "Aprenda a reconhecer situações que podem representar violações de direitos."
            },
            {
                titulo: "Onde procurar orientação",
                descricao: "Conheça caminhos para buscar informações, orientação e apoio."
            }
        ]
    },

    // ---------------- SAÚDE ----------------
    saude: {
        tag: "SAÚDE",
        titulo: "Cuide da sua saúde",
        descricao: "Informações para ajudar você a cuidar da saúde física e emocional.",
        icone: "fa-heart-pulse",
        conteudos: [
            {
                titulo: "Saúde física",
                descricao: "Cuidados importantes para manter uma rotina saudável."
            },
            {
                titulo: "Saúde mental",
                descricao: "Entenda a importância de cuidar também da sua saúde emocional."
            },
            {
                titulo: "Quando procurar ajuda",
                descricao: "Saiba identificar quando é importante buscar atendimento profissional."
            },
            {
                titulo: "Serviços de saúde",
                descricao: "Conheça serviços públicos e locais onde você pode procurar atendimento."
            }
        ]
    },

    // ---------------- AUTOCUIDADO ----------------
    autocuidado: {
        tag: "AUTOCUIDADO",
        titulo: "Cuide de você",
        descricao: "Pequenas atitudes podem ajudar a preservar seu bem-estar e sua segurança.",
        icone: "fa-hand-holding-heart",
        conteudos: [
            {
                titulo: "Conheça seus limites",
                descricao: "Aprenda a reconhecer seus limites e respeitar suas próprias necessidades."
            },
            {
                titulo: "Cuidados emocionais",
                descricao: "Atitudes que podem contribuir para o seu bem-estar emocional."
            },
            {
                titulo: "Relacionamentos saudáveis",
                descricao: "Informações sobre respeito, confiança e limites nos relacionamentos."
            },
            {
                titulo: "Busque apoio",
                descricao: "Não enfrente situações difíceis sozinho. Saiba quando procurar ajuda."
            }
        ]
    },

    // ---------------- PREVENÇÃO ----------------
    prevencao: {
        tag: "PREVENÇÃO",
        titulo: "Prevenir também é cuidar",
        descricao: "Informação e atenção podem ajudar a evitar situações de risco.",
        icone: "fa-shield-heart",
        conteudos: [
            {
                titulo: "Prevenção da violência",
                descricao: "Conheça atitudes que podem ajudar na prevenção de diferentes tipos de violência."
            },
            {
                titulo: "Identifique situações de risco",
                descricao: "Aprenda a perceber sinais que podem indicar uma situação perigosa."
            },
            {
                titulo: "Proteção",
                descricao: "Conheça formas de buscar proteção e apoio quando necessário."
            },
            {
                titulo: "Informação salva",
                descricao: "Ter informações corretas ajuda a tomar decisões mais seguras."
            }
        ]
    },

    // ---------------- SEGURANÇA DIGITAL ----------------
    digital: {
        tag: "DIGITAL",
        titulo: "Segurança no ambiente digital",
        descricao: "Informações para navegar na internet de maneira mais segura e consciente.",
        icone: "fa-globe",
        conteudos: [
            {
                titulo: "Privacidade na internet",
                descricao: "Cuidados importantes para proteger seus dados e informações pessoais."
            },
            {
                titulo: "Cyberbullying",
                descricao: "Entenda o que é violência virtual e como procurar ajuda."
            },
            {
                titulo: "Golpes virtuais",
                descricao: "Aprenda a reconhecer situações que podem representar golpes na internet."
            },
            {
                titulo: "Uso responsável das redes",
                descricao: "Dicas para utilizar redes sociais de maneira consciente e segura."
            }
        ]
    },

    // ---------------- ONDE PROCURAR AJUDA ----------------
    ajuda: {
        tag: "AJUDA",
        titulo: "Onde encontrar ajuda",
        descricao: "Conheça serviços e canais que podem oferecer orientação e apoio.",
        icone: "fa-handshake-angle",
        conteudos: [
            {
                titulo: "Canais de apoio",
                descricao: "Conheça canais que podem ajudar em diferentes situações."
            },
            {
                titulo: "Atendimento psicológico",
                descricao: "Saiba onde procurar apoio para questões emocionais."
            },
            {
                titulo: "Serviços públicos",
                descricao: "Conheça serviços públicos que podem oferecer atendimento e orientação."
            },
            {
                titulo: "Emergências",
                descricao: "Em situações de emergência, saiba quais serviços procurar."
            }
        ]
    },

    // ---------------- VIOLÊNCIAS ----------------
    violencias: {
        tag: "VIOLÊNCIAS",
        titulo: "Reconheça diferentes formas de violência",
        descricao: "Informação para reconhecer situações de violência e saber onde procurar ajuda.",
        icone: "fa-triangle-exclamation",
        conteudos: [
            {
                titulo: "Violência doméstica",
                descricao: "Conheça sinais e informações sobre violência dentro de relações familiares ou afetivas."
            },
            {
                titulo: "Bullying e cyberbullying",
                descricao: "Entenda essas formas de violência e saiba como buscar ajuda."
            },
            {
                titulo: "Violência contra grupos",
                descricao: "Conheça situações relacionadas a preconceito, discriminação e intolerância."
            },
            {
                titulo: "Denuncie",
                descricao: "Saiba como procurar os canais adequados para realizar uma denúncia."
            }
        ]
    },

    // ---------------- CONTEÚDOS ----------------
    conteudos: {
        tag: "CONTEÚDOS",
        titulo: "Informação para você",
        descricao: "Materiais educativos para ampliar o conhecimento e ajudar na prevenção.",
        icone: "fa-book-open",
        conteudos: [
            {
                titulo: "Notícias",
                descricao: "Acompanhe informações e conteúdos relacionados aos temas abordados pelo Anchor."
            },
            {
                titulo: "Materiais educativos",
                descricao: "Conteúdos para aprender mais sobre prevenção, direitos e segurança."
            },
            {
                titulo: "Orientações",
                descricao: "Informações simples para ajudar você a entender diferentes situações."
            },
            {
                titulo: "Saiba mais",
                descricao: "Explore outros conteúdos disponíveis na plataforma."
            }
        ]
    },

    // ---------------- COMO FUNCIONA ----------------
    "como-funciona": {
        tag: "DENÚNCIAS",
        titulo: "Como funciona o sistema de denúncias?",
        descricao: "Entenda cada etapa do processo de denúncia dentro do Anchor.",
        icone: "fa-route",
        conteudos: []
    }

};


// ==========================================================
// HTML ESPECIAL DO "COMO FUNCIONA"
// ==========================================================

const htmlComoFunciona = `

    <div class="intro-como-funciona">
        <p>
            O sistema de denúncias do Anchor foi pensado para organizar
            as informações recebidas e permitir que o usuário acompanhe
            o andamento da denúncia.
        </p>
    </div>

    <div class="passos-denuncia">

        <article class="passo-denuncia">
            <div class="numero-passo">01</div>
            <div class="conteudo-passo">
                <span>PRIMEIRO PASSO</span>
                <h3>Descreva o ocorrido</h3>
                <p>
                    Conte o que aconteceu, incluindo informações importantes
                    sobre a situação, quando ocorreu e onde aconteceu.
                </p>
            </div>
        </article>

        <article class="passo-denuncia">
            <div class="numero-passo">02</div>
            <div class="conteudo-passo">
                <span>SEGUNDO PASSO</span>
                <h3>Envie provas</h3>
                <p>
                    Quando existirem, você poderá enviar fotos, documentos
                    ou outros arquivos que ajudem a explicar a situação.
                </p>
                <small class="passo-opcional">Opcional</small>
            </div>
        </article>

        <article class="passo-denuncia">
            <div class="numero-passo">03</div>
            <div class="conteudo-passo">
                <span>TERCEIRO PASSO</span>
                <h3>Análise da denúncia</h3>
                <p>
                    Após o envio, a denúncia é recebida e passa por uma
                    etapa de análise das informações registradas.
                </p>
            </div>
        </article>

        <article class="passo-denuncia">
            <div class="numero-passo">04</div>
            <div class="conteudo-passo">
                <span>QUARTO PASSO</span>
                <h3>Acompanhamento</h3>
                <p>
                    Depois de enviar sua denúncia, você recebe um código
                    que pode ser utilizado para consultar seu andamento.
                </p>
            </div>
        </article>

    </div>

    <div class="informacoes-denuncia">

        <article class="info-denuncia seguranca">
            <div class="icone-info-denuncia"><i class="fa-solid fa-shield-halved"></i></div>
            <h3>Sua segurança</h3>
            <p>
                As informações fornecidas devem ser utilizadas de forma
                responsável dentro do sistema de denúncias.
            </p>
        </article>

        <article class="info-denuncia anchor">
            <div class="icone-info-denuncia"><i class="fa-solid fa-anchor"></i></div>
            <h3>Quando utilizar o Anchor</h3>
            <p>
                Utilize a plataforma para registrar situações que precisam
                ser comunicadas e acompanhadas.
            </p>
        </article>

        <article class="info-denuncia importante">
            <div class="icone-info-denuncia"><i class="fa-solid fa-circle-info"></i></div>
            <h3>Importante</h3>
            <p>
                Em situações que representem perigo imediato, procure os
                serviços de emergência adequados da sua região.
            </p>
        </article>

    </div>

    <div class="emergencia-denuncia">

        <div>
            <span>PRECISA FAZER UMA DENÚNCIA?</span>
            <h3>Registre sua denúncia pelo Anchor.</h3>
            <p>
                Preencha as informações necessárias e acompanhe o
                andamento pelo código recebido.
            </p>
        </div>

        <a href="denuncia.html" class="btn-emergencia">
            Fazer uma denúncia
            <i class="fa-solid fa-arrow-right"></i>
        </a>

    </div>

`;


// ==========================================================
// FUNÇÃO QUE ABRE UMA CATEGORIA
// ==========================================================

function abrirCategoria(categoriaSelecionada) {

    const dados = categorias[categoriaSelecionada];

    if (!dados) {
        return;
    }

    // ---------- cabeçalho ----------

    iconeCategoria.className = "fa-solid " + dados.icone;
    categoriaTag.textContent = dados.tag;
    categoriaTitulo.textContent = dados.titulo;
    categoriaDescricao.textContent = dados.descricao;

    // ---------- limpa conteúdos anteriores ----------

    listaConteudos.innerHTML = "";

    // ---------- conteúdo ----------

    if (categoriaSelecionada === "como-funciona") {

        const comoFunciona = document.createElement("div");
        comoFunciona.classList.add("como-funciona-conteudo");
        comoFunciona.innerHTML = htmlComoFunciona;

        listaConteudos.appendChild(comoFunciona);

    } else {

        dados.conteudos.forEach(function (conteudo, index) {

            const item = document.createElement("article");
            item.classList.add("item-conteudo");

            item.innerHTML = `
                <i class="fa-solid fa-arrow-right"></i>
                <h3>${conteudo.titulo}</h3>
                <p>${conteudo.descricao}</p>
            `;

            // DIREITOS: cada item leva para a página de direitos
            if (categoriaSelecionada === "direitos") {

                item.classList.add("clicavel");

                item.addEventListener("click", function () {
                    window.location.href =
                        "conheca-direitos.html#direitos-" + (index + 1);
                });

            }

            // SAÚDE: cada item leva para a página de saúde
            if (categoriaSelecionada === "saude") {

                item.classList.add("clicavel");

                item.addEventListener("click", function () {
                    window.location.href =
                        "conheca-saude.html?topico=" + (index + 1);
                });

            }

            listaConteudos.appendChild(item);

        });

    }

    // ---------- mostra a área ----------

    secaoConteudo.classList.add("ativo");
    categoriaDetalhes.classList.add("visivel");

    // ---------- rola até os conteúdos ----------

    setTimeout(function () {

        secaoConteudo.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


// ==========================================================
// CLIQUE NOS CARDS
// ==========================================================

cardsCategoria.forEach(function (card) {

    card.addEventListener("click", function (event) {

        // impede o link de mudar de página
        event.preventDefault();

        abrirCategoria(card.dataset.categoria);

    });

});


// ==========================================================
// ABRIR CATEGORIA PELA URL (?topico=autocuidado)
// ==========================================================

const parametros = new URLSearchParams(window.location.search);
const topico = parametros.get("topico");

if (topico) {
    abrirCategoria(topico);
}