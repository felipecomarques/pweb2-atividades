let altura = parseFloat(prompt('Insira sua altura: '))
let peso = parseFloat(prompt('Insira seu peso: '))

imc = peso / (altura * altura)
console.log(`Seu IMC é ${imc}`)