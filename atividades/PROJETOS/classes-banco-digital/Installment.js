const Loan = require("./Loan");

module.exports = class Installment extends Loan{
    constructor(value, numerosParcelas){
        super(value, numerosParcelas)
        this.parcelasPagas = new Array(numerosParcelas).fill(false)
    }
    getValorParcelas(){
        return this.valorParcela
    }
    pagarParcelas(indiceParcela){
        if(indiceParcela > 0 && indiceParcela <= this.numerosParcelas){
            if(!this.parcelasPagas[indiceParcela - 1]){
                this.parcelasPagas[indiceParcela - 1] = true
                console.log(`A parcela ${indiceParcela} foi paga com sucesso!`)
            }else{
                console.log(`A parcela ${indiceParcela} já foi paga sucesso!`)
            }
        } else {
            console.log(`A parcela ${indiceParcela} não foi encontrada!`)
        }
    }
    getParcelasPendentes(){
        this.calcularValorParcelado()
        for(let i = 1; i <= this.numerosParcelas; i++){
            console.log(`Parcela ${i}: ${this.getValorParcelas()} - ${this.parcelasPagas[i - 1] ? 'Paga' : 'Pendente'}`)
        }
    }
}
