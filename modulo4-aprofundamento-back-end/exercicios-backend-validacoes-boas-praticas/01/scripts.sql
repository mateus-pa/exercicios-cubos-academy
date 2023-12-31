CREATE DATABASE DINDIN;

CREATE TABLE IF NOT EXISTS usuarios(
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  senha TEXT
);

CREATE TABLE IF NOT EXISTS categorias(
  id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS transacoes(
  id SERIAL NOT NULL,
  descricao TEXT NOT NULL,
  valor INTEGER NOT NULL,
  data DATE,
  tipo VARCHAR(20),
  categoria_id INTEGER REFERENCES categorias(id),
  usuario_id INTEGER REFERENCES usuarios(id)
);

INSERT INTO categorias(descricao)
VALUES ('Alimentação'), ('Assinaturas e Serviços'), ('Casa'), ('Mercado'),
('Cuidados Pessoais'), ('Educação'), ('Família'), ('Lazer'), ('Pets'), ('Presentes'),
('Roupas'), ('Saúde'), ('Transporte'), ('Salário'), ('Vendas'), ('Outras receitas'), ('Outras despesas');