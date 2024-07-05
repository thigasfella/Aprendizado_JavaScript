function carteira(){
    let carteira = 0
while(true){
    let valor_adicionado
    let valor_retirado
    let receber = parseFloat(prompt("O saldo atual da sua carteira é: " + carteira + " dito isso, segue as opções:\n[1] - Adicionar valor na carteira\n[2] - Retirar valor na carteira\n[3] - Sair das opções"))
switch(receber){
    case 1:
         valor_adicionado = parseFloat(prompt("Informe o valor que será adicionado à sua carteira:"));
         if (valor_adicionado <= 0){
            alert("Não há saldo disponivel para ser adicionado a sua carteira")
            break
         }else{
            carteira += valor_adicionado;
            alert("O valor de " + valor_adicionado + " foi adicionado à sua carteira. Agora o seu saldo é de: " + carteira);
            break;
         }
    case 2:
        valor_retirado = parseFloat(prompt("Informe o valor que será retirado da sua carteira:"));
        if (valor_retirado > carteira || valor_retirado <= 0){
            alert("Não há saldo disponivel na sua carteira para ser retirado")
            break
        }else{
            carteira -= valor_retirado;
            alert("O valor de " + valor_retirado + " foi retirado da sua carteira. Agora o seu saldo é de: " + carteira);
            break;
        }
    case 3:
        alert("Finalizando...")
        return
    default:
        alert("Selecione um valor válido!")
        break;
      }
    }
 }
carteira();