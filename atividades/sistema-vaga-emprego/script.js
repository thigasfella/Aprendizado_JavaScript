// Função para exibir o menu de opções e capturar a escolha do usuário
function menu(){
    const opc = parseInt(prompt(
        "Seja bem-vindo ao sistema de vagas, selecione uma das opções a seguir:\n" +
        "\n[1] - Listar vagas disponíveis" +
        "\n[2] - Criar uma nova vaga" +
        "\n[3] - Visualizar uma vaga" +
        "\n[4] - Inscrever um candidato" +
        "\n[5] - Excluír vaga" +
        "\n[6] - Sair"
    ))
    return opc
}

// Array para armazenar as vagas criadas
let vagas = []

// Variável para acompanhar o índice das vagas
let indice = 0

// Função para listar todas as vagas disponíveis
function listarVagas(){
    let search = vagas.map(function(item) {
        return item.indice + " - Nome da vaga: " + item.nome_vaga + "\nDescrição: " + item.descricao_vaga + "\nCandidatos: " + item.candidatos + "\n\n";
    });
    alert(search.join(''))
}

// Função para criar uma nova vaga
function criarVagas() {
    const nome_vaga = prompt("Digite o nome da vaga: ");
    const descricao_vaga = prompt("Escreva uma descrição para essa vaga:");
    const data_limite_vaga = parseInt(prompt("A vaga ficará aberta por quantos dias?"));

    // Repetir a pergunta até que o usuário insira 'SIM' ou 'NÃO'
    let confirmar;
    do {
        confirmar = prompt("Tem certeza que deseja prosseguir? [SIM] - [NÃO]").toLowerCase();
        if (confirmar !== "sim" && confirmar !== "não" && confirmar !== "nao") {
            alert("Escreva somente [SIM] ou [NÃO].");
        }
    } while (confirmar !== "sim" && confirmar !== "não" && confirmar !== "nao");

    if (confirmar === "sim") {
        indice++
        const dadosVaga = {
            indice,
            nome_vaga,
            descricao_vaga,
            data_limite_vaga,
            candidatos: []
        };
        vagas.push(dadosVaga);
        alert("Vaga criada com sucesso!");
    } else {
        alert("Cancelando operação...");
    }
}

// Função para visualizar os detalhes de uma vaga específica
function visualizarVaga(){
    const indice_vaga = parseInt(prompt("Digite o índice da vaga:")) 
    const vaga = vagas.find(vaga => vaga.indice === indice_vaga)
    if(vaga){
        let search = vaga.indice + " - Nome da vaga: " + vaga.nome_vaga + "\nDescrição: " + vaga.descricao_vaga + "\nCandidatos: " + vaga.candidatos + "\n\n";
        alert(search)
    }else{
        alert("Vaga não encontrada!")
    }
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidatoEmUmaVaga(){
    const nome_vaga = parseInt(prompt("Digite o índice da vaga: "))     
    const vaga = vagas.find(vaga => vaga.indice === nome_vaga)
    let dados_vaga

    if(vaga){
        do{
            dados_vaga = prompt("Você está se candidatando para a vaga: " + vaga.nome_vaga + "\nDescrição: " + vaga.descricao_vaga + "\nVaga expira em: " + vaga.data_limite_vaga + " dias.\n\nTem certeza que deseja prosseguir? [SIM] - [NÃO]")
            if (dados_vaga !== "sim" && dados_vaga !== "não" && dados_vaga !== "nao") {
                alert("Escreva somente [SIM] ou [NÃO].");
            }
        }while(dados_vaga !== "sim" && dados_vaga !== "não" && dados_vaga !== "nao")

        if (dados_vaga === "sim"){
            const nome_cadidato = prompt("Digite seu nome: ")
            vaga.candidatos.push(nome_cadidato)
            alert('Você se candidatou para a vaga: ' + vaga.nome_vaga)
        } else if(dados_vaga === "não" || dados_vaga === "nao"){
            alert("Cancelando operação...")
        }

    }else{
        alert("Vaga não encontrada!")
    }
}

// Função para excluir uma vaga existente
function excluirVaga(){
    const vaga_excluir = parseInt(prompt("Digite o índice da vaga que deseja excluir"));

    // Encontrar o índice da vaga a ser excluída no array 'vagas'
    const indiceVaga = vagas.findIndex(vaga => vaga.indice === vaga_excluir);
    
    if (indiceVaga !== -1) { 
        vagas.splice(indiceVaga, 1);
        console.log("Vaga excluída com sucesso!");
    } else {
        console.log("Vaga não encontrada!");
    }
}

// Função principal que exibe o menu e chama as funções de acordo com a escolha do usuário
function chamaMenu(){
    while(true){
        let opc = menu()
        switch(opc){
            case 1:
                listarVagas()
                break
            case 2:
                criarVagas()
                break
            case 3:
                visualizarVaga()
                break
            case 4:
                inscreverCandidatoEmUmaVaga()
                break
            case 5:
                excluirVaga()
                break
            case 6:
                return
            default:
                alert("Insira um valor válido!")
        }
    }
}

// Inicia o sistema chamando a função principal
chamaMenu();
