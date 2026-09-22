window.addEventListener("load", function () {

    // ==========================================================
    // ANCHOR - LOGIN
    // ==========================================================


    // ==========================================================
    // GOOGLE
    // ==========================================================

    google.accounts.id.initialize({

        // COLOQUE SEU CLIENT ID ENTRE AS ASPAS
        client_id: "142909672089-sblg6u21smjgde4jrlal8nbinf0lg6r7.apps.googleusercontent.com",

        // Função executada depois que a pessoa escolher
        // uma conta do Google
        callback: handleGoogleLogin

    });


    // Cria o botão oficial do Google
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


    // ==========================================================
    // RESPOSTA DO GOOGLE
    // ==========================================================

    function handleGoogleLogin(response) {

        console.log("Login com Google realizado!");

        console.log("Resposta recebida do Google:");
        console.log(response);

        console.log("ID Token:");
        console.log(response.credential);


        alert("Conta Google selecionada com sucesso!");
    }


    // ==========================================================
    // FACEBOOK
    // ==========================================================

    const btnFacebook =
        document.getElementById("btnFacebook");

    btnFacebook.addEventListener("click", function () {

        alert("Login com Facebook selecionado!");

    });


    // ==========================================================
    // APPLE
    // ==========================================================

    const btnApple =
        document.getElementById("btnApple");

    btnApple.addEventListener("click", function () {

        alert("Login com Apple selecionado!");

    });

});