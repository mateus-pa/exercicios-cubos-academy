create table usuarios (
	id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
);

create table pokemons(
  id serial primary key,
  usuario_id integer not null references usuarios(id),
  nome text not null,
  habilidades text not null,
  imagem text,
  apelido text
);