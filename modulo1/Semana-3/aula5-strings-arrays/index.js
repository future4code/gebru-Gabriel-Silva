/*
1. ---
a. undefined
b. null
c. 11
d. 3
e. 
f. 9

2. ---
R= SUBI NUM ÔNIBUS EM MIRROCOS, 27

Exercícios de escrita de código ---- */
// 1.

let emailDoUsuario = prompt("Qual é o seu Email");
let nomeDoUsuario = prompt("Qual é o seu nome")
console.log(`O e-mail ${[emailDoUsuario]} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

//2.

let comidasPreferidas = [ "pizza", "sushi", "churrasco", "pudim", "gelatina"];
console.log(comidasPreferidas)
console.log(`essas são as minhas comidas preferidas `)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidasPreferidasUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = comidasPreferidasUsuario
console.log(comidasPreferidas)


//3.
let listaDeTarefas = [prompt("digite a primeira tarefa"), prompt("digite a segunda tarefa"), prompt("digite a terceira tarefa")];
console.log(listaDeTarefas)
let indice = prompt("Digite o indice de uma tarefa já realizada")
listaDeTarefas.splice(indice, 1) 
console.log(listaDeTarefas)


