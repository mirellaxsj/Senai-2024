// Define os estados possíveis da máquina de vending
const estados = {
    SEM_MOEDA: 'SEM_MOEDA',
    COM_MOEDA: 'COM_MOEDA',
    SELECIONANDO_PRODUTO: 'SELECIONANDO_PRODUTO',
    VENDENDO_PRODUTO: 'VENDENDO_PRODUTO'
};

// Implementa os estados
class EstadoSemMoeda {
    insertCoin() {
        console.log("Moeda inserida.");
        return estados.COM_MOEDA;
    }

    selectProduct() {
        console.log("Insira uma moeda primeiro.");
        return estados.SEM_MOEDA;
    }

    dispenseProduct() {
        console.log("Insira uma moeda e selecione um produto primeiro.");
        return estados.SEM_MOEDA;
    }
}

class EstadoComMoeda {
    insertCoin() {
        console.log("Já há uma moeda inserida.");
        return estados.COM_MOEDA;
    }

    selectProduct() {
        console.log("Produto selecionado.");
        return estados.SELECIONANDO_PRODUTO;
    }

    dispenseProduct() {
        console.log("Selecione um produto primeiro.");
        return estados.COM_MOEDA;
    }
}

class EstadoSelecionandoProduto {
    insertCoin() {
        console.log("Você já selecionou um produto.");
        return estados.SELECIONANDO_PRODUTO;
    }

    selectProduct() {
        console.log("Você já selecionou um produto.");
        return estados.SELECIONANDO_PRODUTO;
    }

    dispenseProduct() {
        console.log("Produto dispensado.");
        return estados.VENDENDO_PRODUTO;
    }
}

class EstadoVendendoProduto {
    insertCoin() {
        console.log("Aguarde, o produto está sendo dispensado.");
        return estados.VENDENDO_PRODUTO;
    }

    selectProduct() {
        console.log("Aguarde, o produto está sendo dispensado.");
        return estados.VENDENDO_PRODUTO;
    }

    dispenseProduct() {
        console.log("Produto dispensado. Retire o produto.");
        return estados.SEM_MOEDA;
    }
}

// Implementa a classe da máquina de vending
class MaquinaVending {
    constructor() {
        this.estadoAtual = new EstadoSemMoeda();
    }

    // Métodos de interação com a máquina
    insertCoin() {
        this.estadoAtual = this.estadoAtual.insertCoin();
    }

    selectProduct() {
        this.estadoAtual = this.estadoAtual.selectProduct();
    }

    dispenseProduct() {
        this.estadoAtual = this.estadoAtual.dispenseProduct();
    }
}

// Exemplo de uso
const vendingMachine = new MaquinaVending();

document.getElementById('insertCoinBtn').addEventListener('click', () => {
    vendingMachine.insertCoin();
});

document.getElementById('selectProductBtn').addEventListener('click', () => {
    vendingMachine.selectProduct();
});

document.getElementById('dispenseProductBtn').addEventListener('click', () => {
    vendingMachine.dispenseProduct();
});
