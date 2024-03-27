drop database if exists Mecanica;
create database Mecanica;
use Mecanica;

create table veiculo (
    placa varchar(20) primary key not null,
    modelo varchar(20) not null,
    marca varchar(50) not null,
    ano varchar(50) not null
);

create table manutencao (
    id_manutencao integer primary key auto_increment,
    inicio_manutencao date not null,
    fim_manutencao date not null,
    descricao varchar() not null,
    placa varchar(20) not null,
    FOREIGN KEY (placa) REFERENCES carro(placa) ON DELETE CASCADE
);

create funcionario (
    matricula varchar(20) primary key not null,
    funcionario varchar(50) not null
);

create table telefone (
    id integer primary key auto_increment,
    matricula_funcionario varchar(20) not null,
    telefone varchar(30) not null,
    telefone_secundario varchar(30),
    FOREIGN KEY (matricula_funcionario) REFERENCES funcionario(matricula) ON DELETE CASCADE
);

INSERT INTO veiculo (placa, modelo, marca, ano) VALUES
("CBA-4403", "Sandero", "Renault", "2012"),
("CBC-4945", "Fiorino", "Fiat", "2007"),
("BEE-7735", "Saveiro", "VW", "2015"),
("BBC-8504", "Palio", "Fiat", "2004"),
("DEA-7981", "Uno", "Fiat", "2005"),
("BEB-5885", "Gol", "VW", "2013"),
("EDB-2475", "Ranger", "Ford", "2005");

INSERT INTO manutencao (inicio_manutencao, fim_manutencao, descricao, placa) VALUES
("2023-08-24", "2023-08-31", "Pane elétrica", "CBA-4403"),
("2023-03-13", "2023-03-21", "Farol queimado", "CBC-4945"),
("2023-08-30", "2023-09-04", "Troca de cavalos por poneis", "BEE-7735"),
("2023-03-29", "2023-04-05", "Troca de pneus dianteiros", "BEE-7735"),
("2023-08-27", "2023-09-04", "Rebimboca da parafuzeta", "BBC-8504"),
("2023-02-25", "2023-03-04", "Lanterna queimada", "DEA-7981"),
("2023-05-16", "2023-05-25", "Troca de pneus traseiros", "BEB-5885"),
("2023-06-05", "2023-06-10", "Retrovisor quebrado", "EDB-2475"),
("2023-07-15", "2023-07-19", "Troca de Flúido de Freio", "EDB-2475"),
("2023-09-02", "2023-09-07", "Lanterna queimada", "BEB-5885"),
("2023-04-14", "2023-04-24", "Troca de pneus dianteiros", "CBA-4403"),
("2023-04-30", "2023-05-07", "Farol queimado", "BBC-8504"),
("2023-06-25", "2023-07-02", "Troca de óleo e revisão geral", "CBC-4945"),
("2023-08-04", "2023-08-10", "Problemas no cabo do acelerador", "DEA-7981");

INSERT INTO funcionario (matricula, funcionario) VALUES
("48562", "Evandro Silva"),
("48542", "Jaqueline Teixeira"),
("48522", "Keli Matos"),
("48482", "Osvaldo Oliveira"),
("48502", "Ursula Souza");

INSERT INTO telefone (matricula_funcionario, telefone, telefone_secundario) VALUES
("48562", "19-53315-2734"),
("48542", "19-23003-4864"),
("48522", "19-06486-6449", "19-53266-7923"),
("48482", "19-72077-0521", "19-06078-6843"),
("48502", "19-64378-2404");

SELECT * FROM carro;
SELECT * FROM manutencao;
SELECT * FROM funcionario;
SELECT * FROM telefone;

SHOW TABLES;