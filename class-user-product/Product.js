class Product {
    constructor(name, description, price){
        this.name = name,
        this.description = description,
        this.price = price,
        this.inStock = 0
    }
    addInStock(qtd){
        this.inStock += qtd
    }
    calculateDiscount(porcentagem){
        let desconto = (porcentagem / 100) * this.price
        let valorFinal = (this.price - desconto).toFixed(2)
        this.price = parseFloat(valorFinal);
    }
}

let rtx4090 = new Product("Placa de Vídeo RTX 4090 Asus NVIDIA ROG Strix, 24 GB GDDR6X", "Multiprocessadores de streaming NVIDIA Ada Lovelace: Desempenho e eficiência de energia até 2x, Núcleos tensores de 4ª geração: desempenho de IA até 2X, Núcleos RT de 3ª Geração: Desempenho de rastreamento de raios até 2X, Ventiladores de tecnologia axial ampliados para 23% mais fluxo de ar", 12799,99)
rtx4090.addInStock(20)
rtx4090.calculateDiscount(70)

console.log(rtx4090)