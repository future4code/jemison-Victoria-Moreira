SHOW tables;
RENAME TABLE Filmes TO Movie;
SELECT * FROM Actor;
SELECT * FROM Movie;

--                   EXERCICIO 1

-- EXERCICIO A
-- ALTER TABLE Actor DROP COLUMN salary; Altera a tabela Actor de forma a remover a coluna "salary"

-- EXERCICIO B
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Altera a coluna "gender" da tabela Actor para "sex" de forma a receber 6 caracteres

-- EXERCICIO C
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Altera a coluna "gender" da tabela Actor de forma a receber 255 caracteres

-- EXERCICIO D
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

--                   EXERCICIO 2

-- EXERCICIO A
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

-- EXERCICIO B
UPDATE Actor
SET 
	name = "JULIANA PAES"
WHERE id = "005";

-- desfazendo a alteração
UPDATE Actor
SET 
	name = "Juliana Paes"
WHERE id = "005";

-- EXERCICIO C
UPDATE Actor
SET 
	name = "Juliana Paes", salary = "720250", birth_date = "1979-03-27"
WHERE id = "005";

-- EXERCICIO D
UPDATE Actor
SET 
	name = "Jão"
WHERE id = "015";
-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

--                   EXERCICIO 3

-- EXERCICIO A
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- EXERCICIO B
DELETE FROM Actor WHERE 
	gender = "male" AND salary > "1000000";

--                   EXERCICIO 4
-- EXERCICIO A
SELECT MAX(salary) FROM Actor;

-- EXERCICIO B
SELECT MIN(salary) FROM Actor
	WHERE gender = "female";
    
-- EXERCICIO C
SELECT COUNT(*) FROM Actor
	WHERE gender = "female";
    
-- EXERCICIO D
SELECT SUM(salary) FROM Actor;

--                   EXERCICIO 5
-- EXERCICIO A
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender; -- Conta quantos itens existe no parametro gender da tabela Actor, separando por opções.

-- EXERCICIO B 
SELECT id, name FROM Actor
ORDER BY name DESC;

-- EXERCICIO C
SELECT name, salary FROM Actor
ORDER BY salary ASC;

-- EXRCICIO D
SELECT name, salary FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- EXERCICIO E
SELECT gender, AVG(salary) FROM Actor
GROUP BY gender;

--                   EXERCICIO 6

-- EXERCICIO A
ALTER TABLE Movie ADD playing_limit_date DATE;

-- EXERCICIO B
ALTER TABLE Movie CHANGE rating 
rating FLOAT;

-- EXERCICIO C
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2023-03-07"
WHERE id = "004";