"use strict";

require("./build.css");
var botaoSubtrair = document.getElementById('subtrairValor');
var botaoSomar = document.getElementById('somarValor');
var inputContador = document.getElementById('inputContador');
var contador = 0;
botaoSomar.addEventListener('click', function () {
  contador++;
  inputContador.value = contador;
});
botaoSubtrair.addEventListener('click', function () {
  if (contador <= 0) {
    return;
  } else {
    contador--;
  }
  inputContador.value = contador;
});