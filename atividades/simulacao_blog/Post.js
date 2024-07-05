class Post{
    constructor(author, conteudo, comments){
        this.author = author
        this.conteudo = conteudo
        this.comments = []
    }
    addComentary(comment){
        this.comments.push(comment)
    }
}
module.exports = Post