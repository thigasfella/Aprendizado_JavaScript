let nome = prompt("Digite apenas seu primeiro nome: ");
let sobrenome = prompt("Digite apenas seu sobrenome");
let campoDeEstudo = prompt("Digite seu campo de estudo");
let anoNascimento = prompt("Digite seu ano de nascimento");

console.log("Seu nome é: " + nome + " " + sobrenome + ", e seu campo de estudo é: " + campoDeEstudo);
anoNascimento = parseFloat(new Date().getFullYear() - anoNascimento);
console.log("Você tem " + anoNascimento + " anos de idade.");