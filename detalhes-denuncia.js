// ==========================================================
// ANCHOR - DETALHES DA DENÚNCIA
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página Detalhes da Denúncia iniciada!");


    // ======================================================
    // ELEMENTOS
    // ======================================================

    const codigoDenuncia =
        document.getElementById("codigoDenuncia");

    const codigoInfo =
        document.getElementById("codigoInfo");

    const statusDenuncia =
        document.getElementById("statusDenuncia");

    const statusInfo =
        document.getElementById("statusInfo");

    const dataEnvio =
        document.getElementById("dataEnvio");

    const tipoDenuncia =
        document.getElementById("tipoDenuncia");

    const localOcorrido =
        document.getElementById("localOcorrido");


    // ======================================================
    // DADOS DE DEMONSTRAÇÃO
    // ======================================================

    /*
        Estes dados são apenas para o protótipo.

        Futuramente:
        banco de dados → backend/API → página
    */

    const denuncias = {

        "A12345": {

            codigo: "A12345",

            status: "Recebida",

            dataRecebimento: "10/08/2026",

            horaRecebimento: "14:32",

            tipo: "Violência doméstica",

            local: "São Paulo - SP"

        }

    };


    // ======================================================
    // PEGAR CÓDIGO DA URL
    // ======================================================

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    let codigo =
        parametros.get("codigo");


    if (codigo) {

        codigo =
            codigo
                .trim()
                .toUpperCase();

    }


    // ======================================================
    // CASO NÃO TENHA CÓDIGO
    // ======================================================

    if (!codigo) {

        console.log(
            "Nenhum código foi informado."
        );

        return;

    }


    // ======================================================
    // PROCURAR DENÚNCIA
    // ======================================================

    const denuncia =
        denuncias[codigo];


    if (!denuncia) {

        console.log(
            "Denúncia não encontrada:",
            codigo
        );

        return;

    }


    // ======================================================
    // PREENCHER DADOS
    // ======================================================

    const codigoFormatado =
        "#" + denuncia.codigo;


    if (codigoDenuncia) {

        codigoDenuncia.textContent =
            codigoFormatado;

    }


    if (codigoInfo) {

        codigoInfo.textContent =
            codigoFormatado;

    }


    if (statusDenuncia) {

        statusDenuncia.textContent =
            denuncia.status;

    }


    if (statusInfo) {

        statusInfo.textContent =
            denuncia.status;

    }


    if (dataEnvio) {

        dataEnvio.textContent =
            `${denuncia.dataRecebimento} às ${denuncia.horaRecebimento}`;

    }


    if (tipoDenuncia) {

        tipoDenuncia.textContent =
            denuncia.tipo;

    }


    if (localOcorrido) {

        localOcorrido.textContent =
            denuncia.local;

    }


});