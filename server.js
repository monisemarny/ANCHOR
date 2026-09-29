// ==========================================================
// SAFEPSI - SERVIDOR
// ==========================================================

const express = require("express");

const app = express();


// ==========================================================
// CONFIGURAÇÕES
// ==========================================================

app.use(express.json());

app.use(express.static(__dirname));


// ==========================================================
// MEMÓRIA DAS SESSÕES
// ==========================================================

const conversas = new Map();


// ==========================================================
// STATUS
// ==========================================================

app.get("/api/status", (req, res) => {

    res.json({

        funcionando: true,

        memoria: true,

        sessoesAtivas:
            conversas.size,

        mensagem:
            "Servidor do SafePsi funcionando!"

    });

});


// ==========================================================
// VERIFICAR PALAVRAS
// ==========================================================

function contemAlguma(
    texto,
    palavras
) {

    return palavras.some(
        palavra =>
            texto.includes(palavra)
    );

}


// ==========================================================
// ESCOLHER RESPOSTA
// ==========================================================

function escolherResposta(
    respostas
) {

    const indice =
        Math.floor(
            Math.random() *
            respostas.length
        );


    return respostas[indice];

}


// ==========================================================
// NORMALIZAR TEXTO
// ==========================================================

function normalizarTexto(
    texto
) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        );

}


// ==========================================================
// GERAR RESPOSTA
// ==========================================================

function gerarResposta(
    texto,
    historico
) {

    const mensagem =
        normalizarTexto(texto);


    // ======================================================
    // RISCO / EMERGÊNCIA
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "quero morrer",
                "quero me matar",
                "me matar",
                "suicidio",
                "suicida",
                "nao quero mais viver",
                "nao quero estar aqui",
                "me machucar",
                "me ferir"
            ]
        )
    ) {

        return (

            "Sinto muito que você esteja passando por " +
            "algo tão difícil. Você não precisa enfrentar " +
            "isso sozinha. Procure agora um adulto de " +
            "confiança ou alguém próximo que possa ficar " +
            "com você. Se houver perigo imediato, procure " +
            "um serviço de emergência da sua região."

        );

    }


    // ======================================================
    // BOM DIA / BOA TARDE / BOA NOITE
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "bom dia",
                "boa tarde",
                "boa noite"
            ]
        )
    ) {

        return escolherResposta([

            "Olá! 💙 Como você está se sentindo hoje?",

            "Oi! Espero que seu dia esteja sendo tranquilo. Quer conversar?",

            "Olá! Estou aqui para ouvir você. Como foi seu dia?"

        ]);

    }


    // ======================================================
    // OI
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "oi",
                "ola",
                "oie",
                "eai",
                "e ai"
            ]
        )
    ) {

        return escolherResposta([

            "Oi! 💙 Como você está se sentindo hoje?",

            "Olá! Estou aqui para conversar com você. Como você está?",

            "Oi! Que bom ter você por aqui. Quer me contar como está?"

        ]);

    }


    // ======================================================
    // TRISTEZA
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "triste",
                "tristeza",
                "chorando",
                "chorei",
                "desanimada",
                "desanimado",
                "desanimo",
                "vazia",
                "vazio",
                "pra baixo",
                "mal"
            ]
        )
    ) {

        return escolherResposta([

            "Sinto muito que você esteja se sentindo assim. 💙 Quer me contar o que aconteceu?",

            "Parece que você está passando por um momento difícil. Pode falar comigo sobre isso.",

            "Entendo. Colocar aquilo que sentimos em palavras pode ajudar a organizar os pensamentos. O que aconteceu?"

        ]);

    }


    // ======================================================
    // ANSIEDADE
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "ansiedade",
                "ansiosa",
                "ansioso",
                "preocupada",
                "preocupado",
                "nervosa",
                "nervoso",
                "estressada",
                "estressado",
                "estresse",
                "panico"
            ]
        )
    ) {

        return escolherResposta([

            "Parece que isso está deixando você bastante preocupada. O que está passando pela sua cabeça?",

            "Entendo. Quando várias preocupações aparecem juntas, pode ser difícil organizar tudo. O que mais está te preocupando?",

            "Vamos por partes. 💙 O que aconteceu para você começar a se sentir assim?"

        ]);

    }


    // ======================================================
    // ESCOLA
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "escola",
                "colegio",
                "prova",
                "professor",
                "professora",
                "trabalho",
                "nota",
                "notas",
                "atividade",
                "curso",
                "sala de aula"
            ]
        )
    ) {

        return escolherResposta([

            "A escola pode trazer bastante pressão. 📚 Quer me contar o que está acontecendo?",

            "Entendo. Estudos, provas e trabalhos podem pesar bastante. O que está acontecendo?",

            "Parece que a escola está ocupando bastante espaço nos seus pensamentos. Quer conversar sobre isso?"

        ]);

    }


    // ======================================================
    // FAMÍLIA
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "familia",
                "mae",
                "pai",
                "irma",
                "irmao",
                "pais",
                "casa",
                "em casa"
            ]
        )
    ) {

        return escolherResposta([

            "Questões familiares podem mexer bastante com a gente. Quer me contar o que aconteceu?",

            "Parece que essa situação familiar está te afetando. O que aconteceu?",

            "Se quiser, pode falar um pouco mais sobre essa situação. Estou ouvindo."

        ]);

    }


    // ======================================================
    // AMIZADES
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "amiga",
                "amigo",
                "amizade",
                "amizades",
                "briguei com minha amiga",
                "briguei com meu amigo",
                "meus amigos",
                "minhas amigas"
            ]
        )
    ) {

        return escolherResposta([

            "Problemas com amizades podem machucar bastante. Quer me contar o que aconteceu?",

            "Entendo. Uma situação com alguém importante para nós pode pesar muito. O que aconteceu?",

            "Parece que essa amizade é importante para você. Quer falar mais sobre isso?"

        ]);

    }


    // ======================================================
    // RELACIONAMENTOS
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "namorada",
                "namorado",
                "relacionamento",
                "terminamos",
                "terminou comigo",
                "terminar",
                "briguei com ela",
                "briguei com ele"
            ]
        )
    ) {

        return escolherResposta([

            "Relacionamentos podem despertar sentimentos muito fortes. Quer me contar o que aconteceu?",

            "Entendo. Quando alguém é importante para nós, situações assim podem pesar bastante. O que aconteceu?",

            "Parece que essa situação está mexendo bastante com você. Quer conversar um pouco mais sobre isso?"

        ]);

    }


    // ======================================================
    // SOLIDÃO
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "me sinto sozinha",
                "me sinto sozinho",
                "ninguem",
                "ninguém",
                "isolada",
                "isolado",
                "sem amigos",
                "sozinha"
            ]
        )
    ) {

        return escolherResposta([

            "Sinto muito que você esteja se sentindo assim. 💙 Quer me contar o que tem feito você se sentir dessa forma?",

            "Essa sensação pode ser bem pesada. Você pode falar comigo sobre o que está acontecendo.",

            "Entendo. Vamos conversar sobre isso com calma. O que tem acontecido ultimamente?"

        ]);

    }


    // ======================================================
    // BULLYING
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "bullying",
                "cyberbullying",
                "zoacao",
                "zoação",
                "humilhando",
                "humilhacao",
                "humilhação",
                "me zoam",
                "estao me zoando"
            ]
        )
    ) {

        return escolherResposta([

            "Sinto muito que você esteja passando por isso. Ninguém merece ser humilhado ou intimidado. Quer contar o que aconteceu?",

            "Isso não precisa ser enfrentado sozinho. Se estiver acontecendo na escola ou online, podemos pensar em alguém de confiança para procurar.",

            "Entendo como uma situação assim pode ser difícil. Quer me explicar um pouco mais sobre o que está acontecendo?"

        ]);

    }


    // ======================================================
    // MEDO
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "estou com medo",
                "tenho medo",
                "assustada",
                "assustado",
                "medo"
            ]
        )
    ) {

        return escolherResposta([

            "Sinto muito que você esteja passando por isso. Quer me contar o que está causando esse medo?",

            "Entendo. Vamos conversar sobre isso com calma. O que aconteceu?",

            "Você pode me contar o que está te deixando com medo."

        ]);

    }


    // ======================================================
    // DESABAFO
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "desabafar",
                "preciso falar",
                "quero conversar",
                "posso falar",
                "preciso conversar"
            ]
        )
    ) {

        return escolherResposta([

            "Claro. 💙 Pode falar comigo.",

            "Pode sim. Estou aqui para ouvir você.",

            "Claro. Conte o que está acontecendo no seu ritmo."

        ]);

    }


    // ======================================================
    // AGRADECIMENTO
    // ======================================================

    if (
        contemAlguma(
            mensagem,
            [
                "obrigada",
                "obrigado",
                "valeu",
                "agradeco"
            ]
        )
    ) {

        return escolherResposta([

            "Por nada. 💙 Espero que conversar tenha ajudado um pouquinho.",

            "Por nada! Pode continuar falando comigo se quiser.",

            "Não precisa agradecer. Estou aqui para ouvir você."

        ]);

    }


    // ======================================================
    // HISTÓRICO
    // ======================================================

    if (
        historico.length >= 8
    ) {

        return escolherResposta([

            "Estou acompanhando o que você vem compartilhando. Quer continuar falando sobre isso?",

            "Entendi. Já temos um pouco de contexto sobre o que você está passando. O que aconteceu depois?",

            "Estou acompanhando você. Quer me contar mais sobre essa situação?"

        ]);

    }


    // ======================================================
    // RESPOSTA PADRÃO
    // ======================================================

    return escolherResposta([

        "Entendi. 💙 Quer me contar um pouco mais sobre isso?",

        "Estou ouvindo. Pode explicar melhor o que aconteceu?",

        "Certo. Quero entender melhor. O que aconteceu?",

        "Pode continuar. Estou aqui para ouvir você.",

        "Entendo. Se quiser, pode me contar um pouco mais."

    ]);

}


// ==========================================================
// RECEBER MENSAGEM
// ==========================================================

app.post(
    "/api/safepsi",
    async (req, res) => {

        try {

            const sessaoId =
                req.body.sessaoId ||
                "sessao-padrao";


            const mensagens =
                Array.isArray(
                    req.body.mensagens
                )
                    ? req.body.mensagens
                    : [];


            if (
                mensagens.length === 0
            ) {

                return res.status(400).json({

                    erro:
                        "Nenhuma mensagem foi enviada."

                });

            }


            // ==============================================
            // RECUPERA HISTÓRICO
            // ==============================================

            let historico =
                conversas.get(
                    sessaoId
                ) || [];


            // Usa o histórico enviado pelo navegador
            historico =
                [...mensagens];


            // ==============================================
            // ÚLTIMA MENSAGEM
            // ==============================================

            const ultimaMensagem =
                historico[
                    historico.length - 1
                ];


            const texto =
                ultimaMensagem.content ||
                "";


            // ==============================================
            // GERA RESPOSTA
            // ==============================================

            const resposta =
                gerarResposta(
                    texto,
                    historico
                );


            // ==============================================
            // SALVA RESPOSTA
            // ==============================================

            historico.push({

                role:
                    "assistant",

                content:
                    resposta

            });


            conversas.set(
                sessaoId,
                historico
            );


            // ==============================================
            // RETORNO
            // ==============================================

            res.json({

                resposta:
                    resposta,

                mensagensNaMemoria:
                    historico.length

            });


        } catch (erro) {

            console.error(
                "Erro no SafePsi:",
                erro
            );


            res.status(500).json({

                erro:
                    "Erro interno do servidor."

            });

        }

    }
);


// ==========================================================
// ENCERRAR CONVERSA
// ==========================================================

app.post(
    "/api/safepsi/encerrar",
    (req, res) => {

        const sessaoId =
            req.body.sessaoId;


        if (sessaoId) {

            conversas.delete(
                sessaoId
            );

        }


        res.json({

            sucesso:
                true,

            mensagem:
                "Conversa encerrada."

        });

    }
);


// ==========================================================
// INICIAR SERVIDOR
// ==========================================================

const PORT = 3000;


app.listen(
    PORT,
    () => {

        console.log(
            `SafePsi rodando em http://localhost:${PORT}`
        );

    }
);