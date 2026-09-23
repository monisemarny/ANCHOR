// ==========================================================
// ANCHOR - CONHEÇA SAÚDE
// ==========================================================


// ==========================================================
// CONTEÚDOS DOS TÓPICOS
// ==========================================================

const materias = {

    1: {
        titulo: "Saúde física",

        descricao:
            "Cuidados e informações para manter o corpo saudável e prevenir problemas de saúde.",

        categoria: "Saúde física",

        icone:
            '<i class="fa-solid fa-heart-pulse"></i>',

        introducao:
            "Cuidar da saúde física envolve hábitos que ajudam o corpo a funcionar bem, prevenir doenças e melhorar a qualidade de vida.",

        texto: `
            <h3>Por que cuidar da saúde física?</h3>

            <p>
                A saúde física está relacionada ao funcionamento do corpo
                e aos cuidados necessários para manter o bem-estar.
                Pequenas atitudes no dia a dia podem contribuir para
                uma vida mais saudável.
            </p>

            <h3>Cuidados importantes</h3>

            <ul>
                <li>Ter uma alimentação equilibrada.</li>
                <li>Praticar atividades físicas de forma adequada.</li>
                <li>Manter uma rotina de sono e descanso.</li>
                <li>Manter bons hábitos de higiene.</li>
                <li>Realizar acompanhamento de saúde quando necessário.</li>
            </ul>

            <div class="bloco-destaque">

                <i class="fa-solid fa-circle-info"></i>

                <p>
                    A prevenção também faz parte do cuidado com a saúde.
                    Procurar orientação quando algo não está bem pode
                    ajudar a evitar complicações.
                </p>

            </div>
        `,

        fontes: [
            "Ministério da Saúde",
            "Governo Federal"
        ]
    },


    // ======================================================
    // SAÚDE MENTAL
    // ======================================================

    2: {
        titulo: "Saúde mental",

        descricao:
            "Entenda a importância de cuidar dos pensamentos, sentimentos e emoções.",

        categoria: "Saúde mental",

        icone:
            '<i class="fa-solid fa-brain"></i>',

        introducao:
            "A saúde mental faz parte do bem-estar e está relacionada à forma como uma pessoa lida com seus sentimentos, pensamentos, relações e situações do cotidiano.",

        texto: `
            <h3>O que é saúde mental?</h3>

            <p>
                Saúde mental não significa estar feliz o tempo todo.
                Ela envolve a capacidade de lidar com diferentes
                sentimentos, situações e desafios da vida.
            </p>

            <h3>Por que cuidar da saúde mental?</h3>

            <p>
                Cuidar da saúde mental pode ajudar no bem-estar,
                nos relacionamentos, nos estudos e em outras atividades
                do dia a dia.
            </p>

            <h3>Sinais de que algo pode não estar bem</h3>

            <ul>
                <li>Sentir tristeza ou preocupação por muito tempo.</li>
                <li>Perder o interesse por atividades que antes eram importantes.</li>
                <li>Ter dificuldade frequente para dormir ou descansar.</li>
                <li>Sentir-se constantemente sobrecarregado.</li>
                <li>Ter dificuldade para se concentrar ou realizar atividades.</li>
                <li>Sentir mudanças importantes no humor.</li>
            </ul>

            <div class="bloco-destaque">

                <i class="fa-solid fa-heart"></i>

                <p>
                    Conversar com alguém de confiança pode ser um primeiro
                    passo quando você percebe que não está se sentindo bem.
                    Quando necessário, também é importante procurar
                    orientação profissional.
                </p>

            </div>
        `,

        fontes: [
            "Ministério da Saúde",
            "Organização Mundial da Saúde (OMS)"
        ]
    },


    // ======================================================
    // QUANDO PROCURAR AJUDA
    // ======================================================

    3: {
        titulo: "Quando procurar ajuda",

        descricao:
            "Saiba reconhecer quando é importante buscar orientação e atendimento.",

        categoria: "Cuidados com a saúde",

        icone:
            '<i class="fa-solid fa-hand-holding-heart"></i>',

        introducao:
            "Nem sempre é fácil perceber quando precisamos de ajuda. Procurar orientação quando algo está afetando o bem-estar pode ser importante para cuidar da saúde.",

        texto: `
            <h3>Quando buscar orientação?</h3>

            <p>
                É importante procurar ajuda quando um problema de saúde
                começa a interferir de maneira significativa na rotina,
                nos estudos, nos relacionamentos ou no bem-estar.
            </p>

            <h3>Alguns sinais de atenção</h3>

            <ul>
                <li>Sintomas que persistem ou pioram.</li>
                <li>Dificuldade para realizar atividades do cotidiano.</li>
                <li>Mudanças importantes no sono ou no humor.</li>
                <li>Sentimento frequente de ansiedade ou sobrecarga.</li>
                <li>Preocupação com mudanças no próprio bem-estar.</li>
            </ul>

            <h3>Quem pode ajudar?</h3>

            <p>
                Dependendo da situação, é possível conversar com um
                responsável de confiança, profissional de saúde,
                escola ou serviço público de atendimento.
            </p>

            <div class="bloco-destaque">

                <i class="fa-solid fa-circle-info"></i>

                <p>
                    Procurar ajuda não significa que você precisa
                    resolver tudo sozinho. Pedir orientação é uma
                    forma de cuidado.
                </p>

            </div>
        `,

        fontes: [
            "Ministério da Saúde",
            "Governo Federal"
        ]
    },


    // ======================================================
    // SERVIÇOS DE SAÚDE
    // ======================================================

    4: {
        titulo: "Serviços de saúde",

        descricao:
            "Conheça alguns dos serviços que podem oferecer atendimento e orientação.",

        categoria: "Serviços de saúde",

        icone:
            '<i class="fa-solid fa-hospital"></i>',

        introducao:
            "O sistema de saúde oferece diferentes serviços para prevenção, orientação, acompanhamento e atendimento de problemas de saúde.",

        texto: `
            <h3>Onde buscar atendimento?</h3>

            <p>
                No Brasil, existem diferentes serviços de saúde que
                podem atender a população de acordo com suas necessidades.
            </p>

            <h3>Unidades Básicas de Saúde</h3>

            <p>
                As UBS fazem parte da atenção básica e podem oferecer
                consultas, acompanhamento, vacinação, orientações
                e outros serviços de saúde.
            </p>

            <h3>Outros serviços</h3>

            <ul>
                <li>Unidades de saúde da atenção básica.</li>
                <li>Hospitais e unidades de atendimento especializado.</li>
                <li>Serviços de saúde mental.</li>
                <li>Serviços de urgência e emergência.</li>
            </ul>

            <div class="bloco-destaque">

                <i class="fa-solid fa-hospital"></i>

                <p>
                    O serviço adequado depende da necessidade.
                    Em situações de emergência, procure atendimento
                    imediato ou acione o serviço de emergência adequado.
                </p>

            </div>
        `,

        fontes: [
            "Ministério da Saúde",
            "Governo Federal",
            "Sistema Único de Saúde (SUS)"
        ]
    }

};


// ==========================================================
// PEGAR TÓPICO DA URL
// ==========================================================

const parametros = new URLSearchParams(window.location.search);

const topicoSelecionado = parametros.get("topico");


// ==========================================================
// SE O TÓPICO EXISTIR
// ==========================================================

if (materias[topicoSelecionado]) {

    const materia = materias[topicoSelecionado];


    // ======================================================
    // ELEMENTOS DA PÁGINA
    // ======================================================

    const tituloHero =
        document.getElementById("tituloHero");

    const descricaoHero =
        document.getElementById("descricaoHero");

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
    // ALTERAR HERO
    // ======================================================

    tituloHero.textContent =
        materia.titulo;

    descricaoHero.textContent =
        materia.descricao;


    // ======================================================
    // ALTERAR MATÉRIA
    // ======================================================

    materiaCategoria.textContent =
        materia.categoria;

    materiaIcone.innerHTML =
        materia.icone;

    materiaTitulo.textContent =
        materia.titulo;

    materiaIntroducao.textContent =
        materia.introducao;

    materiaTexto.innerHTML =
        materia.texto;


    // ======================================================
    // ALTERAR FONTES
    // ======================================================

    listaFontes.innerHTML = "";

    materia.fontes.forEach(function (fonte) {

        const item =
            document.createElement("li");

        item.textContent =
            fonte;

        listaFontes.appendChild(item);

    });


    // ======================================================
    // ALTERAR TÍTULO DO NAVEGADOR
    // ======================================================

    document.title =
        materia.titulo + " | Anchor";

}


// ==========================================================
// CASO NÃO EXISTA UM TÓPICO VÁLIDO
// ==========================================================

else {

    window.location.href =
        "informacoes.html";

}