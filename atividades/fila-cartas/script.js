function cartas(){
    let adicionar_carta = []
    let opc
    let pergunta_nome_carta
    while(true){
        opc = parseInt(prompt(
            "Escolha uma das opções:\n" +
            "[1] - Adicionar uma carta\n" +
            "[2] - Puxar uma carta\n" +
            "[3] - Sair"
        ))
        switch(opc){
            case 1:
                pergunta_nome_carta = prompt("Escreva o nome da sua carta")
                adicionar_carta.unshift(pergunta_nome_carta)
                alert("Carta adicionada com sucesso!")
                break
            case 2:
                let carta_retirada = adicionar_carta[0]
                if (carta_retirada){
                    alert("A carta '" + carta_retirada + "' foi puxada do baralho!")
                    adicionar_carta.shift()
                }else{
                    alert("Não há cartas em seu baralho!")
                }
                break
            case 3:
                return

            default:
                alert("Escolha uma opção válida")
        }
    }
}
cartas()