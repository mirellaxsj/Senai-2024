drop database if exists gerenciador;
create database gerenciador;
use gerenciador

create table usuarios (
    id int auto_increment primary key,
    nome varchar(20) not null,
    email varchar(20) not null,
    senha varchar(10) not null unique
);

create table tarefas (
    id int auto_increment primary key,
    descricao varchar (150) not null,
    data date not null,
    status(10) not null,
    idUsuario int not null 
);

describe usuarios;
describe tarefas;
show tables;

insert into to usuario(nome, email, senha) values
("Fulana de tal","fulana@gmail.com","XXXXXXX");
("Ciclana de Tal","ciclana@gmail.com","XXXXXXX");
("Beutrana de tal","beutrana@gmail.com","XXXXXXX");
