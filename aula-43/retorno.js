// function calcularMedia(a, b){
//     const media = (a + b) / 2
//     return media
// }
// const resultado = calcularMedia(2, 5)
// alert(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}
const notebook = criarProduto("Notebook Dell 8GB Ram", 3250)
console.log(notebook)