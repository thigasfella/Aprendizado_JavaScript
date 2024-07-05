module.exports = class Loan{
   static #taxa_juros = 0
   #valorParcela
    constructor(value, numerosParcelas){
        this.value = value
        this.numerosParcelas = numerosParcelas
        this.dateCreation = new Date()
        this.#valorParcela = 0
    }
    static get visualizarTaxaJuros(){
        return Loan.#taxa_juros
    }

    static set definirPorcentagemJuros(porcentagem){
        if(porcentagem >= 0){
            Loan.#taxa_juros = porcentagem
        } else {
            throw new Error('A taxa de juros deve ser um valor positivo!')
        }
    }
    calcularComJuros(){
        return this.value * (1 + Loan.#taxa_juros);
    }
    calcularValorParcelado() {
        this.#valorParcela = this.calcularComJuros() / this.numerosParcelas  
    }

    get valorParcela(){
        return this.#valorParcela
    }
}