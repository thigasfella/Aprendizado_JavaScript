let medida_metros = parseFloat(prompt("Escreva um valor em metros"))
const opcoes_medidas = parseInt(prompt("Escolha uma medida para converter o valor '" + medida_metros + "'.\n[1] - milímetro\n[2] - centímetro\n[3] - decímetro\n[4] - decâmetro\n[5] - hectômetro\n[6] - quilômetro"))
let resultado
switch(opcoes_medidas){
    case 1:
        resultado = medida_metros * 1000
        alert("A conversão de " + medida_metros + " para milímetros é: " + resultado + "mm.")
        break
    case 2:
        resultado = medida_metros * 100
        alert("A conversão de " + medida_metros + " para centímetros é: " + resultado + "cm.")
        break
    case 3: 
        resultado = medida_metros / 0.1
        alert("A conversão de " + medida_metros + " para decímetros é: " + resultado + "dm.")
        break
    case 4:
        resultado = medida_metros / 10
        alert("A conversão de " + medida_metros + " para decâmetro é: " + resultado + "dam.")
        break
    case 5:
        resultado = medida_metros / 100
        alert("A conversão de " + medida_metros + " para hectômetro é: " + resultado + "hm.")
        break
    case 6:
        resultado = medida_metros / 1000
        alert("A conversão de " + medida_metros + " para quilômetro é: " + resultado + "km.")
        break
    default:
        alert("Opção inválida!")
        break
}
