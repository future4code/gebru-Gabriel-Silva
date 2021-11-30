/*


(a)o codigo pede um numero do usuario e em seguida
faz uma verificação com o numero com condicionais 
(b)imprime numeros par
(c)numero impares 

2 - a) serve para pega a fruta que o usuario escolheu
e verifica o preço
(b)- a fruta escolhida e o preço
(c)- impriria a fruta escolhida e passaria para a proxima veri
ficação

3 - (a)- está declarando uma var e convertendo as
strings do prompt para number
(b) - será de "Essa mensagem é secreta!!!", agr se fosse - 10
daria undefined pois não tem condição para numero negativo
(c) nenhum erro, pois o terminal ler de cima pra baixo e linha
por linha e a forma como está escrito o codigo não dará erro

--------------------EXERCICIO DE ESCRITA-------------------------- */ 

let idade = Number(prompt("Qual é sua idade?"));

if(idade >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir.")
}


let turno = prompt("digite o se turno M, V ou N?");
if(turno == "M"){
    console.log("Bom dia!")

} else if(turno == "V"){
    console.log("Boa Tarde!")
}else if(turno == "N"){
    console.log("Boa Noite!")
} else{
    console.log("Opção invalida")
}



switch (turno){
    case "M" && "m":
        console.log("Bom dia!")
        break
    case "V" && "v":
        console.log("Boa tarde!")
         break
    case "N" && "n":
        console.log("Boa noite!")
         break
    default:
        console.log("Opção invalida")
        break
}




let generoFilme = prompt("Qual Gênero de filmes vocês irão assistir?").toLocaleLowerCase()
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if(generoFilme == "fantasia" && precoIngresso <= 15){
    let lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log("Bom filme!")
    console.log("Aproveite o seu "+lanchinho)

} else {
    console.log("Escolha outro filme :(")
}





let nomeCompleto = prompt("Digite seu nome")
let tipoDeJogo = prompt("tipo de jogo? IN ou DO").toLowerCase()
let etapaDoJogo = prompt("Qual é a etapa? SF, DT ou FL").toLowerCase()
let categotia = Number(prompt("Qual a categoria? 1, 2, 3 ou 4"))
let qtdIngresso = Number(prompt("Qual a quantidade de ingresso?"))
let dolar = 4.10

switch(tipoDeJogo){
    case "do":
        switch(etapaDoJogo){
            case "sf":
                if(categotia == 1){
                    let precoCat1 = 1320
                    console.log("---Dados da compra--- ")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  1")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat1)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat1)
                    } else if(categotia == 2){
                    let precoCat2 = 880
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat2)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat2)
                    } else if(categotia == 3){
                    let precoCat3 = 550
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat3)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat3)
                    } else if(categotia == 4){
                    let precoCat4 = 220
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat4)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat4)
                    }
                break
            case "dt":

                if(categotia == 1){
                    let precoCat1 = 660
                    console.log("---Dados da compra--- ")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  1")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat1)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat1)
                    } else if(categotia == 2){
                    let precoCat2 = 440
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat2)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat2)
                    } else if(categotia == 3){
                    let precoCat3 = 330
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat3)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat3)
                    } else if(categotia == 4){
                    let precoCat4 = 170
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat4)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat4)
                    } 
                break
            case "fl":
                if(categotia == 1){
                    let precoCat1 = 1980
                    console.log("---Dados da compra--- ")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Final ")
                    console.log("Categoria:  1")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat1)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat1)
                    } else if(categotia == 2){
                    let precoCat2 = 1320
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo:  Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat2)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat2)
                    } else if(categotia == 3){
                    let precoCat3 = 880
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo:  Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat3)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat3)
                    } else if(categotia == 4){
                    let precoCat4 = 330
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo:  Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  R$"+precoCat4)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat4)
                    } 
                break
            default:
                console.log("opção invalida")
                break
        }
    case "in":
        switch(etapaDoJogo){
            case "sf":
                if(categotia == 1){
                    let precoCat1 = 1320
                    console.log("---Dados da compra--- ")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  1")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat1 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat1 * dolar)
                    } else if(categotia == 2){
                    let precoCat2 = 880
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat2 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat2 * dolar)
                    } else if(categotia == 3){
                    let precoCat3 = 550
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  3")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat3 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat3 * dolar)
                    } else if(categotia == 4){
                    let precoCat4 = 220
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Semi Final ")
                    console.log("Categoria:  4")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat4 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat4 * dolar)
                }
                break
            case "dt":

                if(categotia == 1){
                    let precoCat1 = 660
                    console.log("---Dados da compra--- ")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  1")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat1 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat1 * dolar)
                    } else if(categotia == 2){
                    let precoCat2 = 440
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat2 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat2 * dolar)
                    } else if(categotia == 3){
                    let precoCat3 = 330
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  3")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat3 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat3 * dolar)
                    } else if(categotia == 4){
                    let precoCat4 = 170
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Decisão do 3º lugar ")
                    console.log("Categoria:  4")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat4 * dolar)
                    console.log("Valor total:  R$"+qtdIngresso * precoCat4 * dolar)
                    } 
                break
            case "fl":
                if(categotia == 1){
                    let precoCat1 = 1980
                    console.log("---Dados da compra--- ")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo: Final ")
                    console.log("Categoria:  1")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat1 * dolar)
                         console.log("Valor total:  R$"+qtdIngresso * precoCat1 * dolar)
                    } else if(categotia == 2){
                    let precoCat2 = 1320
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo:  Final ")
                    console.log("Categoria:  2")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat2 * dolar)
                         console.log("Valor total:  R$"+qtdIngresso * precoCat2 * dolar)
                    } else if(categotia == 3){
                    let precoCat3 = 880
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo:  Final ")
                    console.log("Categoria:  3")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat3 * dolar)
                         console.log("Valor total:  R$"+qtdIngresso * precoCat3 * dolar)
                    } else if(categotia == 4){
                    let precoCat4 = 330
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: "+nomeCompleto)
                    console.log("Tipo do jogo:  Nacional")
                    console.log("Etapa do jogo:  Final ")
                    console.log("Categoria:  4")
                    console.log("Quantidade de Ingressos:  "+qtdIngresso+" ingressos.")
                    console.log("---Valores--- ")
                    console.log("Valor do ingresso:  U$"+precoCat4 * dolar)
                         console.log("Valor total:  R$"+qtdIngresso * precoCat4 * dolar)
                    } 
                break
            default:
                console.log("opção invalida")
                break
        }
    default:
        console.log("opção invalida")
        break

    }