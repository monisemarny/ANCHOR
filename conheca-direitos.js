// ==========================================================
// ANCHOR - CONHEÇA SEUS DIREITOS
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de informações iniciada!");


    // ======================================================
    // ELEMENTOS DA PÁGINA
    // ======================================================

    const btnExplorar =
        document.querySelector(".btn-explorar");

    const materiaCategoria =
        document.getElementById("materiaCategoria");

    const materiaIcone =
        document.getElementById("materiaIcone");

    const materiaTitulo =
        document.getElementById("materiaTitulo");

    const materiaIntroducao =
        document.getElementById("materiaIntroducao");

    const materiaTexto =
        document.getElementById("materiaTexto");

    const listaFontes =
        document.getElementById("listaFontes");


    // ======================================================
    // MATÉRIAS
    // ======================================================

    const materias = {

        // ==================================================
        // TÓPICO 1
        // ==================================================

        1: {

            categoria: "DIREITOS",

            icone: "fa-scale-balanced",

            titulo: "Conheça seus direitos",

            introducao:
                "Conhecer seus direitos é um passo importante para reconhecer situações em que eles podem estar sendo desrespeitados e saber onde procurar orientação.",


            conteudo: `

                <h3>Por que conhecer seus direitos?</h3>

                <p>
                    Todas as pessoas possuem direitos que devem ser
                    respeitados. Esses direitos estão relacionados à
                    dignidade, à liberdade, à igualdade, à segurança
                    e à proteção.
                </p>

                <p>
                    Conhecer esses direitos ajuda a identificar situações
                    de violência, discriminação, abuso ou desrespeito
                    e pode facilitar a busca por orientação e apoio.
                </p>


                <h3>Direitos fundamentais</h3>

                <p>
                    A Constituição Federal estabelece direitos e
                    garantias fundamentais para todas as pessoas.
                    Entre eles estão a igualdade perante a lei,
                    a liberdade, a segurança e a proteção da
                    dignidade humana.
                </p>

                <p>
                    Isso significa que ninguém deve ser tratado de
                    maneira desigual ou sofrer violência por causa
                    de características pessoais, origem, crença,
                    condição ou qualquer outra diferença.
                </p>


                <div class="caixa-destaque">

                    <i class="fa-solid fa-circle-info"></i>

                    <div>

                        <strong>
                            Informação também protege.
                        </strong>

                        <p>
                            Conhecer seus direitos não significa
                            saber todas as leis de memória. Significa
                            saber reconhecer quando algo pode estar
                            errado e entender que existem caminhos
                            para procurar orientação.
                        </p>

                    </div>

                </div>


                <h3>Quando um direito é desrespeitado</h3>

                <p>
                    Situações de violência, discriminação, ameaça,
                    abuso ou outras formas de desrespeito podem
                    envolver violações de direitos.
                </p>

                <p>
                    Em situações assim, é importante buscar informações
                    em fontes confiáveis e, quando necessário, procurar
                    serviços públicos, profissionais especializados ou
                    canais de denúncia.
                </p>


                <h3>O que fazer?</h3>

                <p>
                    Cada situação possui características diferentes.
                    Por isso, antes de tomar uma decisão, procure
                    orientação adequada e, em situações de emergência,
                    procure imediatamente os serviços responsáveis.
                </p>

            `,

            fontes: [

                {
                    nome: "Constituição Federal",
                    descricao:
                        "Texto constitucional e direitos e garantias fundamentais."
                },

                {
                    nome: "Planalto",
                    descricao:
                        "Portal oficial da legislação brasileira."
                }

            ]

        },


        // ==================================================
        // TÓPICO 2
        // ==================================================

        2: {

            categoria: "IGUALDADE E RESPEITO",

            icone: "fa-people-arrows",

            titulo: "Igualdade e respeito",

            introducao:
                "Todas as pessoas têm direito à dignidade, à igualdade e ao respeito. A discriminação pode atingir esses direitos e também pode assumir diferentes formas.",


            conteudo: `

                <h3>O que significa igualdade?</h3>

                <p>
                    Igualdade significa que todas as pessoas devem
                    ter seus direitos respeitados, sem sofrer
                    discriminação por suas características pessoais,
                    origem, raça, religião, orientação sexual,
                    identidade de gênero ou outras diferenças.
                </p>

                <p>
                    O respeito às diferenças é parte importante da
                    convivência em sociedade e da proteção da
                    dignidade humana.
                </p>


                <h3>Discriminação e preconceito</h3>

                <p>
                    Preconceito envolve ideias ou julgamentos
                    negativos direcionados a uma pessoa ou grupo.
                    A discriminação ocorre quando esse tratamento
                    desigual se manifesta em atitudes ou práticas.
                </p>

                <p>
                    Dependendo da situação, determinadas condutas
                    discriminatórias podem configurar crimes ou
                    outras violações de direitos.
                </p>


                <h3>Racismo</h3>

                <p>
                    A legislação brasileira prevê crimes relacionados
                    à discriminação ou preconceito de raça, cor,
                    etnia, religião ou procedência nacional.
                </p>

                <p>
                    A Lei nº 7.716/1989 é uma das principais normas
                    brasileiras relacionadas a esse tema.
                </p>


                <h3>Homofobia e transfobia</h3>

                <p>
                    A discriminação motivada por orientação sexual
                    ou identidade de gênero também pode configurar
                    crime.
                </p>

                <p>
                    Em 2019, o Supremo Tribunal Federal determinou
                    que condutas homofóbicas e transfóbicas fossem
                    enquadradas nos tipos penais previstos na
                    legislação de combate ao racismo, enquanto não
                    houver legislação específica sobre o tema.
                </p>


                <div class="caixa-destaque">

                    <i class="fa-solid fa-hand-holding-heart"></i>

                    <div>

                        <strong>
                            Respeito é um direito.
                        </strong>

                        <p>
                            Diferenças entre as pessoas não justificam
                            violência, humilhação, discriminação ou
                            tratamento desigual.
                        </p>

                    </div>

                </div>


                <h3>Intolerância religiosa</h3>

                <p>
                    A liberdade de crença e de religião também é
                    protegida. Ninguém deve sofrer violência ou
                    discriminação por sua religião ou por não seguir
                    uma religião.
                </p>


                <h3>O que fazer diante de uma situação de discriminação?</h3>

                <p>
                    Procure registrar informações sobre o ocorrido,
                    preserve possíveis provas quando for seguro fazer
                    isso e procure orientação nos canais adequados.
                </p>

                <p>
                    Em situações de ameaça ou violência, procure
                    ajuda imediatamente.
                </p>

            `,

            fontes: [

                {
                    nome: "Lei nº 7.716/1989",
                    descricao:
                        "Legislação brasileira relacionada aos crimes resultantes de preconceito e discriminação."
                },

                {
                    nome: "Supremo Tribunal Federal",
                    descricao:
                        "Decisão de 2019 sobre homofobia e transfobia."
                },

                {
                    nome: "Constituição Federal",
                    descricao:
                        "Direitos fundamentais, igualdade e liberdade."
                }

            ]

        },


        // ==================================================
        // TÓPICO 3
        // ==================================================

        3: {

            categoria: "PROTEÇÃO",

            icone: "fa-shield-halved",

            titulo: "Situações de violência",

            introducao:
                "A violência pode acontecer de diferentes formas e em diferentes ambientes. Reconhecer seus sinais pode ser importante para buscar proteção e orientação.",


            conteudo: `

                <h3>O que é violência?</h3>

                <p>
                    Violência não significa apenas agressão física.
                    Ela pode acontecer de diferentes maneiras e
                    afetar a integridade física, psicológica,
                    sexual, moral ou patrimonial de uma pessoa.
                </p>

                <p>
                    Também pode acontecer dentro de casa, em
                    relacionamentos, na escola, no trabalho,
                    nas redes sociais ou em outros espaços.
                </p>


                <h3>Violência doméstica e familiar</h3>

                <p>
                    A violência doméstica e familiar contra a mulher
                    é tratada de forma específica pela legislação
                    brasileira.
                </p>

                <p>
                    A Lei Maria da Penha, Lei nº 11.340/2006,
                    estabelece mecanismos para prevenir e combater
                    a violência doméstica e familiar contra a mulher.
                </p>


                <h3>Formas de violência previstas na Lei Maria da Penha</h3>

                <p>
                    A legislação reconhece diferentes formas de
                    violência contra a mulher, incluindo:
                </p>

                <ul>

                    <li>
                        <strong>Violência física:</strong>
                        quando ocorre qualquer conduta que prejudique
                        a integridade ou saúde corporal.
                    </li>

                    <li>
                        <strong>Violência psicológica:</strong>
                        quando a conduta provoca dano emocional,
                        diminuição da autoestima ou controle sobre
                        ações e decisões.
                    </li>

                    <li>
                        <strong>Violência sexual:</strong>
                        quando há constrangimento ou imposição
                        relacionada à vida sexual ou reprodutiva.
                    </li>

                    <li>
                        <strong>Violência patrimonial:</strong>
                        quando há retenção, destruição ou controle
                        de bens, documentos, recursos ou valores.
                    </li>

                    <li>
                        <strong>Violência moral:</strong>
                        quando ocorrem condutas como calúnia,
                        difamação ou injúria.
                    </li>

                </ul>


                <div class="caixa-destaque">

                    <i class="fa-solid fa-shield-heart"></i>

                    <div>

                        <strong>
                            A violência não precisa deixar marcas visíveis.
                        </strong>

                        <p>
                            Violência psicológica, sexual, moral e
                            patrimonial também podem causar danos
                            e merecem atenção e proteção.
                        </p>

                    </div>

                </div>


                <h3>Medidas protetivas</h3>

                <p>
                    Em determinadas situações de violência doméstica
                    e familiar, podem ser solicitadas medidas
                    protetivas de urgência para proteger a vítima.
                </p>

                <p>
                    Essas medidas podem estabelecer restrições ao
                    agressor e outras formas de proteção previstas
                    pela legislação.
                </p>


                <h3>Outras situações de violência</h3>

                <p>
                    Além da violência doméstica, existem outras
                    situações que podem exigir atenção, como
                    bullying, cyberbullying, violência contra
                    crianças e adolescentes, violência contra
                    pessoas idosas e crimes motivados por
                    discriminação.
                </p>


                <h3>Procure ajuda</h3>

                <p>
                    Se você estiver passando por uma situação de
                    violência, procure uma pessoa de confiança e
                    busque orientação nos serviços adequados.
                </p>

                <p>
                    Em uma situação de emergência ou risco imediato,
                    procure os serviços de emergência.
                </p>

            `,

            fontes: [

                {
                    nome: "Lei Maria da Penha - Lei nº 11.340/2006",
                    descricao:
                        "Legislação brasileira de prevenção e combate à violência doméstica e familiar contra a mulher."
                },

                {
                    nome: "Planalto",
                    descricao:
                        "Texto oficial da legislação brasileira."
                },

                {
                    nome: "Ministério das Mulheres",
                    descricao:
                        "Informações e orientações sobre enfrentamento à violência contra as mulheres."
                }

            ]

        },


        // ==================================================
        // TÓPICO 4
        // ==================================================

        4: {

            categoria: "ORIENTAÇÃO",

            icone: "fa-location-dot",

            titulo: "Onde procurar orientação",

            introducao:
                "Quando uma pessoa passa por uma situação difícil ou não sabe quais são seus direitos, procurar orientação pode ser um primeiro passo.",


            conteudo: `

                <h3>Você não precisa saber tudo sozinho</h3>

                <p>
                    Nem sempre é fácil entender uma situação,
                    principalmente quando ela envolve violência,
                    ameaça, discriminação ou conflitos.
                </p>

                <p>
                    Procurar orientação pode ajudar a compreender
                    quais direitos estão envolvidos e quais
                    caminhos podem ser utilizados para buscar
                    proteção ou atendimento.
                </p>


                <h3>Onde procurar orientação?</h3>

                <p>
                    Dependendo da situação, é possível procurar
                    diferentes serviços públicos e profissionais
                    especializados.
                </p>

                <p>
                    O caminho adequado pode variar de acordo com
                    o tipo de situação, a idade da pessoa envolvida
                    e o nível de urgência.
                </p>


                <h3>Em situações de emergência</h3>

                <p>
                    Quando existe risco imediato à vida, à integridade
                    física ou à segurança de uma pessoa, procure
                    imediatamente os serviços de emergência.
                </p>


                <h3>Para denúncias</h3>

                <p>
                    Situações de violência, abuso, exploração,
                    discriminação ou outras violações podem possuir
                    canais específicos de denúncia.
                </p>

                <p>
                    Antes de realizar uma denúncia, procure
                    informações em canais oficiais para entender
                    qual serviço é adequado para cada situação.
                </p>


                <div class="caixa-destaque">

                    <i class="fa-solid fa-circle-question"></i>

                    <div>

                        <strong>
                            Não sabe por onde começar?
                        </strong>

                        <p>
                            Buscar orientação com um serviço público,
                            profissional especializado ou instituição
                            de apoio pode ajudar a encontrar o caminho
                            mais adequado.
                        </p>

                    </div>

                </div>


                <h3>Preserve sua segurança</h3>

                <p>
                    Ao buscar ajuda, priorize sua segurança.
                    Não coloque você ou outra pessoa em risco para
                    conseguir provas ou confrontar alguém.
                </p>


                <h3>O Anchor pode ajudar</h3>

                <p>
                    O Anchor reúne informações sobre direitos,
                    denúncias, apoio psicológico e serviços de
                    emergência para facilitar o acesso à informação.
                </p>

                <p>
                    A plataforma tem finalidade informativa e não
                    substitui atendimento profissional, policial,
                    médico ou jurídico.
                </p>

            `,

            fontes: [

                {
                    nome: "Portal Gov.br",
                    descricao:
                        "Informações e serviços oficiais do Governo Federal."
                },

                {
                    nome: "Ministério das Mulheres",
                    descricao:
                        "Informações e canais relacionados à proteção e enfrentamento da violência contra mulheres."
                },

                {
                    nome: "Serviços públicos",
                    descricao:
                        "Procure os órgãos responsáveis de acordo com a situação."
                }

            ]

        }

    };


    // ======================================================
    // DESCOBRIR QUAL TÓPICO FOI SELECIONADO
    // ======================================================

    const parametros =
        new URLSearchParams(window.location.search);

    const topico =
        parametros.get("topico");


    // ======================================================
    // DEFINE O TÓPICO PADRÃO
    // ======================================================

    let numeroTopico =
        parseInt(topico);


    if (
        isNaN(numeroTopico) ||
        !materias[numeroTopico]
    ) {

        numeroTopico = 1;

    }


    const materia =
        materias[numeroTopico];


    // ======================================================
    // ATUALIZA O HERO
    // ======================================================

    const tituloHero =
        document.getElementById("tituloHero");

    const descricaoHero =
        document.getElementById("descricaoHero");


    if (tituloHero) {

        const partesTitulo =
            materia.titulo.split(" ");


        if (partesTitulo.length > 1) {

            const ultimaPalavra =
                partesTitulo.pop();

            tituloHero.innerHTML =
                partesTitulo.join(" ") +
                " <span>" +
                ultimaPalavra +
                "</span>";

        } else {

            tituloHero.textContent =
                materia.titulo;

        }

    }


    if (descricaoHero) {

        descricaoHero.textContent =
            materia.introducao;

    }


    // ======================================================
    // ATUALIZA A MATÉRIA
    // ======================================================

    if (materiaCategoria) {

        materiaCategoria.textContent =
            materia.categoria;

    }


    if (materiaIcone) {

        materiaIcone.innerHTML =
            `<i class="fa-solid ${materia.icone}"></i>`;

    }


    if (materiaTitulo) {

        materiaTitulo.textContent =
            materia.titulo;

    }


    if (materiaIntroducao) {

        materiaIntroducao.textContent =
            materia.introducao;

    }


    if (materiaTexto) {

        materiaTexto.innerHTML =
            materia.conteudo;

    }


    // ======================================================
    // FONTES
    // ======================================================

    if (listaFontes) {

        listaFontes.innerHTML = "";


        materia.fontes.forEach(function (fonte) {

            const item =
                document.createElement("div");

            item.classList.add("fonte-item");


            item.innerHTML = `

                <i class="fa-solid fa-link"></i>

                <div>

                    <strong>
                        ${fonte.nome}
                    </strong>

                    <p>
                        ${fonte.descricao}
                    </p>

                </div>

            `;


            listaFontes.appendChild(item);

        });

    }


    // ======================================================
    // BOTÃO "LER MATÉRIA"
    // ======================================================

    if (btnExplorar) {

        btnExplorar.addEventListener("click", function (event) {

            event.preventDefault();


            const destino =
                document.querySelector("#materia");


            if (destino) {

                destino.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    }


    // ======================================================
    // ANIMAÇÃO DA MATÉRIA
    // ======================================================

    const materiaElemento =
        document.querySelector(".materia-direito");


    if (materiaElemento) {

        setTimeout(function () {

            materiaElemento.classList.add("visivel");

        }, 100);

    }


    // ======================================================
    // TÍTULO DA ABA DO NAVEGADOR
    // ======================================================

    document.title =
        materia.titulo + " | Anchor";


});