// ==========================================================
// ANCHOR - PÁGINA DE INFORMAÇÕES
// ==========================================================


// ==========================================================
// ELEMENTOS DA PÁGINA
// ==========================================================

const cardsCategoria = document.querySelectorAll(".card-categoria");

const secaoConteudo = document.getElementById("conteudoCategoria");
const categoriaDetalhes = document.getElementById("categoriaDetalhes");
const iconeCategoria = document.getElementById("iconeCategoria");
const categoriaTag = document.getElementById("categoriaTag");
const categoriaTitulo = document.getElementById("categoriaTitulo");
const categoriaDescricao = document.getElementById("categoriaDescricao");
const listaConteudos = document.getElementById("listaConteudos");

// Área onde a matéria aberta aparece (criada aqui, não precisa de HTML)
const leitor = document.createElement("div");
leitor.id = "leitorMateria";
leitor.className = "leitor-materia";
listaConteudos.insertAdjacentElement("afterend", leitor);


// ==========================================================
// CONTEÚDOS DAS CATEGORIAS
// ==========================================================

const categorias = {

    direitos: {
        tag: "DIREITOS",
        titulo: "Conheça seus direitos",
        descricao: "Informações para conhecer seus direitos, reconhecer situações de desrespeito e saber onde procurar orientação.",
        icone: "fa-scale-balanced",
        conteudos: [
            { titulo: "Conheça seus direitos", descricao: "Informações para compreender seus direitos e saber quando eles podem estar sendo desrespeitados." },
            { titulo: "Igualdade e respeito", descricao: "Entenda a importância do respeito, da dignidade e da igualdade entre as pessoas." },
            { titulo: "Situações de violência", descricao: "Aprenda a reconhecer situações que podem representar violações de direitos." },
            { titulo: "Onde procurar orientação", descricao: "Conheça caminhos para buscar informações, orientação e apoio." }
        ]
    },

    saude: {
        tag: "SAÚDE",
        titulo: "Cuide da sua saúde",
        descricao: "Informações para ajudar você a cuidar da saúde física e emocional.",
        icone: "fa-heart-pulse",
        conteudos: [
            { titulo: "Saúde física", descricao: "Cuidados importantes para manter uma rotina saudável." },
            { titulo: "Saúde mental", descricao: "Entenda a importância de cuidar também da sua saúde emocional." },
            { titulo: "Quando procurar ajuda", descricao: "Saiba identificar quando é importante buscar atendimento profissional." },
            { titulo: "Serviços de saúde", descricao: "Conheça serviços públicos e locais onde você pode procurar atendimento." }
        ]
    },

    autocuidado: {
        tag: "AUTOCUIDADO",
        titulo: "Cuide de você",
        descricao: "Pequenas atitudes podem ajudar a preservar seu bem-estar e sua segurança.",
        icone: "fa-hand-holding-heart",
        conteudos: [
            { titulo: "Conheça seus limites", descricao: "Aprenda a reconhecer seus limites e respeitar suas próprias necessidades." },
            { titulo: "Cuidados emocionais", descricao: "Atitudes que podem contribuir para o seu bem-estar emocional." },
            { titulo: "Relacionamentos saudáveis", descricao: "Informações sobre respeito, confiança e limites nos relacionamentos." },
            { titulo: "Busque apoio", descricao: "Não enfrente situações difíceis sozinho. Saiba quando procurar ajuda." }
        ]
    },

    prevencao: {
        tag: "PREVENÇÃO",
        titulo: "Prevenir também é cuidar",
        descricao: "Informação e atenção podem ajudar a evitar situações de risco.",
        icone: "fa-shield-heart",
        conteudos: [
            { titulo: "Prevenção da violência", descricao: "Conheça atitudes que podem ajudar na prevenção de diferentes tipos de violência." },
            { titulo: "Identifique situações de risco", descricao: "Aprenda a perceber sinais que podem indicar uma situação perigosa." },
            { titulo: "Proteção", descricao: "Conheça formas de buscar proteção e apoio quando necessário." },
            { titulo: "Informação salva", descricao: "Ter informações corretas ajuda a tomar decisões mais seguras." }
        ]
    },

    digital: {
        tag: "DIGITAL",
        titulo: "Segurança no ambiente digital",
        descricao: "Informações para navegar na internet de maneira mais segura e consciente.",
        icone: "fa-globe",
        conteudos: [
            { titulo: "Privacidade na internet", descricao: "Cuidados importantes para proteger seus dados e informações pessoais." },
            { titulo: "Cyberbullying", descricao: "Entenda o que é violência virtual e como procurar ajuda." },
            { titulo: "Golpes virtuais", descricao: "Aprenda a reconhecer situações que podem representar golpes na internet." },
            { titulo: "Uso responsável das redes", descricao: "Dicas para utilizar redes sociais de maneira consciente e segura." }
        ]
    },

    ajuda: {
        tag: "AJUDA",
        titulo: "Onde encontrar ajuda",
        descricao: "Conheça serviços e canais que podem oferecer orientação e apoio.",
        icone: "fa-handshake-angle",
        conteudos: [
            { titulo: "Canais de apoio", descricao: "Conheça canais que podem ajudar em diferentes situações." },
            { titulo: "Atendimento psicológico", descricao: "Saiba onde procurar apoio para questões emocionais." },
            { titulo: "Serviços públicos", descricao: "Conheça serviços públicos que podem oferecer atendimento e orientação." },
            { titulo: "Emergências", descricao: "Em situações de emergência, saiba quais serviços procurar." }
        ]
    },

    violencias: {
        tag: "VIOLÊNCIAS",
        titulo: "Reconheça diferentes formas de violência",
        descricao: "Informação para reconhecer situações de violência e saber onde procurar ajuda.",
        icone: "fa-triangle-exclamation",
        conteudos: [
            { titulo: "Violência doméstica", descricao: "Conheça sinais e informações sobre violência dentro de relações familiares ou afetivas." },
            { titulo: "Bullying e cyberbullying", descricao: "Entenda essas formas de violência e saiba como buscar ajuda." },
            { titulo: "Violência contra grupos", descricao: "Conheça situações relacionadas a preconceito, discriminação e intolerância." },
            { titulo: "Denuncie", descricao: "Saiba como procurar os canais adequados para realizar uma denúncia." }
        ]
    },

    conteudos: {
        tag: "CONTEÚDOS",
        titulo: "Informação para você",
        descricao: "Materiais educativos para ampliar o conhecimento e ajudar na prevenção.",
        icone: "fa-book-open",
        conteudos: [
            { titulo: "Notícias", descricao: "Acompanhe informações e conteúdos relacionados aos temas abordados pelo Anchor." },
            { titulo: "Materiais educativos", descricao: "Conteúdos para aprender mais sobre prevenção, direitos e segurança." },
            { titulo: "Orientações", descricao: "Informações simples para ajudar você a entender diferentes situações." },
            { titulo: "Saiba mais", descricao: "Explore outros conteúdos disponíveis na plataforma." }
        ]
    },

    "como-funciona": {
        tag: "DENÚNCIAS",
        titulo: "Como funciona o sistema de denúncias?",
        descricao: "Entenda cada etapa do processo de denúncia dentro do Anchor.",
        icone: "fa-route",
        conteudos: []
    }

};


// ==========================================================
// MATÉRIAS (abrem dentro da própria página)
// Cada matéria: intro, pontos [título, texto], dica e link opcional
// ==========================================================

const materias = {

    // ---------------- AUTOCUIDADO ----------------
    autocuidado: [

        {
            intro: "Limites são o que você aceita ou não em cada situação. Respeitá-los não é egoísmo: é uma forma de se proteger e de manter relações mais saudáveis.",
            pontos: [
                ["Perceba o seu corpo", "Cansaço, aperto no peito e irritação constante podem indicar que algo ultrapassou o que você aguenta."],
                ["Aprenda a dizer não", "Você pode recusar um pedido sem se justificar demais. Um não claro e educado já é suficiente."],
                ["Peça pausa quando precisar", "Descansar, desligar o celular ou se afastar de uma conversa também é cuidar de você."]
            ],
            dica: "Se alguém insiste em ultrapassar os seus limites, ameaça ou pressiona você, isso pode ser um sinal de abuso. Converse com alguém de confiança."
        },

        {
            intro: "Cuidar das emoções faz parte da saúde, assim como dormir bem e se alimentar. Pequenos hábitos diários ajudam a lidar melhor com o estresse.",
            pontos: [
                ["Nomeie o que sente", "Dizer em palavras o que está sentindo, para você ou para alguém, alivia e ajuda a entender o motivo."],
                ["Mantenha uma rotina", "Dormir em horários parecidos, se movimentar um pouco e fazer pausas ajudam o humor mais do que parece."],
                ["Reserve tempo para o que gosta", "Música, desenho, esporte ou conversar com amigos são formas simples de recarregar as energias."]
            ],
            dica: "Tristeza, ansiedade ou desânimo que duram semanas e atrapalham o dia a dia merecem atenção profissional. Pedir ajuda é um ato de cuidado."
        },

        {
            intro: "Um bom relacionamento, seja de amizade, família ou namoro, tem respeito, confiança e liberdade. Ninguém precisa abrir mão de quem é para ser aceito.",
            pontos: [
                ["Respeito e confiança", "As pessoas conversam, ouvem uma à outra e aceitam as diferenças sem humilhação."],
                ["Liberdade", "Você pode ter amigos, opinião e vida própria, sem ser vigiado ou controlado."],
                ["Sinais de alerta", "Ciúme excessivo, controle do celular, isolamento dos amigos, ameaças e xingamentos não são prova de amor."]
            ],
            dica: "Violência não é normal em nenhuma relação. Se algo parece errado, converse com alguém de confiança e procure orientação."
        },

        {
            intro: "Passar por um momento difícil sozinho pesa mais. Falar com alguém é um primeiro passo, e existem pessoas e serviços preparados para ouvir.",
            pontos: [
                ["Alguém de confiança", "Um familiar, amigo, professor ou outro adulto pode ouvir e ajudar a pensar nos próximos passos."],
                ["Profissionais", "Psicólogos e serviços de saúde podem acompanhar você com cuidado e sigilo."],
                ["Canais gratuitos", "O CVV atende gratuitamente pelo 188, a qualquer hora, para quem quer conversar."]
            ],
            dica: "Se você ou alguém estiver em risco imediato, ligue 192 (SAMU) ou 190 (Polícia).",
            link: ["Conhecer o apoio psicológico", "ajuda-psicologica.html"]
        }

    ],


    // ---------------- PREVENÇÃO ----------------
    prevencao: [

        {
            intro: "Prevenir é agir antes que a violência aconteça. Informação, respeito e conversa ajudam a interromper ciclos de agressão.",
            pontos: [
                ["Converse sobre respeito", "Em casa, na escola e entre amigos, falar sobre limites e consentimento evita muitas situações."],
                ["Não ignore pequenos sinais", "Xingamentos, humilhações e controle costumam vir antes de agressões mais graves."],
                ["Seja alguém que acolhe", "Ouvir sem julgar facilita que uma pessoa peça ajuda."]
            ],
            dica: "Presenciou uma situação de violência? Prefira avisar um adulto ou os serviços responsáveis, sem se colocar em risco."
        },

        {
            intro: "Reconhecer sinais de perigo cedo ajuda a se proteger. Confiar na sua percepção também importa: se algo parece errado, vale prestar atenção.",
            pontos: [
                ["Mudanças de comportamento", "Medo, isolamento, queda no rendimento ou tristeza repentina podem indicar que algo não vai bem."],
                ["Controle e ameaças", "Quem vigia, proíbe, ameaça ou chantageia está ultrapassando limites."],
                ["Ambientes inseguros", "Lugares e situações em que você se sente pressionado ou sem saída pedem cuidado e ajuda."]
            ],
            dica: "Combine com alguém de confiança uma forma de pedir ajuda rapidamente, como uma palavra ou mensagem combinada."
        },

        {
            intro: "Proteção envolve cuidados do dia a dia e saber a quem recorrer. Ela existe para você e para as pessoas ao seu redor.",
            pontos: [
                ["Tenha uma rede de apoio", "Saiba com quem você pode contar e guarde contatos importantes."],
                ["Guarde informações", "Datas, mensagens e fotos podem ajudar depois, desde que você consiga guardá-las com segurança."],
                ["Conheça seus direitos", "Existem leis e serviços de proteção, como as medidas protetivas em casos de violência doméstica."]
            ],
            dica: "Em perigo imediato, ligue 190. Sua segurança vem antes de qualquer prova."
        },

        {
            intro: "Quem sabe o que fazer decide melhor e mais rápido. Informação confiável reduz o medo e mostra caminhos.",
            pontos: [
                ["Procure fontes confiáveis", "Prefira sites oficiais do governo, serviços públicos e instituições conhecidas."],
                ["Cuidado com boatos", "Antes de compartilhar, confira se a notícia vem de uma fonte séria."],
                ["Compartilhe o que aprende", "Passar informação certa adiante pode ajudar um amigo ou familiar."]
            ],
            dica: "O Anchor é informativo e não substitui atendimento profissional, médico, jurídico ou policial."
        }

    ],


    // ---------------- SEGURANÇA DIGITAL ----------------
    digital: [

        {
            intro: "Tudo o que você publica ou envia pode ser copiado e circular. Proteger seus dados é proteger você.",
            pontos: [
                ["Senhas fortes", "Use senhas longas e diferentes em cada conta e ative a verificação em duas etapas quando possível."],
                ["Pense antes de postar", "Evite divulgar endereço, escola, rotina, documentos e fotos íntimas."],
                ["Configure a privacidade", "Revise quem pode ver suas publicações e quem pode falar com você."]
            ],
            dica: "Nunca compartilhe códigos de verificação, mesmo com alguém que diga ser de uma empresa."
        },

        {
            intro: "Cyberbullying é a humilhação, ameaça ou perseguição repetida pela internet. Pode atingir muita gente rapidamente e afetar a saúde emocional.",
            pontos: [
                ["O que fazer", "Não responda com agressão, guarde prints com data e horário e bloqueie quem agride."],
                ["Denuncie na plataforma", "As redes sociais têm ferramentas para denunciar perfis e conteúdos."],
                ["Conte para alguém", "Um adulto de confiança ou a escola podem ajudar a interromper a situação."]
            ],
            dica: "A culpa nunca é de quem sofre. Ameaças e exposição da intimidade podem ser crimes e devem ser denunciadas.",
            link: ["Fazer uma denúncia", "denuncia.html"]
        },

        {
            intro: "Golpistas usam pressa, medo e promessas fáceis para enganar. Desconfiar e conferir antes de agir evita prejuízo.",
            pontos: [
                ["Sinais de golpe", "Ofertas boas demais, pedidos de pagamento urgente e links desconhecidos são sinais clássicos."],
                ["Confirme por outro canal", "Se alguém pedir dinheiro em nome de um conhecido, ligue para a pessoa antes de pagar."],
                ["Nunca passe seus dados", "Bancos não pedem senha ou código por mensagem."]
            ],
            dica: "Foi vítima de golpe? Avise o banco imediatamente, guarde as provas e registre um boletim de ocorrência."
        },

        {
            intro: "As redes aproximam as pessoas, mas também expõem. Usar com consciência protege você e respeita os outros.",
            pontos: [
                ["Respeito também online", "Ofensas, piadas que humilham e exposição de outras pessoas machucam de verdade."],
                ["Cuidado com desconhecidos", "Nem todo perfil é quem diz ser. Evite encontros e conversas privadas com quem você não conhece."],
                ["Faça pausas", "Tempo demais nas telas pode afetar o sono, o humor e os estudos."]
            ],
            dica: "Se alguém pedir fotos íntimas ou ameaçar expor você, não ceda, guarde as provas e procure um adulto de confiança."
        }

    ],


    // ---------------- ONDE PROCURAR AJUDA ----------------
    ajuda: [

        {
            intro: "Existem canais gratuitos para diferentes situações. Conhecer os principais ajuda a saber a quem recorrer.",
            pontos: [
                ["188 · CVV", "Apoio emocional gratuito, 24 horas por dia, para quem quer conversar."],
                ["180 · Central da Mulher", "Atendimento para mulheres em situação de violência."],
                ["100 · Direitos Humanos", "Recebe denúncias de violações, como violência contra crianças, idosos e pessoas LGBTQIA+."]
            ],
            dica: "Números e horários podem mudar. Confirme sempre em canais oficiais.",
            link: ["Ver a página do CVV", "cvv188.html"]
        },

        {
            intro: "Conversar com um psicólogo ajuda a entender as emoções e a lidar com momentos difíceis. Não é só para quem está em crise.",
            pontos: [
                ["Pelo SUS", "As UBS encaminham para atendimento, e os CAPS atendem casos mais intensos de sofrimento psíquico."],
                ["Clínicas-escola", "Faculdades de Psicologia costumam oferecer atendimento a baixo custo."],
                ["No Anchor", "Você pode conhecer os profissionais e agendar um atendimento."]
            ],
            dica: "Procurar um psicólogo não é sinal de fraqueza. É um cuidado com a saúde.",
            link: ["Ir para Ajuda Psicológica", "ajuda-psicologica.html"]
        },

        {
            intro: "Vários serviços públicos atendem gratuitamente. Cada um cuida de um tipo de situação.",
            pontos: [
                ["CRAS e CREAS", "Assistência social para famílias e proteção para pessoas em situação de violência ou violação de direitos."],
                ["Conselho Tutelar", "Protege crianças e adolescentes e recebe denúncias de abuso e negligência."],
                ["Defensoria Pública", "Orientação jurídica gratuita para quem não pode pagar um advogado."]
            ],
            dica: "As delegacias, inclusive as especializadas como a Delegacia da Mulher, também registram ocorrências."
        },

        {
            intro: "Em risco imediato à vida ou à segurança, ligar rápido faz diferença. Esses números são gratuitos.",
            pontos: [
                ["190 · Polícia", "Crimes em andamento, ameaças e situações de perigo."],
                ["192 · SAMU", "Urgências médicas, como acidentes e mal-estar grave."],
                ["193 · Bombeiros", "Incêndios, resgates e acidentes."]
            ],
            dica: "Mantenha a calma, diga onde você está e o que aconteceu, e siga as orientações do atendente.",
            link: ["Ver os números de emergência", "index.html#emergencia"]
        }

    ],


    // ---------------- VIOLÊNCIAS ----------------
    violencias: [

        {
            intro: "É a violência que acontece dentro de casa ou em relações familiares e afetivas. Pode ser física, psicológica, sexual, patrimonial ou moral.",
            pontos: [
                ["Sinais", "Agressões, ameaças, humilhações, controle do dinheiro e do celular e isolamento da família e dos amigos."],
                ["Ciclo da violência", "Muitas vezes há agressão, pedido de desculpas e promessa de mudança, e depois tudo se repete."],
                ["Onde buscar ajuda", "Ligue 180, procure uma delegacia ou o CREAS. Existem medidas protetivas de urgência."]
            ],
            dica: "Em perigo imediato, ligue 190. Violência doméstica é crime, e a culpa nunca é da vítima.",
            link: ["Fazer uma denúncia", "denuncia.html"]
        },

        {
            intro: "É a violência repetida, física ou psicológica, entre pessoas, na escola ou na internet. A lei brasileira prevê ações de combate à intimidação sistemática.",
            pontos: [
                ["Como se manifesta", "Apelidos que humilham, exclusão, agressões, ameaças e exposição em redes ou grupos."],
                ["Efeitos", "Pode causar medo de ir à escola, tristeza, queda nas notas e isolamento."],
                ["O que fazer", "Conte para um adulto de confiança, avise a escola e guarde provas, como prints."]
            ],
            dica: "Quem presencia também pode ajudar: não ria, acolha a vítima e avise um adulto."
        },

        {
            intro: "Preconceito e discriminação atingem pessoas por raça, religião, origem, orientação sexual, identidade de gênero, deficiência ou idade. Nenhuma diferença justifica violência.",
            pontos: [
                ["Formas", "Ofensas, exclusão, negar serviços, ameaças e agressões."],
                ["É crime", "Racismo e discriminação por raça, cor, etnia, religião ou procedência são crimes. A discriminação por orientação sexual e identidade de gênero também pode ser punida."],
                ["Como agir", "Registre o ocorrido, guarde provas se for seguro e denuncie."]
            ],
            dica: "O Disque 100 recebe denúncias de violações de direitos humanos.",
            link: ["Conhecer os tipos de denúncia", "tipos-denuncia.html"]
        },

        {
            intro: "Denunciar ajuda a proteger a vítima e a interromper a violência. Você pode denunciar uma situação que viveu ou que presenciou.",
            pontos: [
                ["Onde denunciar", "Delegacias, Disque 100, Ligue 180 e canais oficiais de cada serviço. No Anchor, você registra e acompanha por um código."],
                ["O que informar", "O que aconteceu, quando, onde e quem estava envolvido, o máximo que você souber."],
                ["Anonimato", "Alguns canais aceitam denúncia anônima. Veja as regras de cada um."]
            ],
            dica: "Não se coloque em risco para conseguir provas. Em perigo imediato, ligue 190.",
            link: ["Fazer uma denúncia", "denuncia.html"]
        }

    ],


    // ---------------- CONTEÚDOS ----------------
    conteudos: [

        {
            intro: "Acompanhar notícias ajuda a entender o que acontece e como outras pessoas lidam com situações parecidas.",
            pontos: [
                ["Temas", "Direitos, segurança, saúde, tecnologia e educação."],
                ["Fontes", "As notícias do Anchor indicam a fonte original, para você conferir."],
                ["Leia com atenção", "Compare diferentes fontes antes de compartilhar uma informação."]
            ],
            dica: "Notícias podem tratar de assuntos difíceis. Se algo incomodar, faça uma pausa e converse com alguém.",
            link: ["Ver as notícias", "noticias.html"]
        },

        {
            intro: "Conteúdos educativos explicam temas de forma simples e ajudam a prevenir situações de risco.",
            pontos: [
                ["Para estudar", "Reúna informações sobre direitos, prevenção e segurança digital para trabalhos e conversas."],
                ["Para conversar", "Use os temas para debater com família, amigos e colegas."],
                ["Fontes oficiais", "Governo federal, ministérios e a legislação são boas referências."]
            ],
            dica: "Cite sempre as fontes quando usar informações em trabalhos.",
            link: ["Ler sobre direitos", "conheca-direitos.html"]
        },

        {
            intro: "Orientações simples ajudam a entender o que fazer em cada situação.",
            pontos: [
                ["Primeiro, segurança", "Se houver risco, afaste-se e procure ajuda antes de qualquer outra coisa."],
                ["Depois, registre", "Anote datas, locais e o que aconteceu, enquanto você lembra."],
                ["Por fim, peça ajuda", "Escolha o canal mais adequado: denúncia, apoio psicológico ou serviços públicos."]
            ],
            dica: "Cada caso é diferente. Um profissional pode orientar melhor a sua situação.",
            link: ["Buscar apoio psicológico", "ajuda-psicologica.html"]
        },

        {
            intro: "O Anchor reúne várias áreas em um só lugar. Explore para encontrar o que você precisa.",
            pontos: [
                ["Denúncias", "Registre uma denúncia e acompanhe o andamento pelo código."],
                ["Apoio emocional", "Conheça profissionais e agende um atendimento."],
                ["Informação", "Direitos, saúde, prevenção, segurança digital e muito mais."]
            ],
            dica: "A plataforma tem finalidade informativa e não substitui atendimento profissional.",
            link: ["Conhecer os tipos de denúncia", "tipos-denuncia.html"]
        }

    ]

};


// ==========================================================
// HTML ESPECIAL DO "COMO FUNCIONA"
// ==========================================================

const htmlComoFunciona = `

    <div class="intro-como-funciona">
        <p>
            O sistema de denúncias do Anchor foi pensado para organizar
            as informações recebidas e permitir que o usuário acompanhe
            o andamento da denúncia.
        </p>
    </div>

    <div class="passos-denuncia">

        <article class="passo-denuncia">
            <div class="numero-passo">01</div>
            <div class="conteudo-passo">
                <span>PRIMEIRO PASSO</span>
                <h3>Descreva o ocorrido</h3>
                <p>Conte o que aconteceu, incluindo informações importantes sobre a situação, quando ocorreu e onde aconteceu.</p>
            </div>
        </article>

        <article class="passo-denuncia">
            <div class="numero-passo">02</div>
            <div class="conteudo-passo">
                <span>SEGUNDO PASSO</span>
                <h3>Envie provas</h3>
                <p>Quando existirem, você poderá enviar fotos, documentos ou outros arquivos que ajudem a explicar a situação.</p>
                <small class="passo-opcional">Opcional</small>
            </div>
        </article>

        <article class="passo-denuncia">
            <div class="numero-passo">03</div>
            <div class="conteudo-passo">
                <span>TERCEIRO PASSO</span>
                <h3>Análise da denúncia</h3>
                <p>Após o envio, a denúncia é recebida e passa por uma etapa de análise das informações registradas.</p>
            </div>
        </article>

        <article class="passo-denuncia">
            <div class="numero-passo">04</div>
            <div class="conteudo-passo">
                <span>QUARTO PASSO</span>
                <h3>Acompanhamento</h3>
                <p>Depois de enviar sua denúncia, você recebe um código que pode ser utilizado para consultar seu andamento.</p>
            </div>
        </article>

    </div>

    <div class="informacoes-denuncia">

        <article class="info-denuncia seguranca">
            <div class="icone-info-denuncia"><i class="fa-solid fa-shield-halved"></i></div>
            <h3>Sua segurança</h3>
            <p>As informações fornecidas devem ser utilizadas de forma responsável dentro do sistema de denúncias.</p>
        </article>

        <article class="info-denuncia anchor">
            <div class="icone-info-denuncia"><i class="fa-solid fa-anchor"></i></div>
            <h3>Quando utilizar o Anchor</h3>
            <p>Utilize a plataforma para registrar situações que precisam ser comunicadas e acompanhadas.</p>
        </article>

        <article class="info-denuncia importante">
            <div class="icone-info-denuncia"><i class="fa-solid fa-circle-info"></i></div>
            <h3>Importante</h3>
            <p>Em situações que representem perigo imediato, procure os serviços de emergência adequados da sua região.</p>
        </article>

    </div>

    <div class="emergencia-denuncia">

        <div>
            <span>PRECISA FAZER UMA DENÚNCIA?</span>
            <h3>Registre sua denúncia pelo Anchor.</h3>
            <p>Preencha as informações necessárias e acompanhe o andamento pelo código recebido.</p>
        </div>

        <a href="denuncia.html" class="btn-emergencia">
            Fazer uma denúncia
            <i class="fa-solid fa-arrow-right"></i>
        </a>

    </div>

`;


// ==========================================================
// MATÉRIA ABERTA DENTRO DA PÁGINA
// ==========================================================

function abrirMateria(categoria, indice) {

    const dados = categorias[categoria];
    const lista = materias[categoria];

    if (!dados || !lista || !lista[indice]) {
        return;
    }

    const materia = lista[indice];
    const titulo = dados.conteudos[indice].titulo;

    const pontos = materia.pontos.map(function (ponto, n) {

        return `
            <article class="ponto-leitor">
                <span class="ponto-numero">${n + 1}</span>
                <div>
                    <h4>${ponto[0]}</h4>
                    <p>${ponto[1]}</p>
                </div>
            </article>
        `;

    }).join("");

    const botaoLink = materia.link
        ? `<a href="${materia.link[1]}" class="btn-leitor">${materia.link[0]} <i class="fa-solid fa-arrow-right"></i></a>`
        : "";

    const anterior = indice > 0
        ? `<button type="button" class="nav-leitor" data-ir="${indice - 1}"><i class="fa-solid fa-arrow-left"></i><span><small>Anterior</small>${dados.conteudos[indice - 1].titulo}</span></button>`
        : "<span></span>";

    const proximo = indice < dados.conteudos.length - 1
        ? `<button type="button" class="nav-leitor direita" data-ir="${indice + 1}"><span><small>Próximo</small>${dados.conteudos[indice + 1].titulo}</span><i class="fa-solid fa-arrow-right"></i></button>`
        : "<span></span>";

    leitor.innerHTML = `

        <button type="button" class="btn-voltar-lista">
            <i class="fa-solid fa-arrow-left"></i>
            Voltar para ${dados.tag.toLowerCase()}
        </button>

        <article class="leitor-corpo">

            <span class="leitor-etiqueta">${dados.tag} · ${indice + 1} de ${dados.conteudos.length}</span>

            <h3 class="leitor-titulo">${titulo}</h3>

            <p class="leitor-intro">${materia.intro}</p>

            <div class="pontos-leitor">${pontos}</div>

            <div class="dica-leitor">
                <i class="fa-solid fa-circle-info"></i>
                <p>${materia.dica}</p>
            </div>

            ${botaoLink}

        </article>

        <div class="leitor-nav">${anterior}${proximo}</div>

    `;

    listaConteudos.style.display = "none";
    leitor.classList.add("aberto");

    leitor.querySelector(".btn-voltar-lista").addEventListener("click", fecharMateria);

    leitor.querySelectorAll(".nav-leitor").forEach(function (botao) {

        botao.addEventListener("click", function () {
            abrirMateria(categoria, Number(botao.dataset.ir));
        });

    });

    rolarParaConteudo();

}

function fecharMateria() {

    leitor.classList.remove("aberto");
    leitor.innerHTML = "";

    listaConteudos.style.display = "";

    rolarParaConteudo();

}

function rolarParaConteudo() {

    setTimeout(function () {

        secaoConteudo.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


// ==========================================================
// FUNÇÃO QUE ABRE UMA CATEGORIA
// ==========================================================

function abrirCategoria(categoriaSelecionada) {

    const dados = categorias[categoriaSelecionada];

    if (!dados) {
        return;
    }

    // ---------- cabeçalho ----------

    iconeCategoria.className = "fa-solid " + dados.icone;
    categoriaTag.textContent = dados.tag;
    categoriaTitulo.textContent = dados.titulo;
    categoriaDescricao.textContent = dados.descricao;

    // ---------- limpa conteúdos anteriores ----------

    listaConteudos.innerHTML = "";
    listaConteudos.style.display = "";

    leitor.classList.remove("aberto");
    leitor.innerHTML = "";

    // ---------- conteúdo ----------

    if (categoriaSelecionada === "como-funciona") {

        const comoFunciona = document.createElement("div");
        comoFunciona.classList.add("como-funciona-conteudo");
        comoFunciona.innerHTML = htmlComoFunciona;

        listaConteudos.appendChild(comoFunciona);

    } else {

        dados.conteudos.forEach(function (conteudo, index) {

            const item = document.createElement("article");
            item.classList.add("item-conteudo");

            item.innerHTML = `
                <i class="fa-solid fa-arrow-right"></i>
                <h3>${conteudo.titulo}</h3>
                <p>${conteudo.descricao}</p>
            `;

            // DIREITOS: cada item leva para a página de direitos
            if (categoriaSelecionada === "direitos") {

                item.classList.add("clicavel");

                item.addEventListener("click", function () {
                    window.location.href =
                        "conheca-direitos.html?topico=" + (index + 1);
                });

            }

            // SAÚDE: cada item leva para a página de saúde
            else if (categoriaSelecionada === "saude") {

                item.classList.add("clicavel");

                item.addEventListener("click", function () {
                    window.location.href =
                        "conheca-saude.html?topico=" + (index + 1);
                });

            }

            // OUTRAS CATEGORIAS: a matéria abre aqui mesmo
            else if (materias[categoriaSelecionada]) {

                item.classList.add("clicavel");

                item.addEventListener("click", function () {
                    abrirMateria(categoriaSelecionada, index);
                });

            }

            listaConteudos.appendChild(item);

        });

    }

    // ---------- mostra a área ----------

    secaoConteudo.classList.add("ativo");
    categoriaDetalhes.classList.add("visivel");

    // ---------- rola até os conteúdos ----------

    rolarParaConteudo();

}


// ==========================================================
// CLIQUE NOS CARDS
// ==========================================================

cardsCategoria.forEach(function (card) {

    card.addEventListener("click", function (event) {

        // impede o link de mudar de página
        event.preventDefault();

        abrirCategoria(card.dataset.categoria);

    });

});


// ==========================================================
// ABRIR PELA URL
// ?topico=autocuidado            abre a categoria
// ?topico=autocuidado&item=2     abre direto a matéria 2
// ==========================================================

const parametros = new URLSearchParams(window.location.search);
const topico = parametros.get("topico");
const itemUrl = parseInt(parametros.get("item"), 10);

if (topico) {

    abrirCategoria(topico);

    if (!isNaN(itemUrl)) {
        abrirMateria(topico, itemUrl - 1);
    }

}