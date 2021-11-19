// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura"))
  let largura = Number(prompt("Digite a largura"))
  let area = altura * largura

   console.log(area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o Ano Atual"))
  let anoDeNascimento = Number(prompt("Digite o Ano de Nascimento"))
  let idade = anoAtual - anoDeNascimento

  console.log(idade)

  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let calculoDeImc = peso / (altura * altura)

  return (calculoDeImc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeDoUsuario = prompt("Digite seu nome")
  let idadeDoUsuario = prompt("Digite sua idade")
  let emailDoUsuario = prompt("Digite seu email")

  console.log("Meu nome é "+nomeDoUsuario+", tenho "+idadeDoUsuario+" anos, e o meu email é "+emailDoUsuario+".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = [prompt("digite sua primeira cor"), prompt("digite sua segunda cor"), prompt("digite sua terceira cor")]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let numero1 = string1
  let numero2 = string2
  return numero1.length === numero2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array.pop()
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimoArray = array.pop()
  let primeiroArray = array.shift()
  
  array.unshift(ultimoArray)
  array.push(primeiroArray)
 

 

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 let checagemStringUm = string1.toUpperCase()
 let checagemStringDois = string2.toUpperCase()

 return checagemStringUm == checagemStringDois
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}