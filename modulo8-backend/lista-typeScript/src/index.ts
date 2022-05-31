const dado = (nome:string, data:string) => {

    let nomePessoa:string = nome
    let dataNascimento:string[] = data.split("/")
   
    console.log (`Olá me chamo ${nomePessoa}, nasci no dia ${dataNascimento[0]} do mês de ${dataNascimento[1]} do ano de ${dataNascimento[2]}` )
   }
   dado("gabrie", "28/05/2000")
 
   
   
   
   
   const tipoVar = (parâmetro:any):void => {
 
     console.log(typeof parâmetro)
   }
 tipoVar(2)
 