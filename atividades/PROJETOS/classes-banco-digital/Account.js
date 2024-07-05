const Loan = require("./Loan");
const Deposit = require('./Deposit');
const Transfer = require("./Transfer");

module.exports = class Account {
    static #contasCriadas = []
    #saldo;

    constructor(dono, email, senha) {
        this.dono = dono;
        this.email = email;
        this.senha = senha;
        this.#saldo = 0;
        this.depositos = [];
        this.transferencias = [];
        this.emprestimos = [];
        if (!Account.verificarConta(email)) {
            Account.#contasCriadas.push(this);
        } else {
            return Account.#contasCriadas.some(conta => conta.email === email);
        }
    }
    static verificarConta(email){
        return Account.#contasCriadas.find(conta => conta.email === email && conta !== this);
    }
    static visualizarContasExistentes(){
        return Account.#contasCriadas
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor, contaDestino = this) {
        if (valor > 0) {
            const deposito = new Deposit(valor);
            contaDestino.#saldo += valor;
            contaDestino.depositos.push(deposito);
            console.log(`Depósito de R$${valor} na conta de ${contaDestino.dono} realizado com sucesso!`);
        } else {
            throw new Error('O valor do depósito deve ser positivo.');
        }
    }

    transferir(valor, contaDestino) {
        if (valor > 0) {
            if (valor <= this.#saldo) {
                const transferencia = new Transfer(this.dono, contaDestino.dono, valor);
                this.#saldo -= valor;
                contaDestino.#saldo += valor;
                this.transferencias.push(transferencia);
                contaDestino.transferencias.push(transferencia);
                console.log(`Transferência no valor de R$${valor} foi realizada com sucesso para ${contaDestino.dono}!`);
            } else {
                throw new Error('Valor insuficiente para realizar a transferência!');
            }
        } else {
            throw new Error('O valor deve ser maior que zero!');
        }
    }

    fazerEmprestimo(valor, numerosParcelas) {
        if (valor > 0) {
            const emprestimo = new Loan(valor, numerosParcelas);
            this.#saldo += valor;
            emprestimo.calcularValorParcelado();
            this.emprestimos.push(emprestimo);
            console.log(`Empréstimo de R$${valor} realizado com sucesso!`);
        } else {
            throw new Error('O valor do empréstimo deve ser positivo.');
        }
    }
}
