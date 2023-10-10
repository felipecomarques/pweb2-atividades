let soma = 0
for (i = 1; i <= 5; i++) {
    const nota = parseInt(prompt(`Insira a nota ${i}:`))
    soma += nota
}
const media = soma / 5
console.log(`A média das notas é: ${media} `)