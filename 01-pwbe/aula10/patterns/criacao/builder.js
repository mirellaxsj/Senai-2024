// Pattern Builder (Construtor)
//Classe Builder - Complexa
class Carro {
    constructor (modelo, marca, ano) {
        this.modelo = modelo == undefined ?  '' : modelo;
        this.marca =  marca == undefined ?  '' : marca;
        this.ano = ano ==  undefined ? new Date().getFullYear() : ano;
    }
}

class Argo {
    constructor (ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Gol {
    constructor (ano) {
        this.modelo = 'Gol';
        this.marca = 'Vw';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Turbo {
    constructor (marca) {
        this.marca = 'Volkswagen';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class carroBuilder {
    constructor (modelo, marca, ano) {
        if(modelo == 'Argo') {
            return new Argo(ano);
        }else if (modelo == 'Gol') {
            return new Gol(ano);
        }else {
            this.carro = new Carro(modelo, marca, ano);
        }
    }else if (modelo && marca){
        if(modelo == 'Argo') {
            this.carro = new Argo();
        }else if (modelo == 'Gol') {
            this.carro = new Gol();
        } else {
            this.carro = new Carro(modelo, marca);
        }
    }else {
        this.carro = new Carro();
    }    
}

setTurbo(turbo) 
    th


//Classe Builder - Complexa
class Carro {
    constructor () {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = '2024';
    }
}



//Criando um objeto complexo
const carro = new Carro();

//Uma função/método que cria obejtos complexo em partes 
function carroBuilder() {
    return new carro ();
}




