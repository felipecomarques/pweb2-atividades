function InverterString(string) {
    return string.split('').reverse().join('');
}

const palavra = prompt('Insira a palavra: ')

palavra == InverterString(palavra) ? console.log('É palíndromo') : console.log('Não é palíndromo')