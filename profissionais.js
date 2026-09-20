document.addEventListener("DOMContentLoaded", function () {

    const busca = document.getElementById("buscaProfissional");

    const filtros = document.querySelectorAll(".filtro");

    const cards = document.querySelectorAll(".card-profissional");

    const profissionaisExtras = document.querySelectorAll(
        ".profissional-extra"
    );

    const btnVerMais = document.getElementById("btnVerMais");

    const nenhumResultado = document.getElementById(
        "nenhumResultado"
    );


    let filtroAtual = "todos";

    let mostrarTodos = false;


    /* ================================================= */
    /* VER MAIS PROFISSIONAIS */
    /* ================================================= */

    btnVerMais.addEventListener("click", function () {

        mostrarTodos = !mostrarTodos;


        profissionaisExtras.forEach(function (card) {

            if (mostrarTodos) {

                card.classList.add("visivel");

            } else {

                card.classList.remove("visivel");

            }

        });


        if (mostrarTodos) {

            btnVerMais.innerHTML =
                'Mostrar menos <i class="fa-solid fa-chevron-up"></i>';

            btnVerMais.classList.add("aberto");

        } else {

            btnVerMais.innerHTML =
                'Ver mais profissionais <i class="fa-solid fa-chevron-down"></i>';

            btnVerMais.classList.remove("aberto");

        }


        aplicarFiltros();

    });


    /* ================================================= */
    /* CLIQUE NOS FILTROS */
    /* ================================================= */

    filtros.forEach(function (filtro) {

        filtro.addEventListener("click", function () {

            filtros.forEach(function (item) {

                item.classList.remove("ativo");

            });


            filtro.classList.add("ativo");


            filtroAtual = filtro.dataset.filtro;


            aplicarFiltros();

        });

    });


    /* ================================================= */
    /* CAMPO DE BUSCA */
    /* ================================================= */

    busca.addEventListener("input", function () {

        aplicarFiltros();

    });


    /* ================================================= */
    /* FILTRAR PROFISSIONAIS */
    /* ================================================= */

    function aplicarFiltros() {

        const textoBusca = normalizarTexto(
            busca.value.trim()
        );


        let quantidade = 0;


        cards.forEach(function (card) {

            const nome = normalizarTexto(
                card.dataset.nome
            );


            const especialidades = normalizarTexto(
                card.dataset.especialidades
            );


            const ehExtra =
                card.classList.contains(
                    "profissional-extra"
                );


            /*
             * Verifica o texto pesquisado.
             */

            const correspondeBusca =
                textoBusca === "" ||
                nome.includes(textoBusca) ||
                especialidades.includes(textoBusca);


            /*
             * Verifica o filtro selecionado.
             */

            const correspondeFiltro =
                filtroAtual === "todos" ||
                especialidades.includes(
                    normalizarTexto(filtroAtual)
                );


            /*
             * Profissional corresponde
             * aos critérios?
             */

            const corresponde =
                correspondeBusca &&
                correspondeFiltro;


            /*
             * Profissionais extras:
             *
             * Se a pessoa estiver pesquisando,
             * eles podem aparecer mesmo sem
             * clicar em "Ver mais".
             */

            const podeMostrarExtra =
                !ehExtra ||
                mostrarTodos ||
                textoBusca !== "";


            if (
                corresponde &&
                podeMostrarExtra
            ) {

                card.style.display = "flex";

                quantidade++;

            } else {

                card.style.display = "none";

            }

        });


        /*
         * Mostra mensagem caso não
         * exista nenhum resultado.
         */

        if (quantidade === 0) {

            nenhumResultado.style.display = "block";

        } else {

            nenhumResultado.style.display = "none";

        }

    }


    /* ================================================= */
    /* NORMALIZAR TEXTO */
    /* ================================================= */

    function normalizarTexto(texto) {

        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    }


    /* ================================================= */
    /* ESTADO INICIAL */
    /* ================================================= */

    aplicarFiltros();

});