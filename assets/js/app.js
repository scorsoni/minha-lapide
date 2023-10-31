const quotes = [
    "Aqui jaz um mestre do pagode, agora fazendo sucesso no paraíso.",
    "Trabalho era sua vida, mas agora é só descanso eterno.",
    "Sua risada contagiante será lembrada no céu e no escritório.",
    "Descansando em paz, finalmente longe dos relatórios intermináveis.",
    "Seu maior hit: 'O Pagode da Eternidade'!",
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

    
    
];

function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".quote").innerHTML = `"${quote}"`;
    document.querySelector(".quote").style.display = "block";
}


let likes = 0;

function likeQuote() {
    likes++;
    document.querySelector(".likes").innerHTML = `${likes}`;
    localStorage.setItem("likes", likes);
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) {
        likes = savedLikes;
        document.querySelector(".likes").innerHTML = `${likes}`;
    }
});
