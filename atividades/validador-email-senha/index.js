import { validadorEmail } from "./ValidadorEmail.js";
import { validadorSenha } from "./ValidadorSenha.js";

export class Validador{
    constructor(){
        this.validadorEmail = new validadorEmail()
        this.validadorSenha = new validadorSenha()
    }
    cancelarCarregamento(ev){
        ev.preventDefault()
    }
    validarConta(){
        const name = document.getElementById('nome').value;
        const inputEmail = document.getElementById('email').value
        const inputSenha = document.getElementById('senha').value

        try{
            const name = document.getElementById('nome')
            name.classList.add('confirm')
            this.validadorEmail.validarEmail(inputEmail)
            this.validadorSenha.validarSenha(inputSenha)
            const nome = name.value
            const email = inputEmail
            const senha = inputSenha

            console.log({
                nome: nome,
                email: email,
                senha: senha
            })
            alert('Formulário válidado com sucesso!')
        }catch(err){
            alert(err.message)
        }
    }
}
const validador = new Validador()

document.querySelector('form').addEventListener('submit', (ev) =>{
    validador.cancelarCarregamento(ev)
    validador.validarConta()
})