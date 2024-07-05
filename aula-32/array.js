/*const listaDeCompras = []

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Feijão"
listaDeCompras[2] = 7

console.log(listaDeCompras)*/


const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//adicionar elementos
//push
//arr.push("Boromir")
//arr.push("Boromir")
//arr.push("Boromir")
//arr.push("Boromir")
//console.log(arr)

// unshift

arr.unshift("Boromir")
//console.log(arr)

// Remover elementos no final
//pop

let ultimoElemento = arr.pop()
//console.log(ultimoElemento)
//console.log(arr)

//remover elementos no começo
ultimoElemento = arr.shift()
//console.log(ultimoElemento)
//console.log(arr)

//pesquisar por um elemento

const inclui = arr.includes("Gandalf")
//console.log(inclui)

//indexof

const indice = arr.indexOf("Gandalf")
//console.log(indice)

// Cortar e concatenar os arrays
// slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
//console.log(outros)
//console.log(hobbits)

//concatenar (contat)

const sociedade = hobbits.concat(outros, "Boromir")

//console.log(sociedade)


//substituição dos elementos
//splice

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o cinzento")
console.log(sociedade)

console.log(elementosRemovidos)

//Iterar sobre os elementos

for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + "Se encontra na posição " + indice)
}