window.addEventListener("load", function () {

    // ==========================================================
    // ANCHOR - LOGIN
    // ==========================================================


    // ==========================================================
    // CONFIGURAÇÕES
    // ==========================================================

    // Cole aqui o App ID do Facebook quando criar o app.
    // Enquanto estiver vazio, o botão funciona em modo demonstração.
    const FACEBOOK_APP_ID = "";

    const CHAVE_CONTAS = "anchorContas";


    // ==========================================================
    // CONTAS E SESSÃO
    // ==========================================================

    function lerContas() {

        try {
            return JSON.parse(localStorage.getItem(CHAVE_CONTAS)) || [];
        } catch (erro) {
            return [];
        }

    }

    function iniciarSessao(dados) {

        try {

            // se for outra conta, limpa foto e redes da anterior
            const anterior = localStorage.getItem("usuarioEmail");

            if (dados.email && anterior && anterior !== dados.email) {
                localStorage.removeItem("usuarioFoto");
                localStorage.removeItem("usuarioRedes");
            }

            localStorage.setItem("usuarioLogado", "true");
            localStorage.setItem("usuarioTipo", dados.tipo);

            if (dados.nome) {
                localStorage.setItem("usuarioNome", dados.nome);
            }

            if (dados.email) {
                localStorage.setItem("usuarioEmail", dados.email);
            }

            localStorage.setItem("usuarioTelefone", dados.telefone || "");

            if (dados.tipo === "profissional") {

                localStorage.setItem("usuarioCRP", dados.crp || "");
                localStorage.setItem("usuarioUF", dados.uf || "");
                localStorage.setItem("usuarioEspecialidade", dados.especialidade || "");

            } else {

                localStorage.removeItem("usuarioCRP");
                localStorage.removeItem("usuarioUF");
                localStorage.removeItem("usuarioEspecialidade");

            }

        } catch (erro) {
            console.log("Não foi possível salvar a sessão.", erro);
        }

    }

    function irParaInicio(tipo) {

        window.location.href = tipo === "profissional"
            ? "painel-profissional.html"
            : "index.html";

    }

    // Login por rede social: entra como usuário comum
    function entrarPorRede(nome, email) {

        iniciarSessao({
            tipo: "usuario",
            nome: nome,
            email: email || ""
        });

        irParaInicio("usuario");

    }


    // ==========================================================
    // LOGIN NORMAL
    // ==========================================================

    const formLogin = document.querySelector(".card-login form");

    if (formLogin) {

        formLogin.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim().toLowerCase();
            const senha = document.getElementById("senha").value;

            const conta = lerContas().find(function (item) {
                return item.email === email && item.senha === senha;
            });

            if (!conta) {

                alert(
                    'E-mail ou senha incorretos.\n\n' +
                    'Se você ainda não tem conta, clique em "Criar conta".'
                );

                return;

            }

            console.log("Login realizado!");

            iniciarSessao(conta);

            irParaInicio(conta.tipo);

        });

    }


    // ==========================================================
    // MOSTRAR / ESCONDER SENHA
    // ==========================================================

    const mostrarSenha = document.getElementById("mostrarSenha");
    const campoSenha = document.getElementById("senha");

    if (mostrarSenha && campoSenha) {

        mostrarSenha.addEventListener("click", function () {

            const escondida = campoSenha.type === "password";

            campoSenha.type = escondida ? "text" : "password";

            mostrarSenha.innerHTML = escondida
                ? '<i class="fa-regular fa-eye-slash"></i>'
                : '<i class="fa-regular fa-eye"></i>';

        });

    }


    // ==========================================================
    // GOOGLE
    // ==========================================================

    // Lê nome e e-mail de dentro do token que o Google devolve
    function lerTokenGoogle(token) {

        try {

            const base64 = token
                .split(".")[1]
                .replace(/-/g, "+")
                .replace(/_/g, "/");

            const json = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
            );

            return JSON.parse(json);

        } catch (erro) {
            return null;
        }

    }

    function handleGoogleLogin(response) {

        console.log("Login com Google realizado!");

        const dados = lerTokenGoogle(response.credential);

        entrarPorRede(
            dados && dados.name ? dados.name : "Usuário Google",
            dados && dados.email ? dados.email.toLowerCase() : ""
        );

    }

    if (window.google && google.accounts) {

        google.accounts.id.initialize({
            client_id: "142909672089-sblg6u21smjgde4jrlal8nbinf0lg6r7.apps.googleusercontent.com",
            callback: handleGoogleLogin
        });

        google.accounts.id.renderButton(
            document.getElementById("googleButton"),
            {
                type: "standard",
                theme: "outline",
                size: "large",
                text: "continue_with",
                shape: "rectangular",
                width: 400,
                logo_alignment: "left"
            }
        );

    }


    // ==========================================================
    // FACEBOOK
    // ==========================================================

    // Carrega o SDK do Facebook só se existir App ID
    if (FACEBOOK_APP_ID) {

        window.fbAsyncInit = function () {

            FB.init({
                appId: FACEBOOK_APP_ID,
                cookie: true,
                xfbml: false,
                // use a versão que aparece no painel da Meta
                version: "v21.0"
            });

        };

        const scriptFacebook = document.createElement("script");
        scriptFacebook.src = "https://connect.facebook.net/pt_BR/sdk.js";
        scriptFacebook.async = true;
        scriptFacebook.defer = true;
        scriptFacebook.crossOrigin = "anonymous";

        document.body.appendChild(scriptFacebook);

    }


    const btnFacebook = document.getElementById("btnFacebook");

    if (btnFacebook) {

        btnFacebook.addEventListener("click", function () {

            // MODO DEMONSTRAÇÃO (sem App ID)
            if (!FACEBOOK_APP_ID || typeof FB === "undefined") {

                console.log("Login com Facebook (demonstração)");

                entrarPorRede("Usuário Facebook");

                return;

            }

            // MODO REAL
            FB.login(function (resposta) {

                if (!resposta.authResponse) {

                    console.log("Login com Facebook cancelado.");

                    return;

                }

                FB.api("/me", { fields: "name,email" }, function (usuario) {

                    console.log("Login com Facebook realizado!");

                    entrarPorRede(usuario.name, usuario.email);

                });

            }, { scope: "public_profile,email" });

        });

    }


    // ==========================================================
    // APPLE (DEMONSTRAÇÃO)
    // ==========================================================

    // O login real da Apple exige conta de desenvolvedor paga
    // e domínio com HTTPS. Aqui é apenas uma demonstração.

    const btnApple = document.getElementById("btnApple");

    if (btnApple) {

        btnApple.addEventListener("click", function () {

            console.log("Login com Apple (demonstração)");

            entrarPorRede("Usuário Apple");

        });

    }

});