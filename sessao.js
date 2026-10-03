// ==========================================================
// ANCHOR - SESSÃO (profissional x usuário)
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    function ler(chave) {

        try {
            return localStorage.getItem(chave) || "";
        } catch (erro) {
            return "";
        }

    }

    const logado = ler("usuarioLogado") === "true";
    const tipo = ler("usuarioTipo");
    const ehProfissional = logado && tipo === "profissional";


    // ======================================================
    // HOME: link "Meu painel" no menu do perfil
    // ======================================================

    const perfilMenu = document.getElementById("perfil-menu");

    if (perfilMenu && ehProfissional && !document.getElementById("link-painel")) {

        const link = document.createElement("a");

        link.id = "link-painel";
        link.href = "painel-profissional.html";
        link.innerHTML = '<i class="fa-solid fa-user-doctor"></i> Meu painel';

        perfilMenu.insertBefore(link, perfilMenu.firstChild);

    }


    // ======================================================
    // PAINEL DO PROFISSIONAL
    // ======================================================

    const nomePro = document.getElementById("nomePro");

    // se não estiver na página do painel, para por aqui
    if (!nomePro) {
        return;
    }

    // proteção: só profissional logado entra
    if (!logado) {
        window.location.href = "login.html";
        return;
    }

    if (tipo !== "profissional") {
        window.location.href = "index.html";
        return;
    }

    // linha com especialidade, CRP e UF
    const crp = ler("usuarioCRP");
    const esp = ler("usuarioEspecialidade");
    const uf = ler("usuarioUF");

    const partes = [];

    if (esp) partes.push(esp);
    if (crp) partes.push("CRP " + crp);
    if (uf) partes.push(uf);

    const dadosPro = document.getElementById("dadosPro");

    if (dadosPro && partes.length) {
        dadosPro.textContent = partes.join(" · ");
    }

    // botão Sair no menu do painel
    const menu = document.querySelector(".menu-principal");

    if (menu) {

        const sair = document.createElement("a");

        sair.href = "#";
        sair.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Sair';

        sair.addEventListener("click", function (evento) {

            evento.preventDefault();

            if (!confirm("Deseja realmente sair da sua conta?")) {
                return;
            }

            try {
                localStorage.removeItem("usuarioLogado");
                localStorage.removeItem("usuarioTipo");
            } catch (erro) {}

            window.location.href = "login.html";

        });

        menu.appendChild(sair);

    }

});