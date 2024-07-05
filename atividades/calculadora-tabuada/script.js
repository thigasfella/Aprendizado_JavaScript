const numero = parseInt(prompt("Digite um número para calcular a tabuada:"));

// Cria um array com valores de 1 a 20
const lista_tabuada = Array.from({ length: 20 }, (_, index) => index + 1);

// Função para calcular a tabuada de um número específico
function calcularTabuada(numero) {
    return lista_tabuada.map((valor) => `${numero} x ${valor} = ${numero * valor}`);
}

// Exibe a tabuada do número fornecido
function exibirTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    calcularTabuada(numero).forEach((item) => console.log(item));
}

exibirTabuada(numero);
