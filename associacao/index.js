const Adress = require("./Adress");
const Person = require("./Person");

const addr = new Adress("7 de setembro", 99, "Centro", "São Fidelis", "RJ")
const john = new Person("John Doe", addr)


console.log(john)
console.log(john.adress.fullAdress())