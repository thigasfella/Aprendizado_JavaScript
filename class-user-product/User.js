class User{
    constructor(fullname, email, senha){
        this.fullname = fullname,
        this.email = email,
        this.senha = senha
    }
    login(email, senha){
        if(this.email === email && this.senha === senha){
            console.log('Login realizado com sucesso.')
        } else {
          console.log('Falha ao fazer login! Email ou senha incorretos.')
        }
    }
}

const usuario = new User("Thiago Lopes de Souza", "email@gmail.com", 123)
usuario.login("email@gmail.com", 123)