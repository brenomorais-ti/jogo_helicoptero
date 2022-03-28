function start () { // starta o jogo
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='jogador'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='inimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='amigo'></div>");

    // Principais variaveis do jogo

    var jogo = { }; // variavel vazia 
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
        }
    
        jogo.pressionou = [];


    //Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });

    //game loop

    jogo.timer = setInterval(loop,30); //  cria uma propriedade chamada time da variavel jogo e chama a função loop a cada 30 milisegundos

    function loop() { // função loop que chama a função movefundo

        movefundo();
        movejogador();
        
    }// fim da função loop

    //função que movimenta o fundo

    function movefundo () {
        //parseInt convert uma string em um numero inteiro - de modo que fundoGame na propriedade css pega o background-position (a posição do fundo game)
        esquerda = parseInt($("#fundoGame") .css("background-position"));
        // atualiza a posição do fundo capturado anteriormente, sendo esquerda -1. Obs: a posição inicial por padrão é zero
        $("#fundoGame") .css("background-position", esquerda-1);
    }

    function movejogador() {
        //move jogador para cima
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);
            //limita a movimentação somente dentro da div
            if (topo <= 0){
                $("#jogador") .css("top", topo + 10);
            }
        
        }


        if (jogo.pressionou[TECLA.S]) {
            //move jogador para baixo
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);	
            //limita a movimentação somente dentro da div
            if (topo >= 434){
                $("#jogador") .css("top", topo - 10);
            }
        }
        
        if (jogo.pressionou[TECLA.D]) {
            //jdbjbjwbhw
            //Chama função Disparo	
        }
    }

}//fim start