function dobro(x){
    alert("O dobro de " + x + " é: " + (x * 2))
}
//dobro(10)

function dizerOla(name){
    alert("Olá, " + name)
}
//dizerOla("Thiago")

function soma(a, b){alert("O resultado da soma é " + (a + b))}
// soma(7,6)
function criaUsuario(nome, email, senha, tipo){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo,
    }
    console.log(usuario)
}
criaUsuario("Thiago", "thigasssdev@gmail.com", "99692178", "1234")