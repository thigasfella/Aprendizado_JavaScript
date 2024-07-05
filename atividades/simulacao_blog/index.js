const Post = require("./Post");
const Comment = require("./Comment")


const comment = new Comment("Thiago Lopes", "wow, que louco!")
const comment2 = new Comment("Seu lucas Gamer", "muito daora")
const post = new Post("Ygor", "O caminhoneiro fez drift")
post.addComentary(comment)
post.addComentary(comment2)


console.log(post)