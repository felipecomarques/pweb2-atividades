const numero = prompt('Insira o número')
let cont = 1
let divisíveis = 0

while (cont <= numero) {
    if (numero % cont == 0)
        divisíveis++
    cont++
}

if (divisíveis <= 2)
    console.log('É primo')
else
    console.log('Não é primo')