// Menu com as opções
function opcoes() {
    let opc = parseInt(prompt(
        "Selecione uma das opções da calculadora geométrica: " +
        "\n[1] - Calcular a área de um triângulo" +
        "\n[2] - Calcular a área de um retângulo" +
        "\n[3] - Calcular a área de um quadrado" +
        "\n[4] - Calcular a área de um trapézio" +
        "\n[5] - Calcular a área de um círculo" +
        "\n[6] - Sair"
    ));
    return opc;
}

// Calcula a área do triângulo se a pessoa escolher a opção "1" do menu
function calcula_area_triangulo() {
    const base = parseFloat(prompt("Informe a base do seu triângulo: "));
    const altura = parseFloat(prompt("Informe a altura do seu triângulo: "));
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos e positivos para a base e a altura.");
    } else {
        const area = ((base * altura) / 2).toFixed(2);
        alert("A área do seu triângulo é: " + area);
    }
}

// Calcula a área do retângulo se a pessoa escolher a opção "2" do menu
function calcula_area_retangulo() {
    const base = parseFloat(prompt("Informe a base do seu retângulo: "));
    const altura = parseFloat(prompt("Informe a altura do seu retângulo: "));
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos e positivos para a base e a altura.");
    } else {
        const area = (base * altura).toFixed(2);
        alert("A área do seu retângulo é: " + area);
    }
}

// Calcula a área do quadrado se a pessoa escolher a opção "3" do menu
function calcula_area_quadrado() {
    const lado = parseFloat(prompt("Informe o lado do seu quadrado: "));
    if (isNaN(lado) || lado <= 0) {
        alert("Por favor, insira um valor válido e positivo para o lado.");
    } else {
        const area = (lado ** 2).toFixed(2);
        alert("A área do seu quadrado é: " + area);
    }
}

// Calcula a área do trapézio se a pessoa escolher a opção "4" do menu
function calcula_area_trapezio() {
    const base_maior = parseFloat(prompt("Informe a base maior do seu trapézio: "));
    const base_menor = parseFloat(prompt("Informe a base menor do seu trapézio: "));
    const altura = parseFloat(prompt("Informe a altura do seu trapézio: "));
    if (isNaN(base_maior) || isNaN(base_menor) || isNaN(altura) || base_maior <= 0 || base_menor <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos e positivos para as bases e a altura.");
    } else if (base_maior < base_menor) {
        alert("A base maior deve ser maior ou igual à base menor.");
    } else {
        const area = (((base_maior + base_menor) * altura) / 2).toFixed(2);
        alert("A área do seu trapézio é: " + area);
    }
}

// Calcula a área do círculo se a pessoa escolher a opção "5" do menu
function calcula_area_circulo() {
    const raio = parseFloat(prompt("Informe o raio do círculo: "));
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido e positivo para o raio.");
    } else {
        const area = (Math.PI * raio * raio).toFixed(2);
        alert("A área do círculo é: " + area);
    }
}

// Menu que chama as opções que o usuário irá escolher
function menu() {
    while (true) {
        let chamaOpc = opcoes();
        // Faz um tratamento com as opções do menu
        switch (chamaOpc) {
            case 1:
                calcula_area_triangulo();
                break;
            case 2:
                calcula_area_retangulo();
                break;
            case 3:
                calcula_area_quadrado();
                break;
            case 4:
                calcula_area_trapezio();
                break;
            case 5:
                calcula_area_circulo();
                break;
            case 6:
                return;
            default:
                alert("Insira uma opção válida!");
        }
    }
}

// Chamando menu
menu();
