/*Teste de Velocidade:
Escreva um programa em javascript que permita inserir 
o nome e a velocidade de dois veículos e exiba na tela 
uma mensagem dizendo qual dos dois é mais rápido 
(ou que as velocidades são iguais se este for o caso)*/

const nome_carro1 = prompt("Digite o nome do primeiro carro:");
let vel_carro1 = parseFloat(prompt("Digite a velocidade do primeiro carro:"));
const nome_carro2 = prompt("Digite o nome do segundo carro:");
let vel_carro2 = parseFloat(prompt("Digite a velocidade do segundo carro:"));

if (vel_carro1 > vel_carro2) {
    alert("O carro " + nome_carro1 + " está mais rápido que o carro " + nome_carro2);
} else if (vel_carro1 === vel_carro2) {
    alert("Ambos os carros estão na mesma velocidade");
} else {
    alert("O carro " + nome_carro2 + " está mais rápido que o carro " + nome_carro1);
}
