1 - 
a)
ALTER TABLE Actor DROP COLUMN salary;

esse comando irá alterar a tabela Actor e excluir a coluna de sálario

b)
ALTER TABLE Actor MODIFY gender VARCHAR(6);

esta alterando a a restrição da coluna gender para receber 6 strings

C) ALTER TABLE Actor MODIFY gender VARCHAR(100);

2 - 
A) UPDATE Actor
SET name = "gabriel Luiz"
WHERE id = "003";

B) UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "juliana Paes"
WHERE id = "005";

C) UPDATE Actor
SET name = "Marcella", salary = 500.000, birth_date = "2003-08-02", gender = "female"
WHERE id = "005";

D) - 

3 -
A) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

B) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

4 - 
A) SELECT MAX(salary)
FROM Actor;

B) SELECT MIN(salary)
FROM Actor WHERE gender = "female";

C) SELECT COUNT(*) FROM Actor WHERE gender = "female";

D) SELECT SUM(salary) FROM Actor

5 - 
A) está contando a quantidade de genero e retornando essa quantidade 

B) SELECT id, name FROM Actor
ORDER BY name DESC;

c) SELECT  name FROM Actor
ORDER BY salary ASC;

D) SELECT  name FROM Actor
ORDER BY salary ASC
LIMIT 3;

E) SELECT AVG(salary), gender
 FROM Actor
 GROUP BY gender;