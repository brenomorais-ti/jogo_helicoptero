function start () { // starta o jogo
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='jogador'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='inimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='amigo'></div>");

    // Principais variaveis do jogo
    var podeAtirar = true;
    var jogo = { }; // variavel vazia 
    var velocidade = 3;
    var posicaoY = parseInt(Math.random() * 334);
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
        moveinimigo1();
        moveinimigo2();
        moveamigo();
        colisao();
        
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
            
            disparo();	
        }
    }

    function moveinimigo1() {
        //movimenta o inimigo da direita para esquerda
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
            //recria o inimigo na posição inicial, porem com valor randomico
            if (posicaoX<=0) {
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left",694);
                $("#inimigo1").css("top",posicaoY); 
            }
    } //Fim da função moveinimigo1()

    function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
	    $("#inimigo2").css("left",posicaoX-3);
				
		if (posicaoX<=0) {
			
		    $("#inimigo2").css("left",775);
					
		}
    } // Fim da função moveinimigo2()

    function moveamigo() {
	
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left",posicaoX+1);
                    
            if (posicaoX>906) {
                
                $("#amigo").css("left",0);
                        
            }
    
    } // fim da função moveamigo()


    function disparo() {
	
        if (podeAtirar==true) {
            
            podeAtirar=false;
        
            topo = parseInt($("#jogador").css("top"))
            posicaoX= parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 190;
            topoTiro=topo+37;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top",topoTiro);
            $("#disparo").css("left",tiroX);
        
            var tempoDisparo=window.setInterval(executaDisparo, 30);
        
        } //Fecha podeAtirar
     
        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX+15); 
    
            if (posicaoX>900) {
                            
                window.clearInterval(tempoDisparo);
                tempoDisparo=null;
                $("#disparo").remove();
                podeAtirar=true;
                        
            }
        } // Fecha executaDisparo()
    } // Fecha disparo()


    function colisao() {
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        // jogador com o inimigo1
    
        console.log(colisao1);
    
    } //Fim da função colisao()

}//fim start