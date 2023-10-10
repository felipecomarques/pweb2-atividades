const numParaAdivinhar = Math.floor(Math.random()*10) 
let numInserido

do {
    numInserido = prompt('Insira um número')
} while (numInserido != numParaAdivinhar)


console.log('Parabéns!')