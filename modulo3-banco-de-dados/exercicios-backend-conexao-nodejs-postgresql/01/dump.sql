create database biblioteca;

create table autores (
  id serial primary key,
  nome varchar(100) not null,
  idade int
);

create table livros (
  id serial primary key,
  nome text not null,
  genero varchar(50),
  editora varchar(50),
  data_publicacao date,
  autor_id integer references autores(id)
);