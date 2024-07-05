class Account{
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
    getBalance(email, password){
        if (this.#authenticate){
            return this.#balance
        }else{
            return null
        }
    }
    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "thiago@email.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount, myAccount.getBalance("thiago@email.com", "123456"))