const num = parseInt(prompt('Insira um número'))
let fatorial = 1
for (let i = 1; i <= num; i++) {
    console.log(fatorial)
    fatorial *= i
}

console.log(`A fatorial de ${num} é ${fatorial}`)