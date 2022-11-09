# Aula - Banco de Dados e Introdução a SQL 

### EXERCICIO 1
-- criando a tabela
#### EXERCICIO A 
ˋˋˋCREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY, -- varchar(n): declarar string com no máx n caracteres
    name VARCHAR (255) NOT NULL, -- varchar(n): declarar string com no máx n caracteres
    salary FLOAT NOT NULL, -- float: declaracao de um numero n inteiro
    birth_date DATE NOT NULL, -- date: representar data (ano,mes,dia)
    gender VARCHAR(6) NOT NULL -- varchar(n): declarar string com no máx n caracteres
);ˋˋˋ

#### EXERCICIO B
SHOW DATABASES; -- infroma o userName 
SHOW TABLES; -- mostra as tabelas existentes

#### EXERCICIO C
DESCRIBE Actor; -- descreve os campos, tipos de dados, predefinições,...

### EXERCICIO 2
ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);ˋˋˋ

#### EXERCICIO A
ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);ˋˋˋ

#### EXERCICIO B
ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Cleo Pires",
  1050000,
  "1982-10-02", 
  "female"
);ˋˋˋ -- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' --> entrada '002' duplicada para a chave Primary

SELECT * FROM Actor; -- verificar informações da tabela Actor

#### EXERCICIO C
ˋˋˋINSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);ˋˋˋ -- Erro Código 1136: a contagem de colunas nao corresponde a contagem informada na primeira linha

#### EXERCICIO D
ˋˋˋINSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);ˋˋˋ -- Erro codigo 1364: o campo "nome" não tem um valor válido
 
#### EXERCICIO E
ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);ˋˋˋ -- Erro codigo 1292: Formato de data é invélido.

#### EXERCICIO F
ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);ˋˋˋ

ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);ˋˋˋ

ˋˋˋINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);ˋˋˋ

### EXERCICIO 3

SELECT * FROM Actor; -- Ela faz com que se retornem todas as colunas (ou "informações") de todas as linhas (ou "entradas") da nossa tabela. 

#### EXERCICIO A) Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

#### EXERCICIO B) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary from Actor WHERE name = "Tony Ramos";

#### EXERCICIO C) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado
SELECT * from Actor WHERE gender = "invalid"; -- todos os resultados foram nulos.

#### EXERCICIO D) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary from Actor WHERE salary <= 500000;

#### EXERCICIO D) Anote o erro gerado pelo comando abaixo e corrija individualmente.
SELECT id, nome from Actor WHERE id = "002"; -- erro código 1054: coluna "nome" desconhecida

-- CORRECAO
SELECT id, name from Actor WHERE id = "002"; -- resposta: id: 002 // name: Glória Pires 

### EXERCICIO 4
#### EXERCICIO A) Explique com suas palavras a query

ˋˋˋSELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;ˋˋˋ 
-- seleciona todas as informações do conjunto de pessoas que atende tanto as iniciais A ou J, quanto salário maior que 300k, ao mesmo tempo

#### EXERCICIO B) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000; 
-- Tony Ramos, Glória Pires e Juliana Paes

#### EXERCICIO C) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome

ˋˋˋSELECT * FROM Actor WHERE (name LIKE "G%" OR "g%") OR (name LIKE "%G" OR "%g");ˋˋˋ 
-- Glória Pires

#### EXERCICIO D) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

ˋˋˋSELECT * FROM Actor 
WHERE (name LIKE "A%" OR "a%" OR "%A" OR "%a") 
OR (name LIKE "G%" OR "g%" OR "%G" OR "%g")
AND salary BETWEEN 350000 AND 900000;ˋˋˋ
-- Antônio Fagundes

### EXERCICIO 5
#### EXERCICIO A) Escreva a query que cria essa tabela (Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

ˋˋˋCREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY, -- varchar(n): declarar string com no máx n caracteres
    title VARCHAR (255) NOT NULL, -- varchar(n): declarar string com no máx n caracteres
    synopsis TEXT NOT NULL, -- text: string com quantidade quase ilimitada de caracteres
    release_date DATE NOT NULL, -- date: representar data (ano,mes,dia)
    rating INT NOT NULL -- int: numeros inteiros
);ˋˋˋ

#### EXERCICIO B) Criar

ˋˋˋINSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);ˋˋˋ

SELECT * FROM Filmes; -- verificar informações da tabela Filmes

#### EXERCICIO C) Criar

ˋˋˋINSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos 
  seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
  anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);ˋˋˋ

#### EXERCICIO D) Criar

ˋˋˋINSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras 
  e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);ˋˋˋ

#### EXERCICIO E) Criar

ˋˋˋINSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "Flores Raras",
  "Elizabeth Bishop é uma poetisa insegura e tímida, que apenas se sente à vontade ao narrar seus versos 
  para o amigo Robert Lowell. Em busca de algo que a motive, ela resolve partir para o Rio de Janeiro e passar
  uns dias na casa de uma colega de faculdade, Mary, que vive com a arquiteta brasileira Lota de Macedo Soare. 
  A princípio Elizabeth e Lota não se dão bem, mas logo se apaixonam uma pela outra.",
  "2013-08-16", 
  9
);ˋˋˋ

### EXERCICIO 6
#### EXERCICIO A)  Retorne o id, título e avaliação a partir de um id específico;
SELECT id, title, rating from Filmes WHERE id = "004";

#### EXERCICIO B) Retorne um filme a partir de um nome específico;
SELECT title from Filmes WHERE synopsis LIKE "%Zaida%";

#### EXERCICIO C) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, title, synopsis from Filmes WHERE rating >= 7;

### EXERCICIO 7
#### EXERCICIO A) Retorna um filme cujo título contenha a palavra vida;
SELECT title from Filmes WHERE title LIKE "%vida%";

#### EXERCICIO B) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

ˋˋˋSELECT title from Filmes WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";ˋˋˋ

#### EXERCICIO C) Procure por todos os filmes que já tenham lançado
SELECT title from Filmes WHERE release_date < "2022-11-08";

#### EXERCICIO D) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.

ˋˋˋSELECT title from Filmes WHERE release_date < "2022-11-08" AND (title LIKE "%amor%" OR synopsis LIKE "%amor%") OR rating > 7;ˋˋˋ