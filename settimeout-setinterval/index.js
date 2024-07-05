console.log('Programa iniciado!')

// const timeoutId = setTimeout(() =>{
//     console.log('3 segundos se passaram desde que o programa foi iniciado.')
// }, 3000)

// clearTimeout(timeoutId)

let seconds = 0

const intervald = setInterval(() =>{
    seconds += 3
    console.log(`Se passaram ${seconds} segundos!`)
    if(seconds > 10){
        clearInterval(intervald)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 3000)

