//----------- leitura--------------
// 1 - (a) - irá imprimir os itens,indices e os arrays
// 2 - (a) - irá ser impresso os nomes do objetos usuarios
// 3 - (a) - irá retornar os apelidos exceto o da chijo

//-----------escrita---------------
// 1 -
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a
 const nomePets = pets.map((item, index, array) => {
    return item.nome
 })
 console.log(nomePets)
//b
 const racaSalchicha = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
 })
 console.log(racaSalchicha)
//c
 let nomePoodle
 const poodle = pets.filter((item, index, array) => {return item.raca == "Poodle"})
    for(index of poodle){
        nomePoodle = index.nome
        console.log("Você ganhou um cupom de desconto de 10% para tosar o/a "+nomePoodle)
    }
    
// 2 -
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

   //a
     const nomeProdutos = produtos.map((item, index, array) => {
        return item.nome})

  //c
     const bebidas = produtos.filter((item, index, array) => {return item.categoria== "Bebidas"})
     console.log(bebidas)

   //d 
     const ype = produtos.filter((item, index, array) => { return item.nome.includes("Ypê")})
     console.log(ype)
   //e
    let nomeYpe
    let precoYpe
    for(index of ype){
    nomeYpe= index.nome
    precoYpe = index.preco
    console.log( "Compre "+nomeYpe+" por "+precoYpe)
}