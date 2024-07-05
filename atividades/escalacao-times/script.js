function addPlayer() {
    let confirm;
    do {
        confirm = prompt("Você tem certeza que deseja prosseguir? [sim] - [não]").toLowerCase();
        if (confirm !== "sim" && confirm !== "não" && confirm !== "nao") {
            alert("Por favor, escreva somente 'sim' ou 'não'");
        }
    } while (confirm !== "sim" && confirm !== "não" && confirm !== "nao");
    
    if (confirm === "nao" || confirm === "não") {
        return;
    }
    const posicaoJogador = document.getElementById('posicao_jogador').value
    const nome = document.getElementById('nome_jogador').value
    const numeroCamisa = document.getElementById('camisa_jogador').value
    const div = document.getElementById('playerlist')
    if(numeroCamisa < 0){
        alert("O número da camisa do jogador não pode ser menor que '0'.")
    }

    if(posicaoJogador === '' || nome === '' || numeroCamisa === ''){
        alert("ATENÇÃO:\nPreencha todos os campos!")
    }else{
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const li_two = document.createElement('li')
        const li_three = document.createElement('li')
        li.innerText = "A posição do jogador é: " + posicaoJogador
        li_two.innerText = "Nome do jogador: " + nome
        li_three.innerText = "Número da camisa: " + parseFloat(numeroCamisa)
        
        ul.append(li, li_two, li_three)
        div.appendChild(ul)
    }

}

function deletePlayer(){
    const numberPlayer = parseFloat(prompt("Informe o número da camisa do jogador: "))
    let confirm;

    do {
        confirm = prompt("Você tem certeza que deseja prosseguir? [sim] - [não]").toLowerCase();
        if (confirm !== "sim" && confirm !== "não" && confirm !== "nao") {
            alert("Por favor, escreva somente 'sim' ou 'não'");
        }

    } while (confirm !== "sim" && confirm !== "não" && confirm !== "nao");
    
    if (confirm === "nao" || confirm === "não") {
        return;
    }
    
    else{
        const div = document.getElementById('playerlist')
        const elementPlayer = document.getElementsByTagName('ul')
        let playerfound = false


        for(i = 0; i < elementPlayer.length; i++){

            const liNumero = elementPlayer[i].querySelector('li:last-child')
            const numberCamisa = parseFloat(liNumero.innerText.split(': ')[1])


            if(numberCamisa === numberPlayer){
                div.removeChild(elementPlayer[i])
                playerfound = true
                break
            }


            if(!playerfound){
                alert("Esse jogador não existe na sua lista!")
             }
        
        }
    }
}
