const quotes = [
    "Aqui jaz um mestre do pagode, agora fazendo sucesso no paraíso.",
    "Trabalho era sua vida, mas agora é só descanso eterno.",
    "Sua risada contagiante será lembrada no céu e no escritório.",
    "Descansando em paz, finalmente longe dos relatórios intermináveis.",
    "Seu maior hit: 'O Pagode da Eternidade'!",
    "Aqui jaz quem pagava PIX até pro fantasma da ex.",
    "Morreu de desmotivação após o terceiro briefing da semana.",
    "Morreu de cansaço tentando entender o timesheet.",
    "Morreu de sede porque esqueceu de beber água no último treino.",
    "Morreu de tanto repetir vou voltar pra academia segunda-feira.",
    "Morreu de tristeza ao ver o saldo do Pix.",
    "Morreu tentando não se desanimar com o boleto.",
    "Morreu de tanto esperar o call começar.",
    "Morreu de estresse esperando o job sair.",
    "Morreu de tanto planejar uma volta com a ex.",
    "Morreu depois do décimo vou para o festival este ano.",
    "Morreu de vergonha ao ver o timesheet atrasado.",
    "Morreu de tanto adiar a volta pra academia.",
    "Morreu de tédio esperando o Pix cair.",
    "Morreu após esquecer mais uma vez de beber água.",
    "Morreu tentando escapar do pagode no churrasco.",
    "Morreu de desgosto ao abrir o boleto da faculdade.",
    "Morreu de exaustão com o briefing eterno.",
    "Morreu de tentar motivar a galera no call.",
    "Morreu de saudade da vida sem timesheet.",
    "Morreu na busca infinita de uma motivação pro trabalho.",
    "Morreu de tanto prometer um novo começo na academia.",
    "Morreu de tanto ouvir beba água no call.",
    "Morreu esperando a luz voltar na reunião de job.",
    "Morreu depois do quinto treino pra se manter motivado.",
    "Morreu de tanto recalcular a meta no trabalho.",
    "Morreu ao receber mais um briefing fora de hora.",
    "Morreu de tanto fugir do timesheet.",
    "Morreu de cansaço depois do décimo festival do ano.",
    "Morreu ao abrir o saldo do Pix no fim do mês.",
    "Morreu tentando acompanhar o ritmo da galera na academia.",
    "Morreu ao receber outro convite de call.",
    "Morreu esperando o boleto sumir sozinho.",
    "Morreu tentando convencer a si mesmo a beber mais água.",
    "Morreu após marcar só mais um no pagode.",
    "Morreu após prometer que esse ano ia voltar pra ex.",
    "Morreu de tanto tentar entender o timesheet da semana.",
    "Morreu de vergonha ao ver o próprio briefing.",
    "Morreu após esquecer de beber água durante o treino.",
    "Morreu ao abrir o boleto da conta de água.",
    "Morreu após ouvir vamos marcar um call.",
    "Morreu de tanto começar a dieta segunda-feira.",
    "Morreu ao ver o próximo festival lotado.",
    "Morreu esperando o Pix do freela cair.",
    "Morreu depois do quinto “hoje eu vou no pagode”.",
    "Morreu após calcular o valor dos boletos de outubro.",
    "Morreu esperando o saldo do Pix aparecer como milagre.",
    "Morreu de exaustão no último dia de job.",
    "Morreu de tanto adiar a renovação na academia.",
    "Morreu tentando motivar o time no último call.",
    "Morreu após o décimo semana que vem eu treino!.",
    "Finalmente livre de pagar boleto... ou não?",
    "Morreu esperando o PIX cair!",
    "Aqui jaz: sempre esquecia de pagar a conta de água.",
    "Lutou com coragem... contra a fatura da luz.",
    "Morreu fazendo o que amava: reclamando do trabalho.",
    "Até no além, fugindo da academia.",
    "Aqui está em paz, longe de qualquer treino.",
    "Esperando o próximo pagode celestial.",
    "Se foi, mas deixou o boleto pra trás!",
    "Devo, não nego, pago... no além?",
    "Sempre falava que um dia ia descansar. Pois aqui está.",
    "Morreu, mas ainda tentando cancelar o plano da academia.",
    "Faliu de tanto tentar ir em festival.",
    "Aqui jaz quem nunca chegou no último treino.",
    "Se foi esperando o aumento no salário.",
    "Pediu o último PIX e foi embora.",
    "Descanse em paz… menos os boletos, esses ainda chegam.",
    "Se foi, mas deixou o boleto pra quem ficasse.",
    "Nunca aprendeu a cancelar a luz, mas agora apagou de vez.",
    "Primeiro foi a conta, depois fui eu.",
    "Gastou tudo no último pagode, agora está em outro plano.",
    "Sempre dizia que ia morrer na fila do banco…",
    "Aqui jaz quem sempre dizia 'amanhã eu treino'.",
    "Morreu como viveu: correndo atrás do PIX.",
    "Finalmente em paz... sem fatura de cartão pra pagar.",
    "Por um festival a mais, descanse em paz.",
    "Veio com dívidas, partiu com saudades dos shows.",
    "Enfim sossegou... mas a conta de água ainda vem.",
    "Até no além, fugindo do trabalho e das cobranças.",
    "Aqui repousa um pagodeiro incansável, agora em modo celestial.",
    "Aposentou a planilha, agora preenchendo as nuvens com seu talento.",
    "No céu ou no escritório, sempre soube como animar o lugar!",
    "Partiu deste mundo, mas deixou a festa da saudade no ar.",
    "Pegou carona no elevador para o andar de cima.",
    "Adeus ao nosso rei da planilha, o reino está em luto.",
    "Aqui descansa um mestre do pagode, batucando nas estrelas.",
    "Partiu, mas deixou saudade até nas reuniões chatas.",
    "Seu último pedido: um pagode na despedida!",
    "Não importa se era escritório ou palco, sempre brilhou.",
    "Um contador de estrelas no céu e de números na Terra.",
    "Encerrando o expediente na vida terrena, rumo ao happy hour eterno.",
    "Era o mestre do pagode e o CEO do coração de todos.",
    "Deixou um vazio no escritório e um samba no coração.",
    "Sua partida foi o ponto final de uma grande planilha chamada vida.",
    "Aqui jaz um verdadeiro sambista, que agora pede uma última cerveja no bar celestial.",
    "Partiu, mas tenho certeza de que está transformando o céu em um verdadeiro pagode.",
    "Brindemos à vida que ele/ela viveu, com muito samba e cerveja gelada.",
    "Aqui descansa alguém que sabia que a vida é curta, então sambou e bebeu até o último suspiro.",
    "Aqui repousa um mestre do pagode, que agora ensina samba aos anjos no paraíso.",
    "Partiu para a eternidade, mas deixou uma festa de samba inesquecível em nossos corações.",
    "Aqui jaz alguém que provou que samba e cerveja são a combinação perfeita, até o último suspiro.",
    "Sambou tanto na vida que conquistou um lugar de destaque na bateria celestial.",
    "A batucada acabou, mas o pagode nunca terá fim na memória dos que aqui ficaram.",
    "Partiu, mas tenho certeza de que o bar divino tem agora o melhor pagodeiro.",
    "Aqui descansa alguém que não sabia tocar outro ritmo senão o do coração do samba.",
    "A última chamada foi feita, mas as lembranças das noites de samba continuam vivas.",
    "O samba da vida deu lugar ao samba eterno no céu, onde todos são VIPs.",
    "O pagode era sua religião, e agora ele/ela é o santo padroeiro do samba.",
    "Aqui descansa um sambista de respeito, o único que conseguia fazer o pandeiro dançar.",
    "Partiu para o samba eterno, onde a festa nunca acaba e a cerveja é sempre gelada.",
    "Sambou até o fim e agora samba nas estrelas, regando o céu com cerveja.",
    "Aqui jaz alguém que nunca viu um copo vazio, nem uma roda de samba parada.",
    "Na vida, a única batida que importava era a do surdo. Agora, bate seu coração no paraíso do samba.",
    "A última nota do cavaquinho ecoou, mas o samba continua na eternidade.",
    "Partiu, mas deixou a promessa de um desfile de carnaval inesquecível no paraíso.",
    "Aqui descansa um sambista tão bom que até a morte quis fazer um dueto.",
    "O samba era sua religião, e agora ele/ela está pregando a alegria no céu.",
    "Sambava na chuva e brindava na seca. Sua alegria era contagiante.",
    "Partiu, mas antes de ir, fez questão de deixar a receita da melhor caipirinha.",
    "A batucada parou, mas o coração desse sambista continuará batendo no ritmo do samba.",
    "Aqui jaz alguém que transformou a vida em uma festa constante de pagode.",
    "Partiu para o samba eterno, onde o choro é só de alegria e a dor de cotovelo é proibida.",
    "A última rodada foi servida, mas as histórias engraçadas desse pagodeiro viverão para sempre.",
    "Aqui jaz alguém que finalmente conseguiu escapar das festas chatas.",
    "Partiu para evitar pagar as dívidas de jogo. Apostamos que ele/ela venceria no céu.",
    "Aqui repousa um expert em escapar de reuniões de família.",
    "Partiu, mas pelo menos não terá que ouvir mais conselhos não solicitados.",
    "A última desculpa esfarrapada foi usada. Agora, só resta o descanso eterno.",
    "Sambava na vida, agora está curtindo o silêncio no outro lado.",
    "Aqui jaz um mestre em evitar o trabalho extra.",
    "Partiu antes que a fila do trânsito do dia do pagamento ficasse mais longa.",
    "Aqui descansa alguém que finalmente escapou do trânsito e das contas a pagar.",
    "A última piada foi contada, mas ele/ela deixou todos rindo eternamente.",
    "Partiu para a eternidade, onde as obrigações e responsabilidades não têm vez.",
    "Aqui jaz alguém que sempre acreditou que a melhor vingança é viver bem.",
    "Sambou na vida, mas deixou a coreografia da morte para outro.",
    "Partiu antes que a paciência se esgotasse totalmente.",
    "Aqui descansa alguém que finalmente conseguiu se livrar das tarefas chatas do dia a dia.",
    "Morreu de tanto esperar pelo briefing.",
    "Morreu afogado em timesheets.",
    "Morreu de cansaço depois do último deadline.",
    "Morreu de tanto ouvir “refaz o layout.",
    "Morreu por falta de beba água no meio da campanha.",
    "Morreu esmagado pelo orçamento (Budget).",
    "Morreu esperando o Target ideal.",
    "Morreu no brainstorm eterno.",
    "Morreu de overdose de branding.",
    "Morreu no último case de sucesso.",
    "Morreu de tédio em mais um meeting.",
    "Morreu de rir do slogan.",
    "Morreu esperando o pix cair.",
    "Morreu aguardando o boleto ser pago.",
    "Morreu de cansaço depois do job.",
    "Morreu no treino eterno da academia.",
    "Morreu fazendo check-in no timesheet.",
    "Morreu de rir do briefing.",
    "Morreu tentando entender o layout.",
    "Morreu fazendo um último ajuste no Target.",
    "Morreu de tanto ouvir “cadê o Branding?",
    "Morreu esmagado pelo budget apertado.",
    "Morreu esperando o case ser aprovado.",
    "Morreu tentando criar o slogan perfeito.",
    "Morreu no último meeting que nem precisava.",
    "Morreu de tanto reescrever o briefing.",
    "Morreu de fome, não tinha tempo nem pra almoçar.",
    "Morreu tentando colocar o layout responsivo.",
    "Morreu na busca pelo Target perfeito.",
    "Morreu em um brainstorm que nunca acabava.",
    "Morreu fazendo malabarismo com o budget.",
    "Morreu escrevendo o 20º case de sucesso.",
    "Morreu de exaustão depois do job.",
    "Morreu tentando explicar o briefing.",
    "Morreu esperando o cliente pagar o boleto.",
    "Morreu esperando o slogan ser aprovado.",
    "Morreu de tanto beber água pra não estressar.",
    "Morreu na academia tentando “queimar o budget.",
    "Morreu esperando o deadline que mudou 5 vezes.",
    "Morreu sem entender o layout do cliente.",
    "Morreu no looping do Target que nunca fechava.",
    "Morreu no brainstorm sem ideia boa.",
    "Morreu tentando cortar o budget pela metade.",
    "Morreu no último retoque do case.",
    "Morreu de tédio no meeting.",
    "Morreu de overdose de briefing.",
    "Morreu de desidratação por esquecer de beber água.",
    "Morreu lutando com o layout quebrado.",
    "Morreu na academia, mas não viu o pix.",
    "Morreu de cansaço explicando o Target.",
    "Morreu de rir do slogan sem sentido.",
    "Morreu esperando o briefing revisado.",
    "Morreu no treino de alterar o job mais uma vez.",
    "Morreu tentando ajustar o layout no deadline.",
    "Morreu no brainstorm tentando pensar “fora da caixa.",
    "Morreu afogado no branding.",
    "Morreu tentando explicar o budget pro cliente.",
    "Morreu sem entender o briefing.",
    "Morreu no job eterno que nunca acabava.",
    "Morreu sem ver o Target.",
    "Morreu de tanto reescrever o slogan.",
    "Morreu esperando o layout ser aprovado.",
    "Morreu sem nunca chegar ao brainstorm final.",
    "Morreu sem ver o budget sair do papel.",
    "Morreu fazendo check no timesheet do além.",
    "Morreu esperando o pix do treino.",
    "Morreu no último ajuste do case.",
    "Morreu de sede porque ninguém lembrou do “beba água.",
    "Morreu no Target inalcançável.",
    "Morreu no brainstorm tentando ser criativo.",
    "Morreu de rir do briefing.",
    "Morreu esperando o meeting que nunca acontecia.",
    "Morreu no slogan “diferente.",
    "Morreu no orçamento cortado.",
    "Morreu esperando o job final.",
        
];

function generateQuote() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value || "Alguém";
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const personalizedQuote = `${username}, ${randomQuote.charAt(0).toUpperCase() + randomQuote.slice(1)}`;

    document.getElementById("quote-text").innerHTML = `"${personalizedQuote}"`;
    document.querySelector(".quote").style.display = "block";

    // Ocultar o campo de nome e alterar o botão para "Gerar nova frase"
    usernameInput.style.display = "none";
    const generateButton = document.getElementById("generate-button");
    generateButton.innerHTML = "Gerar nova frase";
    generateButton.onclick = resetQuote;
}

function resetQuote() {
    // Exibir o campo de nome e restaurar o botão original
    document.getElementById("username").style.display = "block";
    document.querySelector(".quote").style.display = "none";
    document.getElementById("generate-button").innerHTML = "Descubra";
    document.getElementById("username").value = ""; // Limpar o campo de entrada
    document.getElementById("generate-button").onclick = generateQuote;
}