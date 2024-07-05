const btn_resetar = document.getElementById("resetar")
const celulas = document.querySelectorAll(".casa")
const nomePlayerX = document.getElementById("namePlayerx")
const divX = document.getElementById("name01")
const nomePlayerO = document.getElementById("namePlayero")
const divO = document.getElementById("name02")
const jogadorDaVez = document.getElementById("jogadorDaVez")
let verificarNomePlayerX 
let verificarNomePlayerO 
let jogadorAtual = 'X'
let combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


nomePlayerX.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault()
        const h3 = document.createElement('h3')
        const nomeX = nomePlayerX.value
        h3.textContent = nomeX
        verificarNomePlayerX = nomeX
        h3.classList.add("nomeX")
        divX.appendChild(h3)
        nomePlayerX.value = ''
        nomePlayerX.disabled = true; // Desabilita o 
        atualizarJogadorDaVez()
    }
})
nomePlayerO.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault()
        const h3 = document.createElement('h3')
        const nomeO = nomePlayerO.value
        h3.textContent = nomeO
        verificarNomePlayerO = nomeO
        h3.classList.add("nomeO")
        divO.appendChild(h3)
        nomePlayerO.value = ''
        nomePlayerO.disabled = true; // Desabilita o input
    }
})

function atualizarJogadorDaVez() {
    jogadorDaVez.innerHTML = '&nbsp;' + (jogadorAtual === "X" ? verificarNomePlayerX : verificarNomePlayerO);
}

function verificarVencedor() {

    for (let i = 0; i < combinacoesVencedoras.length; i++) {
        const [a, b, c] = combinacoesVencedoras[i];
        if (
            celulas[a].textContent !== "" &&
            celulas[a].textContent === celulas[b].textContent &&
            celulas[a].textContent === celulas[c].textContent
        ) {
            return celulas[a].textContent; // Retorna o texto do jogador vencedor (X ou O)
       }
    } return null; // Retorna null se não houver um vencedor nesta jogadal
}

function clicarCelula(event) {
    const cell = event.target; // Obtém a célula clicada a partir do evento
    if(verificarNomePlayerX != undefined && verificarNomePlayerO != undefined){
    if (cell.textContent === "") {
        cell.textContent = jogadorAtual; // Marca a célula com o jogador atual
                
        if(cell.textContent === "X"){
            cell.classList.add("x")
        }else{
            cell.classList.add("o")
        }
        const vencedor = verificarVencedor()
        if (vencedor === "X"){
            alert('O jogador ' + verificarNomePlayerX + ' venceu!')
            resetar()
        }else if(vencedor === "O"){
            alert('O jogador ' + verificarNomePlayerO + ' venceu!')
            resetar()
        }else{
            const velha = verificarVelha()
            if(velha){
                alert("Deu velha!")
                resetar()
            }else{
            // Alterna para o próximo jogador
            jogadorAtual = jogadorAtual === "X" ? "O" : "X";
            atualizarJogadorDaVez()

          }

       }
    }
}else{
    alert("Preencha os nomes!")
}
}

function verificarVelha(){
    let celulasPreenchidas = 0; // Inicializa o contador de células preenchidas
    for (let i = 0; i < celulas.length; i++) {
        if (celulas[i].textContent !== "") {
            celulasPreenchidas++;
        }
    }
    return celulasPreenchidas === celulas.length; // Retorna true se todas as células estiverem preenchidas
}

function resetar(){
    document.querySelectorAll('.casa').forEach(cell_reset => {
        cell_reset.textContent = ""
        cell_reset.classList.remove("x", "o");
    })
    jogadorAtual = 'X'
}

celulas.forEach(cell => {
    cell.addEventListener('click', clicarCelula)
})
