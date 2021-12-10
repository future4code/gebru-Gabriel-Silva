// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()  
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((function(a, b){return a - b}))
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayy = []

    for(index of array){
         
        if(index % 2 === 0){
          arrayy.push(index)
          
        }
       
    }
       
    return arrayy
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayy = []
     

for(index of array){
     
    if(index % 2 === 0){
      arrayy.push(index * index)
      
    }
   
}
   
return arrayy 
   
    
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorNumero = Math.max(...array)
return maiorNumero




  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)
    let comparacao = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
   
   
   
    return comparacao
  
   


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let index = 0; numerosPares.length < n; index++) {
        if (index % 2 == 0) {
            numerosPares.push(index);
        }
    }
    return numerosPares;
   
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        return "Escaleno"
    } else if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } else {
        return "Isósceles"
    }
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray= []
    novoArray.push(array.sort(function segundo(a, b) { return b - a; })[1])
    novoArray.push(array.sort(function segundo(a, b) { return a - b; })[1])
         
     
    return novoArray
    


   
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return "Venha assistir ao filme "+filme.nome+", de "+filme.ano+", dirigido por "+filme.diretor+" e estrelado por "+filme.atores[0]+", "+filme.atores[1]+", "+filme.atores[2]+", "+filme.atores[3]+"."
  
   
      
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome: "ANÔNIMO"}
    
    
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    

    let apenasPessoasautorizadas = pessoas.filter((autorizados, indice, array) => {
        return autorizados.altura >= 1.5 && autorizados.idade > 14 && autorizados.idade < 60
       })
       
   
       return apenasPessoasautorizadas




}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   
    
    


}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    


	
	

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

     
   
}