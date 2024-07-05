let imoveis = []
function opcoes(){
    let opc = parseInt(prompt(
        "Escolha uma das opções a seguir:\n" +
        "[1] - Salvar um imóvel\n" +
        "[2] - Visualizar imóveis salvos\n" +
        "[3] - Sair"
    ));
    return opc;
}

function cadastrarCasa(){
    let nome_proprietario = prompt("Digite o nome do proprietário:");
    let quantidade_quartos = prompt("Quantidade de quartos:");
    let quantidade_banheiros = prompt("quantidade_banheiros:");
    let possui_garagem = confirm("Possui garagem?");

    let casa = {
        nome_proprietario: nome_proprietario,
        quantidade_quartos: quantidade_quartos,
        quantidade_banheiros: quantidade_banheiros,
        possui_garagem: possui_garagem
    }
    imoveis.push(casa)
}

function visualizarCasas(){
    let todasAsCasas = "";
    for(let i = 0; i < imoveis.length; i++){
        let casa = imoveis[i]
        let possuiGaragem = casa.possui_garagem ? "Sim" : "Não";
        todasAsCasas +=(
            "Proprietário: " + casa.nome_proprietario +
            "\nQuantidade de quartos: " + casa.quantidade_quartos +
            "\nQuantidade de banheiros: " + casa.quantidade_banheiros +
            "\nPossui garagem: " + possuiGaragem + "\n\n"
        )
    }
    alert(todasAsCasas);
}

function menu(){
    while(true){
        let escolher = opcoes()
        switch(escolher){

            case 1:
                cadastrarCasa()
                break
            case 2:
                visualizarCasas()
                break
            case 3:
                return
        }
    }
}
 
menu();