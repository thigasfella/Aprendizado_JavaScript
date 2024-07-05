module.exports = class Transfer{
    constructor(userTransfer, userRecebe, value){
        this.userTransfer = userTransfer
        this.userRecebe = userRecebe
        this.value = value
        this.dateCreation = new Date()
    }
}