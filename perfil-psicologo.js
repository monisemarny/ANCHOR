document.addEventListener("DOMContentLoaded", function () {


    /* ================================================= */
    /* DADOS DOS PROFISSIONAIS */
    /* ================================================= */

    const profissionais = {

        gabrielly: {

            nome: "Gabrielly Estevan Rosa",

            profissao: "Psicóloga",

            crp: "06/123456",

            nota: "4,9",

            avaliacoes: "120 avaliações",

            cor: "roxo",

            especialidades: [
                "Traumas e violência",
                "Abuso sexual",
                "Violência doméstica",
                "Adolescência"
            ],

            formacao:
                "Psicologia",

            sobre:
                "Gabrielly é psicóloga e atua com acolhimento psicológico, buscando oferecer um espaço de escuta respeitosa e segura para diferentes necessidades emocionais. Seu trabalho é voltado especialmente para pessoas que passaram por situações traumáticas ou de violência.",

        },


        yuta: {

            nome: "Yuta Okazaki",

            profissao: "Psicólogo",

            crp: "06/987654",

            nota: "4,8",

            avaliacoes: "98 avaliações",

            cor: "azul",

            especialidades: [
                "Ansiedade e estresse",
                "Relacionamentos",
                "Autoestima",
                "Desenvolvimento pessoal"
            ],

            formacao:
                "Psicologia",

            sobre:
                "Yuta atua com uma abordagem humanista, buscando compreender cada pessoa de forma individual. Seu trabalho envolve questões relacionadas à ansiedade, autoestima, relacionamentos e diferentes momentos de mudança na vida.",

        },


        caroline: {

            nome: "Caroline Ferreira",

            profissao: "Psicóloga",

            crp: "06/456789",

            nota: "4,9",

            avaliacoes: "76 avaliações",

            cor: "rosa",

            especialidades: [
                "Família",
                "Relacionamentos",
                "Violência doméstica",
                "Traumas e violência"
            ],

            formacao:
                "Psicologia",

            sobre:
                "Caroline atua principalmente com relações familiares e interpessoais. Seu trabalho busca oferecer acolhimento para pessoas que enfrentam conflitos, mudanças ou situações que afetem seus relacionamentos e bem-estar emocional.",

        },


        marina: {

            nome: "Marina Alves",

            profissao: "Psicóloga",

            crp: "06/789012",

            nota: "4,8",

            avaliacoes: "84 avaliações",

            cor: "amarelo",

            especialidades: [
                "Adolescência",
                "Bullying",
                "Autoestima",
                "Família"
            ],

            formacao:
                "Psicologia",

            sobre:
                "Marina trabalha especialmente com adolescentes e suas famílias, oferecendo um espaço de escuta para questões relacionadas à autoestima, convivência, bullying e diferentes desafios dessa fase da vida.",

        },


        lucas: {

            nome: "Lucas Mendes",

            profissao: "Psicólogo",

            crp: "06/345678",

            nota: "4,9",

            avaliacoes: "105 avaliações",

            cor: "verde",

            especialidades: [
                "Ansiedade e estresse",
                "Traumas e violência",
                "Estresse",
                "Relacionamentos"
            ],

            formacao:
                "Psicologia",

            sobre:
                "Lucas atua com questões relacionadas à ansiedade, estresse e experiências que podem afetar o bem-estar emocional. Seu trabalho busca oferecer um ambiente acolhedor para que cada pessoa possa falar sobre suas dificuldades.",

        },


        beatriz: {

            nome: "Beatriz Oliveira",

            profissao: "Psicóloga",

            crp: "06/567890",

            nota: "4,7",

            avaliacoes: "69 avaliações",

            cor: "laranja",

            especialidades: [
                "Família",
                "Relacionamentos",
                "Luto",
                "Convivência familiar"
            ],

            formacao:
                "Psicologia",

            sobre:
                "Beatriz atua com relações familiares e diferentes momentos de mudança ou perda. Seu trabalho busca proporcionar um espaço de escuta e acolhimento para questões emocionais e relacionais.",

        }

    };


    /* ================================================= */
    /* PEGAR PROFISSIONAL DA URL */
    /* ================================================= */

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const profissionalSelecionado =
        parametros.get("profissional") || "gabrielly";


    const profissional =
        profissionais[profissionalSelecionado]
        || profissionais.gabrielly;


    /* ================================================= */
    /* ELEMENTOS */
    /* ================================================= */

    const nome =
        document.getElementById(
            "nomeProfissional"
        );

    const profissao =
        document.getElementById(
            "profissaoProfissional"
        );

    const nota =
        document.getElementById(
            "notaProfissional"
        );

    const avaliacoes =
        document.getElementById(
            "avaliacoesProfissional"
        );

    const especialidades =
        document.getElementById(
            "especialidadesProfissional"
        );

    const sobre =
        document.getElementById(
            "sobreProfissional"
        );

    const formacao =
        document.getElementById(
            "formacaoProfissional"
        );

    const btnConversar =
        document.getElementById(
            "btnConversar"
        );

    const btnAgendar =
        document.getElementById(
            "btnAgendar"
        );


    /* ================================================= */
    /* PREENCHER INFORMAÇÕES */
    /* ================================================= */

    nome.textContent =
        profissional.nome;


    profissao.innerHTML =
        `${profissional.profissao}
        <span>|</span>
        CRP ${profissional.crp}`;


    nota.textContent =
        profissional.nota;


    avaliacoes.textContent =
        profissional.avaliacoes;


    sobre.textContent =
        profissional.sobre;


    formacao.textContent =
        profissional.formacao;


    /* ================================================= */
    /* ESPECIALIDADES */
    /* ================================================= */

    especialidades.innerHTML = "";


    profissional.especialidades.forEach(
        function (item) {

            const span =
                document.createElement("span");


            span.className =
                "especialidade";


            span.textContent =
                item;


            especialidades.appendChild(
                span
            );

        }
    );


    /* ================================================= */
    /* BOTÃO CONVERSAR */
    /* ================================================= */

    btnConversar.href =
        `conversas.html?profissional=${profissionalSelecionado}`;


    /* ================================================= */
    /* BOTÃO AGENDAR */
    /* ================================================= */

    btnAgendar.href =
        `agendamento.html?profissional=${profissionalSelecionado}`;


});