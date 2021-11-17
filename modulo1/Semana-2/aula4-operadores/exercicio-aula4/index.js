//Exercícios de interpretação de código
// 1. Questão
// a. false
// b. false
// c. true 
// d. boolean

/* 2. Questão
o prompt armazena os dados como se fosse strings,
sendo assim, a const soma ao invés de somar os valores
está concatenando.

  3. Questão 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let conversaoDosNumeros = Number(primeiroNumero) + Number(segundoNumero)

console.log(conversaoDosNumeros)

*/
// Exercícios de escrita de código
// 1. Questão

let idadeUsuario = prompt("Qual sua idade")
let idadeAmigoUsuario = prompt("Qual a idade do seu melhor amigo(a)?")
console.log("Sua idade é maior do que a do seu melhor amigo? - "+(idadeUsuario > idadeAmigoUsuario))
console.log(Number(idadeUsuario) - Number(idadeAmigoUsuario))

// 2. Questão
let numeroPar = prompt("digite um numero par")
console.log(Number(numeroPar)% 2)
// que o resultado do resto sempre da 0
//o resulta sempre da 1

// 3. Questão
let idade = prompt("Qual sua idade?")

console.log(Number(idade) * 12)
console.log(Number(idade) * 365)
console.log((Number(idade) * 365) * 24)

// 4. Questão
let numeroUm = prompt("digite um numero")
let numeroDois = prompt("digite outro numero")

console.log("O primeiro numero é maior que segundo? - "+(numeroUm > numeroDois))
console.log("O primeiro numero é igual ao segundo? - "+(numeroUm === numeroDois))
console.log("O primeiro numero é divisível pelo segundo? - "+((numeroUm % numeroDois) === 0))
console.log("O segundo numero é divisível pelo primeiro? - "+((numeroDois % numeroUm) === 0))

// desafio
// Escala de conversão
let fahrenheit = 77

let celsius = 80

let escalaConversaoFK = (((fahrenheit - 32) * (5/9)) + 273.15)
console.log(escalaConversaoFK)

let escalaConversaoCF = ((celsius * (9/5) + 32))
console.log(escalaConversaoCF)

celsius = 30

let escalaConversaoCK = ((((celsius * (9/5)) * (5/9)) + 273.15))
console.log((celsius * (9/5) + 32)+" F° "+escalaConversaoCK+" K°")

celsius = Number(prompt("Digite o valor em celsius"))
console.log((celsius * (9/5) + 32)+" F° "+(((celsius * (9/5)) * (5/9)) + 273.15)+" K°")

/// Calculo de Quilowatt

let valorQuilowattHora = 0.05
console.log("R$ "+280 * valorQuilowattHora)
console.log("R$ "+(14 - (280 * valorQuilowattHora) * (15/100)))

// Conversão de valores
let libra = 20
let libraParaKg = (libra / 2.2046)
console.log("20lb equivalem a "+libraParaKg+" kg")
//
let oz = 10.5
let ozParaKg = (oz / 35.274)
console.log("10oz equivalem a "+ozParaKg+" kg")
//
let milha = 100
let milhaParaMetro = (milha / 0.00062137)
console.log("100mi equivalem a "+milhaParaMetro+" m")
//
let pes = 50
let pesParaMetro = (pes / 3.2808)
console.log("50ft equivalem a "+pesParaMetro+" m")
//
let galao = 103.56
let galaoParaLitro = (galao / 0.26417)
console.log("103.56gal equivalem a "+galaoParaLitro+" l")
//
let xicara = 450
let xicaraParaLitro = (xicara * 0.24)
console.log("450 xic equivalem a "+xicaraParaLitro+" l")
//
let libra = Number(prompt("digite o valor que deseja converter?"))
let libraParaKg = (libra / 2.2046)
console.log(libra+" lb equivalem a "+libraParaKg+" kg")