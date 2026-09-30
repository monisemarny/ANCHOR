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


    // ==========================================================
    // FUNÇÃO PARA ENTRAR NA CONTA
    // ==========================================================

    function entrarNaConta(nome) {

        localStorage.setItem("usuarioLogado", "true");

        if (nome) {
            localStorage.setItem("nomeUsuario", nome);
        }

        window.location.href = "index.html";

    }


    // ==========================================================
    // LOGIN NORMAL
    // ==========================================================

    const formLogin = document.querySelector(".card-login form");

    if (formLogin) {

        formLogin.addEventListener("submit", function (event) {

            event.preventDefault();

            console.log("Login realizado!");

            entrarNaConta();

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

    function handleGoogleLogin(response) {

        console.log("Login com Google realizado!");
        console.log(response);

        entrarNaConta();

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

                entrarNaConta("Usuário Facebook");

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
                    console.log(usuario);

                    entrarNaConta(usuario.name);

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

            entrarNaConta("Usuário Apple");

        });

    }

});