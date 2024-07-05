let primeiroNumero = parseFloat(prompt("Insira o primeiro número: "));
let segundoNumero = parseFloat(prompt("Insira o segundo número: "));
let operador = prompt("Insira um operador lógico: [*] - [+] - [/] - [-] ");

let resultado;
switch(operador){
    case "*":
       resultado = (primeiroNumero * segundoNumero)
       alert("O valor da multiplicação entre " + primeiroNumero + " e " + segundoNumero + " é: " + resultado);
       break
    case "-":
        resultado = (primeiroNumero - segundoNumero)
        alert("O valor da subtração entre " + primeiroNumero + " e " + segundoNumero + " é: " + resultado);
        break
    case "+":
       resultado = (primeiroNumero + segundoNumero)
       alert("O valor da soma entre " + primeiroNumero + " e " + segundoNumero + " é: " + resultado);
       break
    case "/":
        if(segundoNumero == 0){
            alert("Não é possível dividir por 0")
        }
        else{
            resultado = (primeiroNumero / segundoNumero)
            alert("O valor da divisão entre " + primeiroNumero + " e " + segundoNumero + " é: " + resultado);
            
        }
        break
    default:
        alert("Selecione um operador válido!")
}