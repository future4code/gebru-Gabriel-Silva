function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let qtdNumeros = 0
 for(let i of arrayDeNumeros){
   if(i === numeroEscolhido){
     qtdNumeros++;
     
   }
 }
 
     if(qtdNumeros != 0){
       return `O número ${numeroEscolhido} aparece ${qtdNumeros}x`
     }else{
       return "Número não encontrado"
     }
}