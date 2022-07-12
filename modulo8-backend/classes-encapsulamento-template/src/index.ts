// 1 - Um construtor é uma função especial da classe que é responsável por inicializar as variáveis da classe.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  } // 1

  // adicionando a palavra private

  // 2 - 
  
  class Transaction {
     private description: string;
     private value: number;
     private date: string

     constructor(description: string, value: number, date: string ){
       this.description = description;
       this.value = value;
       this.date = date
     }
  }

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }