window.addEventListener("load", function () {

    // ==========================================================
    // ANCHOR - LOGIN
    // ==========================================================


    // ==========================================================
    // FUNÇÃO PARA ENTRAR NA CONTA
    // ==========================================================

    function entrarNaConta() {

        // Salva no navegador que existe uma sessão ativa
        localStorage.setItem("usuarioLogado", "true");

        // Vai para a página inicial
        window.location.href = "index.html";

    }


    // ==========================================================
    // LOGIN NORMAL
    // ==========================================================

    const formLogin =
        document.querySelector(".card-login form");


    if (formLogin) {

        formLogin.addEventListener("submit", function (event) {

            event.preventDefault();


            // Aqui futuramente vamos validar
            // o e-mail e a senha no banco de dados.

            console.log("Login realizado!");


            entrarNaConta();

        });

    }


    // ==========================================================
    // GOOGLE
    // ==========================================================

    google.accounts.id.initialize({

        // Client ID do Google
        client_id: "142909672089-sblg6u21smjgde4jrlal8nbinf0lg6r7.apps.googleusercontent.com",

        // Função executada depois que a pessoa escolher
        // uma conta do Google
        callback: handleGoogleLogin

    });


    // ==========================================================
    // BOTÃO DO GOOGLE
    // ==========================================================

    const googleButton =
        document.getElementById("googleButton");


    google.accounts.id.renderButton(
        googleButton,
        {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "continue_with",
            shape: "rectangular",

            // Tamanho do botão
            width: 400,

            // Ícone do Google no lado esquerdo
            logo_alignment: "left"
        }
    );


    // ==========================================================
    // RESPOSTA DO GOOGLE
    // ==========================================================

    function handleGoogleLogin(response) {

        console.log("Login com Google realizado!");

        console.log("Resposta recebida do Google:");
        console.log(response);

        console.log("ID Token:");
        console.log(response.credential);


        // Marca a pessoa como logada
        entrarNaConta();

    }


    // ==========================================================
    // FACEBOOK
    // ==========================================================

    const btnFacebook =
        document.getElementById("btnFacebook");


    btnFacebook.addEventListener("click", function () {

        console.log("Login com Facebook selecionado!");


        // Simulação de login
        entrarNaConta();

    });


    // ==========================================================
    // APPLE
    // ==========================================================

    const btnApple =
        document.getElementById("btnApple");


    btnApple.addEventListener("click", function () {

        console.log("Login com Apple selecionado!");


        // Simulação de login
        entrarNaConta();

    });

});