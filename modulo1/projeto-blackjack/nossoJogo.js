
   let baralhoUsuario1 = comprarCarta()
   let baralhoUsuario2 = comprarCarta()
   let baralhoMaquina1 = comprarCarta()
   let baralhoMaquina2 = comprarCarta()
   let cartaUsuario
   let cartaMaquina

    if(confirm("Gostaria de jogar outra partida?")=== true) {
      console.log("Bem-vindo(a) ao jogo de blackjack")
     
      cartaUsuario = baralhoUsuario1.valor + baralhoUsuario2.valor
     
      cartaMaquina = baralhoMaquina1.valor + baralhoMaquina2.valor

     console.log("Usuário - cartas: "+baralhoUsuario1.texto , baralhoUsuario2.texto+" - pontuação "+cartaUsuario )
     console.log("Maquina - cartas: "+baralhoMaquina1.texto , baralhoMaquina2.texto+" - pontuação "+cartaMaquina )
      
     if(cartaMaquina > cartaUsuario){
        console.log("A Maquina ganhou!")
     } else if (cartaMaquina < cartaUsuario){
      console.log("O Usuário ganhou!")
     } else{
        console.log("Empate!!")}
  
   } else {
      
      console.log("Fim de Jogo")
   }  