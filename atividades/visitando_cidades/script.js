/*Escreva um programa em javascript que peça o nome de um turista e então pergunte 
se ele já visitou alguma cidade. 
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, 
e então continue perguntando se o turista visitou alguma outra cidade até que a 
resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

const nome = prompt("Qual o seu nome?");
let visitou = prompt("Você já visitou alguma cidade? [Sim/Não]").toLowerCase(); // Converta a resposta para minúsculas para facilitar a comparação
let cidadesVisitadas = []; // Use uma array para armazenar o nome das cidades visitadas
let perguntaNomeCidade;

while(visitou == "sim"){
    perguntaNomeCidade = prompt("Qual o nome da cidade?");
    cidadesVisitadas.push(perguntaNomeCidade); // Adicione o nome da cidade à array
    visitou = prompt("Você já visitou outra cidade? [Sim/Não]").toLowerCase(); // Pergunte novamente se visitou outra cidade
} 

alert("O seu nome é " + nome)
for(let i = 0; i < cidadesVisitadas.length; i++){
    alert("Você visitou um total de " + cidadesVisitadas.length + " cidade(s).");
    alert("As cidades que você visitou são: \n" + cidadesVisitadas.join("\n"));
    break
}
