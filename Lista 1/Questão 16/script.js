const numParaAdivinhar = Math.floor(Math.random() * 100)
let numInserido

do {
    numInserido = prompt('Insira um número')
    if (numParaAdivinhar < numInserido)
        console.log('O número é menor')
    else if (numParaAdivinhar > numInserido)
        console.log('O número é maior')
    else
        console.log('Você adivinhou, parabéns!')
} while (numInserido != numParaAdivinhar)