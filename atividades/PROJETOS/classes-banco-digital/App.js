const User = require("./User");
const Installment = require("./Installment");

try {
    const user1 = new User("Dono 1", "email1@example.com", "senha123");
    const user2 = new User("Dono 2", "email2@example.com", "outraSenha456");
    const user3 = new User("Dono 3", "email3@example.com", "senhaSuperSegura789");
    
    // Depositar em uma conta
    user1.depositar(100);
    user1.visualizarSaldo();

    // Transferir dinheiro para outra conta
    user1.transferir(50, user2);
    user1.visualizarSaldo();
    user2.visualizarSaldo();

    // Solicitar um empréstimo
    user2.fazerEmprestimo(500, 12);
    user2.visualizarSaldo();

    const installment1 = new Installment(1000, 12); // Empréstimo de R$1000 em 12 parcelas
    const installment2 = new Installment(500, 6);   // Empréstimo de R$500 em 6 parcelas
    // Exemplo de pagamento de parcela para o user1
installment1.pagarParcelas(1); // Paga a primeira parcela
installment1.getParcelasPendentes(); // Verifica as parcelas pendentes

// Exemplo de pagamento de parcela para o user2
installment2.pagarParcelas(3); // Paga a terceira parcela
installment2.getParcelasPendentes(); // Verifica as parcelas pendentes


    // Tentativa de criar novamente com o mesmo email para testar a exceção
    // const user4 = new User("Dono 4", "email1@example.com", "outraSenha456");
} catch (error) {
    console.error(error.message);
}
// Visualizar contas existentes
const visualizarContas = User.visualizarContasExistentes();
console.log("Contas existentes:");
console.log(visualizarContas);
