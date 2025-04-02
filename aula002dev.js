function jogar(){
    idade = prompt("Qual sua idade?");
    if (idade < 18) {
    alert("Você não pode jogar jokenpô");
    }else{
    escolhaJogador = prompt("1-Pedra, 2-Papel ou 3-Tesoura")
    escolhaComputador = Math.floor(Math.random() * 3 + 1);

    // Jogador e computador escolheram a mesma coisa
    if(escolhaJogador == escolhaComputador){
    alert("Empate o computador escolheu:" + escolhaComputador)
    }

    //-----------------------JOGADA 1 PEDRA------------------ 
    if(escolhaJogador == 1){
    if(escolhaComputador == 2){
        alert("Jogador PERDEU! O computador jogou: " + escolhaComputador + "- PAPEL" )
    }
    if(escolhaComputador == 3){
        alert("O computador PERDEU! escolheu tesoura: " + escolhaComputador + "PAPEL")
    }
    }
    //----------JOGADA 2 PAPEL--------
    if(escolhaJogador == 2){
    if(escolhaComputador == 1){
        alert("Jogador VENCEU, escolheu PAPEL e o computador: PEDRA"  )
    }
    if(escolhaComputador == 3){
        alert("O computador VENCEU escolheu tesoura e voçê PAPEL")
    }
    }

    //-------------JOGADA 3 TESOURA---------
    if(escolhaJogador == 3){
    if(escolhaComputador == 1){
        alert("Jogador PERDEU, escolheu TESOURA e o computador: PEDRA"  )
    }
    if(escolhaComputador == 2){
        alert("O computador PERDEU escolheu PAPEL e voçê TESOURA")
    }
    }
    }
}

