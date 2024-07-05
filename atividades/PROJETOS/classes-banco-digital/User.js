const Account = require("./Account");

module.exports = class User extends Account{
    constructor(dono, email, senha){
        if (Account.verificarConta(email)) {
            throw new Error(`Já existe uma conta registrada com o email ${email}`);
        }
        
        super(dono, email, senha);
    }
    visualizarSaldo() {
        console.log(`Saldo atual da conta de ${this.dono}: R$${this.saldo.toFixed(2)}`);
    }
}