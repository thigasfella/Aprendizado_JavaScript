class Imc{
    constructor(peso, altura){
        this.peso = peso
        this.altura = altura
    }
    execute(){
        return new Promise((resolve, reject) =>{
            if(isNaN(this.peso) || isNaN(this.altura)){
                reject('Os valores devem ser números')
            }else{
                const calculo = this.peso / (this.altura * this.altura)
                resolve(calculo)
            }
        })
      }
    }
    

const imc = new Imc(90, 1.90)

async function calculateImc(){
    try{
        const calculo = await imc.execute()
        const imcFormatted = Math.floor(calculo * 10) / 10
        console.log(`O IMC calculado é: ${calculo.toFixed(1)}`)
        if(imcFormatted <= 18.5){
            console.log('Abaixo do peso!')
        }else if(imcFormatted >= 18.5 && imcFormatted <= 24.9){
            console.log('Peso normal!')
        }else if(imcFormatted >= 25 && imcFormatted <= 29.9) {
            console.log('Sobrepeso!')
        }else if(imcFormatted >= 30 && imcFormatted <= 39.9) {
            console.log('Obesidade!')    
        }else if(imcFormatted > 39.9){
            console.log('Obesidade grave!')
        }
    }catch(error) {
        console.log(`Erro: ${error}`)
    }
}

calculateImc()
