/*Escreva um programa em javascript que simule um menu 
interativo com 5 opções diferentes. O programa deverá 
iniciar mostrando as 5 opções disponíveis, as quatro 
primeiras não precisam de nenhuma funcionalidade 
específica, a última opção deve ser a opção 
“Encerrar”. Ao clicar em alguma das quatro 
primeiras opções uma mensagem deve ser 
exibida na tela indicando qual foi 
a opção escolhida e depois o 
programa deve exibir novamente 
o menu com as 5 opções. 
Isso deve continuar acontecendo 
até que o usuário escolha a opção 
“Encerrar”. Ao escolhe-la uma mensagem 
dizendo que o sistema está sendo encerrado 
deve ser exibida na tela e então o programa é finalizado.*/

function escolha() {
    while (true) {
        let opc_escolha = parseFloat(prompt("Escolha uma das opções:\n[1] - Opção um\n[2] - Opção dois\n[3] - Opção três\n[4] - Opção quatro\n[5] - Finalizar"));
        switch (opc_escolha) {
            case 1:
                alert("A opção escolhida foi a opção de número: " + opc_escolha + " (Opção um)");
                break;
            case 2:
                alert("A opção escolhida foi a opção de número: " + opc_escolha + " (Opção dois)");
                break;
            case 3:
                alert("A opção escolhida foi a opção de número: " + opc_escolha + " (Opção três)");
                break;
            case 4:
                alert("A opção escolhida foi a opção de número: " + opc_escolha + " (Opção quatro)");
                break; 
            case 5:
                alert("A opção escolhida foi a opção de número: " + opc_escolha + " (Opção cinco - FINALIZAR)");
                return; // Retorna após a escolha
            default:
                alert("Escolha uma opção válida");
                opc_escolha = parseFloat(prompt("Escolha uma das opções:\n[1] - Opção um\n[2] - Opção dois\n[3] - Opção três\n[4] - Opção quatro\n[5] - Finalizar"));
        }
    }
}

escolha();
