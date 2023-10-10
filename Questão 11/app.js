function maiorNumero(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3)
        return num1
    else if (num2 >= num1 && num2 >= num3)
        return num2
    else
        return num3
}

let num1 = parseInt(prompt('Insira o primeiro número:'))
let num2 = parseInt(prompt('Insira o segundo número:'))
let num3 = parseInt(prompt('Insira o terceiro número:'))

alert('O maior número é ' + maiorNumero(num1, num2, num3))