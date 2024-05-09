drop database if exists onibus;
create database onibus CHARACTER SET=UTF8 COLLATE utf8_general_ci;
USE onibus;

create table Motorista (
    cpf varchar(14) not null primary key,
    nome varchar(100) not null
);

create table Telefone (
    cpf_motorista varchar(14),
    numero varchar(15) not null,
    foreign key (cpf_motorista) references Motorista(cpf)
);

create table Linha (
    id integer primary key auto_increment not null,
    descricao varchar(100) not null
);

create table Horario (
    id_linha integer not null,
    horario varchar(10) not null,
    foreign key (id_linha) references Linha(id)
);

create table Dirige (
    cpf_motorista varchar(14) not null,
    id_linha integer not null,
    foreign key (cpf_motorista) references Motorista(cpf),
    foreign key (id_linha) references Linha(id)
);

-- LOAD DATA INFILE 'C:/Users/des/Downloads/motorista.csv'
-- INTO TABLE motorista
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;