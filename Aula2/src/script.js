//Exemplos de operador de atribuição
let x = 10;

x = x + 5;
//console.log(x);

x = x + 5;
//console.log(x);

//Exemplos de Aritmética 
let soma = 5 + 5 + 4;

console.log (soma)

const primeiroNome = 'Cassia';
const ultimoNome = 'Ribeiro';

let nomeCompleto = primeiroNome + ultimoNome;

//console.log(nomeCompleto)

// Exemplos de tipos em JavaScript
//String
let cor = 'Azul';
let fruta = 'Morango';

console.log(cor);
console.log(fruta);

//Number
let soma1 = 5 + 5;
let subtracao = 10 - 3;

console.log(soma1);
console.log(subtracao)

//Bigint
let bigint = 1234567890123456789012345n;
let bigint2 = BigInt(1234567890123456789012345);

console.log(bigint);
console.log(bigint2);

//Boolean
let valorVerdadeiro = true;
let valorFalso = false;

console.log(valorVerdadeiro);
console.log(valorFalso);

//Object
const carro = {
    marca: 'Fiat',
    modelo: 'Fiat Toro',
    cor: 'Vermelho cereja',
}

console.log(carro)

console.log('A marca do carro é: ' + carro.marca)

//Array Object
const frutas = ['Melancia', 'Lichia', 'Uva', 'Maracuja', 'Abacaxi'];

console.log(frutas);

//Date Object
const data = new Date;

console.log(data)

//Undefined

let indefinido;

console.log(indefinido)

//Null
let nulo = null;

console.log(nulo);

//Symbol
let y = Symbol();

console.log(y)


//Exemplos de typeof
let stringTipo = '300';
let numberTipo = 300;

const tipoDado = typeof stringTipo;

console.log(tipoDado)

//Exemplos de Boolean
let cinco = 5;
let comparacao = cinco == 8;

console.log(comparacao);