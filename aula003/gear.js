function jogar(){
    rodada = 1
    while(rodada <= 3){
      console.log("Rodada" + rodada)
  
      escolhaJogador = prompt("Nível " + rodada + ", Escolha o      vidro(1, 2, ou 3)? " )
      pisoQuebrado = Math.floor(Math.random()*3) + 1
  
      if(escolhaJogador == pisoQuebrado){
        //Escolheu o vidro que estava quebrado
        alert("O vidro quebrou! Voçê caiu e o jogo ACABOU!!!")
        rodada = 5
      }else{
        alert("Passou de nível! O vidro quebrado estava na ponte: " + pisoQuebrado)
        rodada = rodada + 1
      }
      if(rodada == 4){
        alert("Voçê ganhou!!! ***PARABÉNS***")
      }
    }
  }