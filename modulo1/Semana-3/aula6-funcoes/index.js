// exercício de interpretação de código

// 1.
// a) - será impresso 10 e 50
// b) - no console não iria aparecer nada mas o calculo irá ser feito dentro da função

// 2. 
// a) - essa função pega um texto e converte ele pra lrtra minuscula e além de incluir a palavra cenoura
//

// 1. 
// a) -
 function ApresentacaoPessoal(){
     let nome = "Gabriel";
     let idade = 21;
     let cidadeOndeMora = "Belém";
     let estuda = "estudante"

     console.log("Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidadeOndeMora+" e sou "+estuda)
}

// b)- 
function ApresentacaoPessoal(nome,idade,cidade,profissao){
    
    let unificado = ("Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidade+" e sou "+profissao)
    return unificado
}
// 2.
//a) -
function somarNumero(numero1,numero2){
    return numero1 + numero2
}

// b) -
function numero(numero1,numero2){
    return numero1 > numero2
}
// c) -

// d) -

// 3.
function operacao(){
    let numero1 = (Number(prompt("digite um numero")))
    let numero2 = (Number(prompt("digite um numero")))
    let soma = numero1 + numero2
    let diferenca = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2

    console.log("Números inseridos: "+numero1+" e "+numero2)
    console.log("Soma: "+soma)
    console.log("Diferença: "+diferenca)
    console.log("multiplicação: "+multiplicacao)
    console.log("Divisão: "+divisao)
}






