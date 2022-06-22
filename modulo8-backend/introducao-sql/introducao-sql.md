#####1 
a) o varchar receber string, primary key é a chava de identificação, not null significa que o valor não pode ser null, date significa data.
b) showdatabase retorna nome do banco de dados enquanto que o show table as tabelas dele
C) mostra a estrutura da table actor e os dados do mesmo

#####2- 
a) INSERT INTO Actor

VALUES("002","Gloria Pires", 1200000, "1963-08-23", "female");

b) o erro acontece pois a primary key só pode receber um valor, e como já tinha no banco de dados um key com o número 002 então deu erro

c)o erro aconteceu porque o foi informado que seria adicionado três colunas e foi informado 5 values. ->

INSERT INTO Actor (id, name, salary,birth_date,gender)

d) o erro ocorreu pois na hora de de criar a tabela ela recebeu a restrição "NOT NULL" ou seja, o valor da string não pode ser nula,

e) o erro aconteceu pois foi "bith_date" foi colocado sem aspas dando o mySQL entender que é um número e dá erro ->
"1979-03-26"

#####3- 
a) 

SELECT * FROM Actor WHERE gender = "female"

b) 

SELECT salary FROM Actor WHERE name = "Tony Ramos";

c)retornou uma linha com valores null

d)

 SELECT id,name, salary FROM Actor WHERE  salary <= 500.000

e) ocorre porque o MySQL não consegue encontrar a coluna ou campo que você especificou em sua instrução, estava nome ao invés de name -> 

SELECT id, name from Actor WHERE id = "002" 