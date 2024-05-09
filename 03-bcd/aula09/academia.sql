drop database if exists academia;
create database academia CHARACTER SET=UTF8 COLLATE utf8_general_ci;
USE academia;

create table Aluno (
    id integer primary key auto_increment not null,
    nome varchar(100) not null,
    nascimento date not null,
    sexo varchar(10) not null,
    peso decimal(5.2) not null
);

create table Telefone (
    id_aluno integer not null,
    numero varchar(15) not null,
    foreign key (id_aluno) references Aluno(id)
);

create table Exercicio (
    id integer primary key auto_increment not null,
    descricao varchar(100) not null,
    grupo_muscular varchar(20) not null,
    aparelho varchar(50) not null
);

create table Ficha (
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(20) not null,
    serie varchar(50) not null,
    foreign key (id_aluno) references Aluno(id),
    foreign key (id_exercicio) references Exercicio(id)
);

-- LOAD DATA INFILE 'C:/Users/des/Downloads/motorista.csv'
-- INTO TABLE motorista
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;