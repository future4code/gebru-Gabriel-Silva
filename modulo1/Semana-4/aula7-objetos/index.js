// Exercícios de interpretação de código
// 1 - console.log(filme.elenco[0]) -- Matheus Nachtergaele
//     console.log(filme.elenco[filme.elenco.length - 1]) -- Virginia Cavendish
//     console.log(filme.transmissoesHoje[2]) -- canal: "Globo", horario: "14h"

/* 2 - Leia o código abaixo
 
   (a) - nome: "Juca", 
    	idade: 3, 
	    raca: "SRD"
        
        nome: "Juba", 
    	idade: 3, 
	    raca: "SRD"

        nome: "Jubo", 
    	idade: 3, 
	    raca: "SRD"


    (b) - serve para copiar um objeto ou array


   3 - Leia o código abaixo
    (a) - false e undefined

    (b) - porque os parametros da funcao é a const pessoas
    e no retorno da função é o array da pessoa - return objeto[propriedade]
    e por isso deu undefined em "altura" pois não tem essa propriedade
    dentro do objeto

--------- Exercícios de escrita de código ----------------------

   1 - 
*/  

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]}

 function apresentacao(objeto){
    
  
    return objeto    
 }
 
 console.log("Eu sou "+apresentacao(pessoa.nome)+", mas pode me chamar de: "+apresentacao(pessoa.apelidos[0])+","+apresentacao(pessoa.apelidos[1])+" ou "+apresentacao(pessoa.apelidos[2]))

 const pessoaNova = {
     ...pessoa,
     apelidos: ["AMANDINHA","MANDI","MANDONA"]
 }
 
 console.log("Eu sou "+apresentacao(pessoaNova.nome)+", mas pode me chamar de: "+apresentacao(pessoaNova.apelidos[0])+","+apresentacao(pessoaNova.apelidos[1])+" ou "+apresentacao(pessoaNova.apelidos[2]))

 // 2 - (a)
        const dados = {
            nome: "Gabriel",
            idade: 21,
            profissao: "estudante"
        }

        const dados2 = {
            nome: "Ruan",
            idade: 20,
            profissao: "desempregado"
        }
    //  (b)


    const pessoaa = {
        nome: "Bruno", 
        idade: 23, 
        profissao: "Instrutor"
    }

    function minhaFuncao(dadosPessoa){
        let coisa = [dadosPessoa.nome,dadosPessoa.nome.length, dadosPessoa.idade,dadosPessoa.profissao, dadosPessoa.profissao.length ]
             
       return coisa
    }
    console.log( minhaFuncao(pessoaa))

    
// 3

let carrinho = []
let frutaUm = {
    nome: "Mamao",
    disponibilidade: true
}
let frutaDois = {
    nome: "Banana",
    disponibilidade: true
} 
let frutaTres = {
    nome: "Uva",
    disponibilidade: true
}
function carrinhoNovo(frutasUm,frutaDois,frutasTres){
    
    carrinho.push(frutasUm,frutaDois,frutasTres)
    
    console.log(carrinho)
   
    return carrinho
  

}
carrinhoNovo(frutaUm, frutaDois,frutaTres)

