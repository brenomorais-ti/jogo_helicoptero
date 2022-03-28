function start () { // starta o jogo
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='jogador'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='inimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='amigo'></div>");

    // variaveis do jogo

    var jogo = { }; // variavel vazia 

    //game loop

    jogo.timer = setInterval(loop,30); //  cria uma propriedade chamada time da variavel jogo e chama a função loop a cada 30 milisegundos

    function loop() { // função loop que chama a função movefundo

        movefundo();
        
    }// fim da função loop

    //função que movimenta o fundo

    function movefundo () {
        //parseInt convert uma string em um numero inteiro - de modo que fundoGame na propriedade css pega o background-position (a posição do fundo game)
        esquerda = parseInt($("#fundoGame") .css("background-position"));
        // atualiza a posição do fundo capturado anteriormente, sendo esquerda -1. Obs: a posição inicial por padrão é zero
        $("#fundoGame") .css("background-position", esquerda-1);
    }

}//fim start