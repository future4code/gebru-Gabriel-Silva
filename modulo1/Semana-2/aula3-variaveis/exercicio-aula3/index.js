
/* 1 - QUESTÃO
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) */

/* REPOSTA = na linha 6 será o impresso a var b(10), enquanto que na linha 9 será 
impresso a var a(10) e b(5) e o valor da var b é 5 pois na linha 8 foi atualizado o 
valor da variavel que antes era 10 pra 5.*/

/* 2 - QUESTÃO
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

REPOSTA = dará erro de sintaxe, pois não foi declarada uma variavel pra c.

*/
/* 3 - QUESTÃO
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

REPOSTA = poderia fica dessa forma: 
let horaTrabalhadaPorDia = 
let recebePorDia =  
com essas variaveis fica mais facil de saber o que tem nessa "caixa", o programa irá                                
perguntar ao usuario a horas que ele trabalha e quanto recebe por dia, o programa irá colocar 
em suas respectivas variaveis e de irá da um alerta com o resultado
*/
// Exercícios de escrita de código
// 1 - QUESTÃO

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
// após da console.log foi impresso "undefined" isso se deu, pois as var idade e nome não tem valor declarado.
nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é o sua idade?")
console.log(typeof nome)
console.log(typeof idade)
/* por mais que "let idade" seja do tipo number, quando foi aplicado o atributo prompt fez que ela retornasse uma string
isso se dá porque o atributo prompt será irá retornar os dados como string, independemente do tipos que forem.
*/
console.log("Olá "+nome+", você tem "+idade+" anos!")
// 2 - QUESTÃO - OBS: Essa questão fiz de duas formas diferentes.
let ehDia = prompt( "É de dia?")
let corDaRoupa = prompt("Você está usando uma roupa azul hoje?")
let estaFrio = prompt("Você está com frio?")


console.log("É de dia? - "+ehDia)
console.log("Você está usando uma roupa azul hoje? - "+corDaRoupa)
console.log("Você está com frio? - "+estaFrio)

//------------------------------------------------------------------
let ehDia = "É de dia?"
let corDaRoupa = "Você está usando uma roupa azul hoje?"
let estaFrio = "Você está com frio?"

let respostaEhDia = prompt( ehDia)
let respostaCorDaRoupa = prompt(corDaRoupa)
let respostaEstaFrio = prompt(estaFrio)

console.log(ehDia+" - "+respostaEhDia)
console.log(corDaRoupa+" - "+respostaCorDaRoupa)
console.log(estaFrio+" - "+respostaEstaFrio)


// 3 - QUESTÃO
let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é "+a) 
console.log("O novo valor de b é "+b)

//4 - QUESTÃO
let primeiroNumero = prompt("Digite o primeiro número")
let segundoNumero = prompt("Digite o segundo número")
let conversaoPrimeiroNumero = Number(primeiroNumero)
let conversaoSegundoNumero = Number(segundoNumero)

console.log(conversaoPrimeiroNumero + conversaoSegundoNumero)
console.log(conversaoPrimeiroNumero * conversaoSegundoNumero)


