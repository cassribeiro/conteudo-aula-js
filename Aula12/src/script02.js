//Primeiro Array
//const frutas = ['Laranja', 'Melancia', 'Morango', 'Uva'];

//console.log(frutas);

//Adicionando items ao array

const carros = [];

carros[0] = 'RAM';
carros[1] = 'Fiat';
carros[2] = 'Jeep';

console.log(carros);

//Criando array com new Array()
const cores = new Array ('Roxo', 'Preto', 'Azul');

console.log(cores);

console.log(cores[0]);

//Alterando elementos no Array
// const frutas = ['Laranja', 'Melancia', 'Morango', 'Uva'];

// frutas[0] = 'Tangerina'

// console.log(frutas[0]);

//Convertendo Array em String
// let stringFrutas = frutas.toString();

// console.log(stringFrutas);
// console.log(typeof frutas);

//Exemplo de elementos em array
const pessoa = {
  primeiroNome: "Cassia",
  ultimoNome: "Ribeiro",
  idade: 23,
  pais: "Brasil",
}

function minhaFuncao(){
    return'Olá';
}

const meuArray = [];

meuArray[0] =123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao;

console.log(meuArray);

//Acessando a propriedade lenght
const frutas = ['Laranja', 'Melancia', 'Morango', 'Uva'];

let fruta = frutas[frutas.length -1];

console.log(fruta);

//Usando forEach em Array
const elemento = document.querySelector('.ex1');
const comida = ['Yakissoba', 'Strogonoff', 'Lasanha', 'Macarronada', 'Japchae'];

//Adicionando item no Array
comida.push ('Feijoada');
comida.push('Sopa');
comida.push('Salada de Maionese');

let texto = '<ul>';

comida.forEach(retornaItem);

texto = texto + '</ul>';

elemento.innerHTML = texto;

function retornaItem(item) {
    texto = texto + '<li>' + item + '</li>'
};

