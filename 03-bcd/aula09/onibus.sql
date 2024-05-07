drop database if exists onibus;
create database onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

create table Motorista (
    cpf integer primary key not null unique,
    nome varchar(100) not null,
);

create table Telefone (
    cpf_motorista integer not null,
    telefone VARCHAR(15) not null unique,
    foreign key (cpf_motorista) references Motorista(cpf)
);

create table Linha (
    id integer primary key auto_increment not null,
    descricao varchar(100) not null
);