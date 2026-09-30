// ==========================================================
// ANCHOR - BARRA DE PESQUISA
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    const caixa = document.querySelector(".pesquisa");
    const campo = caixa ? caixa.querySelector("input") : null;
    const lupa = caixa ? caixa.querySelector(".lupa") : null;

    if (!caixa || !campo) {
        return;
    }


    // ======================================================
    // TUDO O QUE PODE SER ENCONTRADO
    // titulo | descricao | palavras-chave | link | icone | grupo
    // ======================================================

    const paginas = [

        // ---------- PÁGINAS PRINCIPAIS ----------

        { titulo: "Página inicial", descricao: "Volte para o começo do Anchor.", chaves: "home inicio principal", url: "index.html", icone: "fa-house", grupo: "Página" },

        { titulo: "Fazer denúncia", descricao: "Registre uma denúncia em poucos passos.", chaves: "denunciar denuncia registrar reclamar relatar anonima", url: "denuncia.html", icone: "fa-file-circle-exclamation", grupo: "Página" },

        { titulo: "Acompanhar denúncia", descricao: "Consulte o andamento da sua denúncia pelo código.", chaves: "acompanhar andamento codigo protocolo status consultar", url: "acompanhar.html", icone: "fa-magnifying-glass", grupo: "Página" },

        { titulo: "Ajuda psicológica", descricao: "Apoio emocional e atendimento com profissionais.", chaves: "psicologa psicologo psicologia terapia apoio emocional ansiedade tristeza saude mental conversar", url: "ajuda-psicologica.html", icone: "fa-hand-holding-heart", grupo: "Página" },

        { titulo: "Informações", descricao: "Direitos, saúde, prevenção e segurança digital.", chaves: "informacao orientacao direitos dicas conteudo", url: "informacoes.html", icone: "fa-circle-info", grupo: "Página" },

        { titulo: "Notícias", descricao: "Fique por dentro dos temas do Anchor.", chaves: "noticia materia reportagem novidades", url: "noticias.html", icone: "fa-newspaper", grupo: "Página" },

        { titulo: "Tipos de denúncia", descricao: "Conheça as situações que podem ser denunciadas.", chaves: "tipos violencia crimes situacoes", url: "tipos-denuncia.html", icone: "fa-layer-group", grupo: "Página" },

        { titulo: "Sobre o Anchor", descricao: "Conheça a proposta e o objetivo da plataforma.", chaves: "sobre quem somos proposta objetivo equipe projeto", url: "sobre.html", icone: "fa-anchor", grupo: "Página" },

        { titulo: "Contato", descricao: "Fale com a equipe do Anchor.", chaves: "contato email telefone falar mensagem instagram", url: "contato.html", icone: "fa-envelope", grupo: "Página" },

        // ---------- EMERGÊNCIA ----------

        { titulo: "CVV 188", descricao: "Apoio emocional gratuito, 24 horas por dia.", chaves: "cvv 188 suicidio desabafar ligar valorizacao da vida", url: "cvv188.html", icone: "fa-phone", grupo: "Emergência" },

        { titulo: "190 - Polícia", descricao: "Emergências que precisam de atendimento imediato.", chaves: "190 policia emergencia perigo socorro urgente", url: "emergencia.html", icone: "fa-shield-halved", grupo: "Emergência" },

        { titulo: "181 - Disque-denúncia", descricao: "Canal para denúncias.", chaves: "181 disque denuncia anonima telefone", url: "emergencia181.html", icone: "fa-phone-volume", grupo: "Emergência" },

        { titulo: "192 - SAMU", descricao: "Atendimento médico de urgência.", chaves: "192 samu ambulancia medico urgencia hospital", url: "emergencia192.html", icone: "fa-truck-medical", grupo: "Emergência" },

        // ---------- INFORMAÇÕES ----------

        { titulo: "Conheça seus direitos", descricao: "Entenda direitos básicos e onde buscar orientação.", chaves: "direitos lei igualdade respeito dignidade", url: "conheca-direitos.html", icone: "fa-scale-balanced", grupo: "Informação" },

        { titulo: "Saúde mental", descricao: "Cuide das emoções, da mente e do bem-estar.", chaves: "saude mental emocional ansiedade depressao bem-estar", url: "conheca-saude.html", icone: "fa-brain", grupo: "Informação" },

        { titulo: "Autocuidado", descricao: "Pequenas atitudes para cuidar de você.", chaves: "autocuidado cuidado pessoal limites relacionamentos", url: "informacoes.html?topico=autocuidado", icone: "fa-heart", grupo: "Informação" },

        { titulo: "Prevenção", descricao: "Reconheça situações de risco e formas de se proteger.", chaves: "prevencao prevenir protecao risco sinais", url: "informacoes.html?topico=prevencao", icone: "fa-shield-halved", grupo: "Informação" },

        { titulo: "Segurança digital", descricao: "Proteja-se na internet e nas redes sociais.", chaves: "seguranca digital internet redes sociais privacidade golpes senha", url: "informacoes.html?topico=digital", icone: "fa-mobile-screen-button", grupo: "Informação" },

        { titulo: "Onde procurar ajuda", descricao: "Serviços e caminhos para buscar apoio.", chaves: "ajuda apoio servicos canais procurar pedir", url: "informacoes.html?topico=ajuda", icone: "fa-hand-holding-heart", grupo: "Informação" },

        { titulo: "Como funciona a denúncia", descricao: "Veja cada etapa do processo no Anchor.", chaves: "como funciona etapas passos processo denuncia", url: "informacoes.html?topico=como-funciona", icone: "fa-route", grupo: "Informação" },

        // ---------- TIPOS DE DENÚNCIA ----------

        { titulo: "Violência doméstica", descricao: "Violência dentro de casa ou em relações afetivas.", chaves: "violencia domestica maria da penha agressao casa marido companheiro mulher", url: "tipos-denuncia.html?tipo=violencia-domestica", icone: "fa-house", grupo: "Tipo de denúncia" },

        { titulo: "Xenofobia", descricao: "Preconceito contra pessoas por origem ou nacionalidade.", chaves: "xenofobia estrangeiro imigrante nacionalidade preconceito", url: "tipos-denuncia.html?tipo=xenofobia", icone: "fa-earth-americas", grupo: "Tipo de denúncia" },

        { titulo: "Neonazismo", descricao: "Ideologias de ódio ligadas ao nazismo.", chaves: "neo nazismo neonazismo nazista odio apologia", url: "tipos-denuncia.html?tipo=neo-nazismo", icone: "fa-skull-crossbones", grupo: "Tipo de denúncia" },

        { titulo: "Homofobia", descricao: "Preconceito e violência contra pessoas LGBTQIA+.", chaves: "homofobia lgbt lgbtqia transfobia gay lesbica preconceito", url: "tipos-denuncia.html?tipo=homofobia", icone: "fa-transgender", grupo: "Tipo de denúncia" },

        { titulo: "Pornografia infantil", descricao: "Conteúdo sexual envolvendo crianças e adolescentes.", chaves: "pornografia infantil crianca adolescente menor conteudo", url: "tipos-denuncia.html?tipo=pornografia-infantil", icone: "fa-child", grupo: "Tipo de denúncia" },

        { titulo: "Intolerância religiosa", descricao: "Discriminação por religião ou crença.", chaves: "intolerancia religiosa religiao crenca igreja terreiro fe", url: "tipos-denuncia.html?tipo=intolerancia-religiosa", icone: "fa-place-of-worship", grupo: "Tipo de denúncia" },

        { titulo: "Maus-tratos aos animais", descricao: "Abandono, sofrimento ou violência contra animais.", chaves: "maus tratos animais cachorro gato pet abandono crueldade bicho", url: "tipos-denuncia.html?tipo=maus-tratos-animais", icone: "fa-paw", grupo: "Tipo de denúncia" },

        { titulo: "Tráfico humano", descricao: "Exploração e transporte de pessoas.", chaves: "trafico humano pessoas exploracao trabalho escravo", url: "tipos-denuncia.html?tipo=trafico-humano", icone: "fa-person-walking", grupo: "Tipo de denúncia" },

        { titulo: "Assédio sexual", descricao: "Abordagens de natureza sexual sem consentimento.", chaves: "assedio sexual abuso importunacao trabalho consentimento", url: "tipos-denuncia.html?tipo=assedio-sexual", icone: "fa-hand", grupo: "Tipo de denúncia" },

        { titulo: "Abuso infantil", descricao: "Violência ou exploração contra crianças e adolescentes.", chaves: "abuso infantil crianca adolescente menor violencia exploracao", url: "tipos-denuncia.html?tipo=abuso-infantil", icone: "fa-person-circle-exclamation", grupo: "Tipo de denúncia" },

        { titulo: "Maus-tratos aos idosos", descricao: "Abandono, negligência ou violência contra idosos.", chaves: "maus tratos idosos idoso velhinho avo negligencia abandono", url: "tipos-denuncia.html?tipo=maus-tratos-idosos", icone: "fa-people-group", grupo: "Tipo de denúncia" },

        { titulo: "Crimes virtuais", descricao: "Golpes, invasões e ameaças pela internet.", chaves: "crimes virtuais internet hacker invasao conta ameaca online cibernetico", url: "tipos-denuncia.html?tipo=crimes-virtuais", icone: "fa-laptop", grupo: "Tipo de denúncia" },

        { titulo: "Abandono de incapaz", descricao: "Falta de cuidados com quem depende de proteção.", chaves: "abandono incapaz dependente cuidado negligencia", url: "tipos-denuncia.html?tipo=abandono-de-incapaz", icone: "fa-person-circle-question", grupo: "Tipo de denúncia" },

        { titulo: "Tráfico de drogas", descricao: "Venda, transporte ou distribuição ilegal de drogas.", chaves: "trafico drogas entorpecentes venda droga", url: "tipos-denuncia.html?tipo=trafico-de-drogas", icone: "fa-capsules", grupo: "Tipo de denúncia" },

        { titulo: "Racismo", descricao: "Discriminação por raça, cor ou origem.", chaves: "racismo racial injuria preconceito cor negro racista", url: "tipos-denuncia.html?tipo=racismo", icone: "fa-handshake", grupo: "Tipo de denúncia" },

        { titulo: "Golpes e estelionato", descricao: "Fraudes para enganar pessoas e obter vantagem.", chaves: "golpes estelionato fraude pix enganar dinheiro golpista", url: "tipos-denuncia.html?tipo=golpes-estelionato", icone: "fa-money-bill-wave", grupo: "Tipo de denúncia" },

        // ---------- NOTÍCIAS ----------

        { titulo: "Como identificar sinais de violência e quando buscar ajuda", descricao: "Notícia · Conscientização", chaves: "sinais violencia identificar buscar ajuda", url: "noticias.html?noticia=1", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Bullying e cyberbullying: quando a brincadeira deixa de ser brincadeira", descricao: "Notícia · Conscientização", chaves: "bullying cyberbullying escola brincadeira", url: "noticias.html?noticia=2", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Homofobia: reconhecer o preconceito é o primeiro passo", descricao: "Notícia · Direitos", chaves: "homofobia preconceito lgbtqia direitos", url: "noticias.html?noticia=3", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "PF investiga crimes de racismo, homofobia e transfobia na internet", descricao: "Notícia · Direitos", chaves: "policia federal pf racismo homofobia transfobia internet operacao", url: "noticias.html?noticia=4", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Ministério da Igualdade Racial se manifesta sobre ataques racistas contra atleta", descricao: "Notícia · Direitos", chaves: "igualdade racial ministerio atleta esporte racismo", url: "noticias.html?noticia=5", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Violência psicológica contra pessoas LGBTQIA+: o que é e como agir?", descricao: "Notícia · Direitos", chaves: "violencia psicologica lgbtqia como agir", url: "noticias.html?noticia=6", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Segurança digital: como proteger crianças e adolescentes online", descricao: "Notícia · Digital", chaves: "seguranca digital criancas adolescentes internet online pais responsaveis", url: "noticias.html?noticia=7", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Brasil reforça ações de combate à violência contra as mulheres", descricao: "Notícia · Segurança", chaves: "violencia contra mulheres mulher governo acoes combate", url: "noticias.html?noticia=8", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Inclusão na educação: acessibilidade para garantir participação de todos", descricao: "Notícia · Educação", chaves: "inclusao educacao acessibilidade deficiencia escola estudantes", url: "noticias.html?noticia=9", icone: "fa-newspaper", grupo: "Notícia" },

        { titulo: "Segurança do paciente: informação também faz parte do cuidado", descricao: "Notícia · Saúde", chaves: "seguranca paciente saude cuidado tratamento medico", url: "noticias.html?noticia=10", icone: "fa-newspaper", grupo: "Notícia" },

        // ---------- CONTA E ATENDIMENTO ----------

        { titulo: "Agendar atendimento", descricao: "Marque uma consulta com um profissional.", chaves: "agendar agendamento consulta marcar horario atendimento psicologo", url: "agendamento.html", icone: "fa-calendar-check", grupo: "Página" },

        { titulo: "Conversas", descricao: "Converse com os profissionais.", chaves: "conversas chat mensagens profissionais falar", url: "conversas.html", icone: "fa-comments", grupo: "Página" },

        { titulo: "Meu perfil", descricao: "Seus dados, foto e atalhos.", chaves: "perfil conta meus dados foto nome editar", url: "perfil.html", icone: "fa-user", grupo: "Conta" },

        { titulo: "Entrar", descricao: "Acesse a sua conta Anchor.", chaves: "entrar login acessar conectar google facebook", url: "login.html", icone: "fa-right-to-bracket", grupo: "Conta" },

        { titulo: "Criar conta", descricao: "Cadastre-se no Anchor.", chaves: "criar conta cadastro cadastrar registrar", url: "cadastro.html", icone: "fa-user-plus", grupo: "Conta" },

        { titulo: "Recuperar senha", descricao: "Redefina o acesso à sua conta.", chaves: "recuperar senha esqueci redefinir", url: "recuperar-senha.html", icone: "fa-key", grupo: "Conta" }

    ];


    // Sugestões que aparecem com a barra vazia
    const sugestoes = [
        "Fazer denúncia",
        "Ajuda psicológica",
        "190 - Polícia",
        "CVV 188",
        "Violência doméstica"
    ];


    // ======================================================
    // FUNÇÕES DE TEXTO
    // ======================================================

    function normalizar(texto) {

        return String(texto)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }

    // Prepara os textos uma vez só
    paginas.forEach(function (pagina) {

        pagina._titulo = normalizar(pagina.titulo);
        pagina._descricao = normalizar(pagina.descricao);
        pagina._chaves = normalizar(pagina.chaves);

    });


    // ======================================================
    // PONTUAÇÃO: quanto maior, mais relevante
    // ======================================================

    function pontuar(pagina, termos) {

        let total = 0;

        for (let i = 0; i < termos.length; i++) {

            const termo = termos[i];
            let pontos = 0;

            if (pagina._titulo.includes(termo)) {
                pontos += pagina._titulo.startsWith(termo) ? 10 : 6;
            }

            if (pagina._chaves.includes(termo)) {
                pontos += 4;
            }

            if (pagina._descricao.includes(termo)) {
                pontos += 1;
            }

            // todas as palavras digitadas precisam aparecer
            if (pontos === 0) {
                return 0;
            }

            total += pontos;

        }

        return total;

    }

    function buscar(consulta) {

        const termos = normalizar(consulta).split(" ").filter(Boolean);

        if (termos.length === 0) {
            return [];
        }

        return paginas
            .map(function (pagina) {
                return { pagina: pagina, pontos: pontuar(pagina, termos) };
            })
            .filter(function (item) {
                return item.pontos > 0;
            })
            .sort(function (a, b) {
                return b.pontos - a.pontos;
            })
            .slice(0, 6)
            .map(function (item) {
                return item.pagina;
            });

    }


    // ======================================================
    // CAIXA DE RESULTADOS
    // ======================================================

    const lista = document.createElement("div");
    lista.className = "pesquisa-resultados";
    lista.setAttribute("role", "listbox");
    caixa.appendChild(lista);

    let itens = [];
    let indiceAtivo = -1;


    function abrir() {
        lista.classList.add("aberto");
    }

    function fechar() {
        lista.classList.remove("aberto");
        indiceAtivo = -1;
    }

    function marcarAtivo(indice) {

        itens.forEach(function (item, i) {
            item.classList.toggle("ativo", i === indice);
        });

        indiceAtivo = indice;

        if (itens[indice]) {
            itens[indice].scrollIntoView({ block: "nearest" });
        }

    }

    function criarItem(pagina) {

        const link = document.createElement("a");
        link.className = "pesquisa-item";
        link.href = pagina.url;
        link.setAttribute("role", "option");

        const icone = document.createElement("span");
        icone.className = "pesquisa-icone";
        icone.innerHTML = '<i class="fa-solid ' + pagina.icone + '"></i>';

        const texto = document.createElement("span");
        texto.className = "pesquisa-texto";

        const titulo = document.createElement("strong");
        titulo.textContent = pagina.titulo;

        const descricao = document.createElement("small");
        descricao.textContent = pagina.descricao;

        texto.appendChild(titulo);
        texto.appendChild(descricao);

        const grupo = document.createElement("span");
        grupo.className = "pesquisa-grupo";
        grupo.textContent = pagina.grupo;

        link.appendChild(icone);
        link.appendChild(texto);
        link.appendChild(grupo);

        return link;

    }

    function mostrar(resultados, titulo) {

        lista.innerHTML = "";
        itens = [];
        indiceAtivo = -1;

        if (titulo) {
            const cabecalho = document.createElement("div");
            cabecalho.className = "pesquisa-titulo";
            cabecalho.textContent = titulo;
            lista.appendChild(cabecalho);
        }

        resultados.forEach(function (pagina) {
            const item = criarItem(pagina);
            lista.appendChild(item);
            itens.push(item);
        });

        abrir();

    }

    function mostrarVazio(consulta) {

        lista.innerHTML = "";
        itens = [];
        indiceAtivo = -1;

        const vazio = document.createElement("div");
        vazio.className = "pesquisa-vazio";

        const icone = document.createElement("i");
        icone.className = "fa-regular fa-face-frown";

        const mensagem = document.createElement("p");
        mensagem.textContent = 'Nada encontrado para "' + consulta + '".';

        const dica = document.createElement("small");
        dica.textContent = "Tente palavras como denúncia, psicólogo, direitos ou emergência.";

        vazio.appendChild(icone);
        vazio.appendChild(mensagem);
        vazio.appendChild(dica);

        lista.appendChild(vazio);

        abrir();

    }

    function atualizar() {

        const consulta = campo.value.trim();

        // barra vazia: mostra sugestões
        if (consulta === "") {

            const populares = paginas.filter(function (pagina) {
                return sugestoes.indexOf(pagina.titulo) !== -1;
            });

            mostrar(populares, "Sugestões");

            return;

        }

        const resultados = buscar(consulta);

        if (resultados.length === 0) {
            mostrarVazio(consulta);
            return;
        }

        mostrar(resultados);

    }

    function irParaResultado() {

        // se nada foi marcado com as setas, abre o primeiro
        const alvo = itens[indiceAtivo] || itens[0];

        if (alvo) {
            window.location.href = alvo.getAttribute("href");
        }

    }


    // ======================================================
    // EVENTOS
    // ======================================================

    campo.setAttribute("autocomplete", "off");

    campo.addEventListener("input", atualizar);

    campo.addEventListener("focus", atualizar);

    campo.addEventListener("keydown", function (evento) {

        if (evento.key === "ArrowDown") {

            evento.preventDefault();

            if (!lista.classList.contains("aberto")) {
                atualizar();
            }

            if (itens.length > 0) {
                marcarAtivo((indiceAtivo + 1) % itens.length);
            }

        } else if (evento.key === "ArrowUp") {

            evento.preventDefault();

            if (itens.length > 0) {
                marcarAtivo(indiceAtivo <= 0 ? itens.length - 1 : indiceAtivo - 1);
            }

        } else if (evento.key === "Enter") {

            evento.preventDefault();

            irParaResultado();

        } else if (evento.key === "Escape") {

            fechar();
            campo.blur();

        }

    });

    // clicar na lupa também pesquisa
    if (lupa) {

        lupa.style.cursor = "pointer";

        lupa.addEventListener("click", function () {

            if (campo.value.trim() === "") {
                campo.focus();
                return;
            }

            atualizar();
            irParaResultado();

        });

    }

    // clicar fora fecha a lista
    document.addEventListener("click", function (evento) {

        if (!caixa.contains(evento.target)) {
            fechar();
        }

    });

});