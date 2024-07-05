/*Escreva um programa em javascript para simular uma fila 
de espera em um consultório médico. O programa deve 
iniciar mostrando na tela um menu interativo contendo 
a lista de todos os pacientes esperando em ordem 
mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções de “Novo paciente”, 
para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), 
“Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome 
do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher 
a opção de “Sair”, caso contrário deve voltar ao menu.*/
function fila(){
    const pacientes = []
    while(true){
        let primeiroPaciente = pacientes[0]
        let lista_opcoes = parseInt(prompt("[1] - Novo paciente\n[2] - Consultar paciente\n[3] - Ver Todos Os Pacientes\n[4] - Sair"))
        let nome
        switch(lista_opcoes){
            case 1:
                nome = prompt("Escreva o nome do paciente")
                pacientes.push(nome)
                alert("O nome '" + nome + "' foi adicionado com sucesso!")
                break
            case 2:
                primeiroPaciente = pacientes[0]
                if(primeiroPaciente){
                    alert("Paciente " + primeiroPaciente + " será atendido agora!")
                    pacientes.shift()
                }else{
                    alert("Não há pacientes na fila!")
                }
                break
            case 3:
                if (pacientes.length === 0) {
                    alert("Não há pacientes na lista.");
                } else {
                    let listaPacientes = "Lista de Pacientes:\n";
                    for(let i = 0; i < pacientes.length; i++) {
                        listaPacientes += (i + 1) + "° " + pacientes[i] + "\n";
                    }
                    alert(listaPacientes);
                }
                break;
            case 4:
                return
            default:
                alert("Selecione um valor válido!")
                break
        }
    }
}
fila()