import './build.css';

const botaoSubtrair = document.getElementById('subtrairValor')
const botaoSomar = document.getElementById('somarValor')
const inputContador = document.getElementById('inputContador')

let contador = 0
botaoSomar.addEventListener('click', () => {
    contador++
    inputContador.value = contador
})


botaoSubtrair.addEventListener('click', () => {
    if(contador <= 0){
        return
    }else{
        contador--
    }
    inputContador.value = contador
})