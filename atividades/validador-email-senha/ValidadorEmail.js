export class validadorEmail{
    validarEmail(email){
        const emailRegex = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/;
        const inputEmail = document.getElementById('email')
        const labelEmail = document.getElementById('labelEmail')
        if(!emailRegex.test(email)){
            inputEmail.classList.add('err')
            labelEmail.classList.add('errLabel')
            labelEmail.textContent = 'Insira um email válido!'
            throw new Error('Email inválido, por gentileza, preencha um email válido!')
        }
        inputEmail.classList.add('confirm')
        labelEmail.classList.remove('errLabel')
        labelEmail.textContent = ''
        return true
    }
}
