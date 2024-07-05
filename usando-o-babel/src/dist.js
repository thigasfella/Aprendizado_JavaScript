"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Aguarda o carregamento do conteúdo HTML
document.addEventListener('DOMContentLoaded', function () {
  // Obtenção dos elementos HTML necessários
  var input_media_aritmetica_simples_resultado = document.getElementById("input_aritmetica_simples_resultado");
  var input_media_aritmetica_ponderada_resultado = document.getElementById("input_aritmetica_ponderada_resultado");
  var input_mediana_resultado = document.getElementById("input_mediana_resultado");
  var input_moda_resultado = document.getElementById("input_moda_resultado");
  var btn_mediana = document.getElementById("btn_calcular_mediana");
  var btn_moda_calculo = document.getElementById("btn_moda_calculo");
  var btn_calcular_media_aritmetica_simples = document.getElementById("calcular_aritmetica_simples");
  var btn_calcular_media_aritmetica_ponderada = document.getElementById("calcular_aritmetica_ponderada");

  // Função para calcular a média aritmética simples
  var calculo_media_aritmetica_simples = function calculo_media_aritmetica_simples() {
    var input_media_aritmetica_simples = document.getElementById("input_aritmetica_simples").value;
    var valores_separados = input_media_aritmetica_simples.split(' ');
    var numRegex = /^-?\d*\.?\d+$/;
    // Verifica se os valores são números válidos
    for (var _len = arguments.length, array_numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      array_numbers[_key] = arguments[_key];
    }
    for (var i = 0; i < valores_separados.length; i++) {
      var valor = parseFloat(valores_separados[i]);
      if (isNaN(valor) || valores_separados.some(function (valor) {
        return !numRegex.test(valor.toString());
      })) {
        alert("Insira valores válidos!");
        return;
      }
      array_numbers.push(valor);
    }
    // Calcula a média aritmética simples
    var sum = array_numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    return sum / array_numbers.length;
  };

  // Evento de clique para calcular a média aritmética simples
  btn_calcular_media_aritmetica_simples.addEventListener('click', function () {
    var resultado = calculo_media_aritmetica_simples();
    input_media_aritmetica_simples_resultado.value = resultado.toFixed(2);
    input_media_aritmetica_simples_resultado.style.color = "white";
  });

  // Função para calcular a média aritmética ponderada
  var calculo_media_aritmetica_ponderada = function calculo_media_aritmetica_ponderada(valores, pesos) {
    var soma_pesos = pesos.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    var soma_valores_pesados = 0;
    for (var i = 0; i < valores.length; i++) {
      soma_valores_pesados += valores[i] * pesos[i];
    }
    return soma_valores_pesados / soma_pesos;
  };

  // Evento de clique para calcular a média aritmética ponderada
  btn_calcular_media_aritmetica_ponderada.addEventListener('click', function () {
    var input_media_aritmetica_ponderada = document.getElementById("input_aritmetica_ponderada").value;
    var input_pesos = document.getElementById("input_aritmetica_ponderada_pesos").value;
    var valores_separados = input_media_aritmetica_ponderada.split(' ');
    var pesos_separados = input_pesos.split(' ');
    var valores = [];
    var pesos = [];
    var numRegex = /^-?\d*\.?\d+$/;
    // Verifica se os valores e pesos são números válidos
    for (var i = 0; i < valores_separados.length; i++) {
      var valor = parseFloat(valores_separados[i]);
      var peso = parseFloat(pesos_separados[i]);
      if (!numRegex.test(valores_separados[i]) || !numRegex.test(pesos_separados[i])) {
        alert("Insira valores e pesos válidos!");
        return;
      }
      // Verifica se a quantidade de valores e pesos coincide
      if (valores_separados.length != pesos_separados.length) {
        alert("Os valores não coincidem!");
        return;
      }
      valores.push(valor);
      pesos.push(peso);
    }
    var resultado = calculo_media_aritmetica_ponderada(valores, pesos);
    if (resultado !== undefined) {
      input_media_aritmetica_ponderada_resultado.value = resultado.toFixed(2);
      input_media_aritmetica_ponderada_resultado.style.color = "white";
    }
  });

  // Função para calcular a mediana
  var calculo_mediana = function calculo_mediana(valores) {
    if (valores.length % 2 === 0) {
      var meio = valores.length / 2;
      return (valores[meio - 1] + valores[meio]) / 2;
    } else {
      var _meio = Math.floor(valores.length / 2);
      return valores[_meio];
    }
  };

  // Evento de clique para calcular a mediana
  btn_mediana.addEventListener('click', function () {
    var input_mediana_valor = document.getElementById("input_mediana").value;
    var valores_separados = input_mediana_valor.split(' ').map(Number);
    valores_separados.sort(function (a, b) {
      return a - b;
    });
    var numRegex = /^-?\d*\.?\d+$/;

    // Verifica se há valores não numéricos ou com vírgulas
    if (valores_separados.some(isNaN) || valores_separados.some(function (valor) {
      return !numRegex.test(valor.toString());
    })) {
      alert("Insira valores válidos!");
      return;
    }
    var resultado = calculo_mediana(valores_separados);
    input_mediana_resultado.value = resultado.toFixed(2);
    input_mediana_resultado.style.color = "white";
  });

  // Função para calcular a moda
  var calculo_moda = function calculo_moda(array_moda) {
    var contador = {};
    var maxRepeticoes = 0;
    var modas = [];
    var _iterator = _createForOfIteratorHelper(array_moda),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _valor = _step.value;
        contador[_valor] = (contador[_valor] || 0) + 1;
        if (contador[_valor] > maxRepeticoes) {
          maxRepeticoes = contador[_valor];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    for (var valor in contador) {
      if (contador[valor] === maxRepeticoes) {
        modas.push(parseFloat(valor));
      }
    }
    return modas;
  };

  // Evento de clique para calcular a moda
  btn_moda_calculo.addEventListener('click', function () {
    var valor_input_moda = document.getElementById("input_moda").value;
    var valores_separados = valor_input_moda.split(' ').map(Number);
    var array_moda = [];
    var numRegex = /^-?\d*\.?\d+$/;
    valores_separados.forEach(function (valor) {
      return array_moda.push(valor);
    });

    // Verifica se há valores não numéricos ou com vírgulas
    if (valores_separados.some(isNaN) || valores_separados.some(function (valor) {
      return !numRegex.test(valor.toString());
    })) {
      alert("Insira valores válidos!");
      return;
    }
    var resultado = calculo_moda(array_moda);
    document.getElementById("input_moda_resultado").value = resultado.join(', ');
    document.getElementById("input_moda_resultado").style.color = "white";
  });
});
