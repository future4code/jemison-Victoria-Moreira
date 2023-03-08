# Aula - Relações em SQL

### EXERCICIO 1

#### EXERCICIO A
A chave estrangeira ou FOREIGN KEY é uma coluna que faz referência a chave primária de outra tabela, reconhecendo de forma única uma linha de outra tabela.

SHOW TABLES;
SELECT * FROM Rating;
SELECT * FROM Movie;

### EXERCICIO B

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Bom",
    7,
		"004"
);

### EXERCICIO C 
-- ERROR 1452: 1452: Cannot add or update a child row: a foreign key constraint fails
-- Existe uma falha de restrição.

### EXERCICIO D
ALTER TABLE  Movie DROP COLUMN  rating;