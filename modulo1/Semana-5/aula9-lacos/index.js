/* 1 - está fazendo um laço que pega o valor e soma com i e que vai imprimir 10 
   
2 - a)- irá imprimir os numero maiores de 18
   
   b) - sim, usando a propriedade length, ficando for(let numero of lista.length)


   3 - seria uma linha com quatro asteriscos
 */


1--
let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomeDosPets = ["",]

if(bichinhos === 0){
console.log("Que pena! Você pode adotar um pet!")
} else{
 for(let i = 0; i < bichinhos; i++ ){
 nomeDosPets += [prompt("digite o nome do seu pet"),""]

 }

}
console.log (nomeDosPets)


2 - letra (a)

let array = [10,20,3,5,7,8,9,2,2,12,12]
let antigoArray = 0
function letraA(array){
    
    for(let index = 0; index < array.length; index++){
        antigoArray++
        console.log(antigoArray)

    }
   

}
letraA(array)

letra (b)

let array = [10,20,3,5,7,8,9,2,2,12,12]
let antigoArray = 0
function letraA(array){
    
    for(let index = 0; index < array.length; index++){
        antigoArray++
        console.log(antigoArray/2)

    }
   

}
letraA(array) 

