export class validadorSenha{
    validarSenha(senha){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        const inputSenha = document.getElementById('senha')
        const labelSenha = document.getElementById('labelSenha')
        if(!passwordRegex.test(senha)){
            inputSenha.classList.add('err')
            labelSenha.classList.add('errLabel')
            labelSenha.textContent = 'Insira uma senha válida!'
            throw new Error('A senha precisa conter pelo menos um caracter especial "@", uma letra maiúscula "Ex. (A)", uma letra minúscula "Ex. (a)" e no minimo 8 caracteres!')
        }
        inputSenha.classList.add('confirm')
        console.log('Senha válida!')
        labelSenha.classList.remove('errLabel')
        labelSenha.textContent = ''
        return true
    }
}
