let palavra_normal = prompt("Digite uma palavra para verificar se é palíndromo").toLowerCase();
let palavra_invertida = palavra_normal.split("").reverse().join("");

if (palavra_normal == palavra_invertida){
    alert("Essa palavra é um palíndromo")
}else{
    alert("Essa palavra não é um palíndromo")
}