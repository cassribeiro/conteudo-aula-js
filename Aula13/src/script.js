//Array global
const frutas = ['Maracúja', 'Abacaxi', 'Morango', 'Jaca'];

//Utilizando a propriedade length()
let tamanhoFrutas = frutas.length;

console.log('O tamanho do array de frutas é:' + tamanhoFrutas);

console.log(frutas);

//Utilizando o método toString()
let minhasFrutas = frutas.toString();

console.log(minhasFrutas);

//Utilizando o método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);

//Utilizando o método join()
let apresentacaoFrutas = frutas.join(', ');

console.log(apresentacaoFrutas);

//Utilizando o método pop()
let removerItemFrutas = frutas.pop();

console.log(removerItemFrutas);

//Utilizando o método push()
let adicionarItemFrutas = frutas.push('Uva');

console.log(adicionarItemFrutas);
console.log(frutas);

//Utilizando o método shift()
let deslocarItemsFrutas = frutas.shift();

console.log(frutas);
console.log(deslocarItemsFrutas);

//Utilizando o método unshift()
let deslocarItemsFrutas2 = frutas.unshift('Pessêgo');

console.log(frutas);
console.log(deslocarItemsFrutas2);

frutas[1] = 'Kiwi';

console.log(frutas);

//Utilizando o length para adicionar items ao array 
frutas[frutas.length] = 'Pitaya';

console.log(frutas);

//Utilizando o método isArray
console.log(Array.isArray(frutas));

//Utilizando o método delete()
//delete frutas[0];

console.log(frutas);

//Utilizando o método concat()
const motos = ['Suzuki', 'Honda', 'Yamaha'];
const carros = ['RAM', 'Fiat', 'Jeep'];

const veiculos = motos.concat(carros);

console.log(veiculos);

//Utilizando o copyWithin()
//let copiaItems = frutas.copyWithin(2,0);

console.log(frutas);

//Exemplo de matriz em JavaScript (array multidimensional)
// const matriz = [
//     [1,2],
//     [3,4], 
//     [5,6]
// ];
const matriz = [[1,2],[3,4],[5,6]];

console.log(matriz[1] [0]);

//Exemplo de vetor em JavaScript (array unidimensional)
const comida = ['Hamburguer', 'Yakissoba', 'kimchi'];

//Utilizando o método flat()
const listaNumeros = [[1,2], [3,4], [5,6]];

const novaListaNumeros = listaNumeros.flat();

console.log(listaNumeros);
console.log(novaListaNumeros);

//Utilizando o flatMap()
const listaNumeros2 = [1,2,3,4,5,6,7,8,9,10];

const novaListaNumeros2 = listaNumeros2.flatMap((item)=> {
    return [item, item*10];
});

console.log(novaListaNumeros2);

//Utilizando o método splice()
console.log(frutas);

let novaListaFrutas = frutas.splice(2, 0, 'Abacate', 'Goiaba');

console.log(frutas);
//console.log(novaListaFrutas);

//Utilizando o toSpliced()
console.log(frutas);
const frutasToSpliced = frutas.toSpliced(0,0);
console.log(frutasToSpliced);

//Utilizando o slice
const copiaFrutas = frutas.toSpliced(0,0);

const frutasSlice = copiaFrutas.slice(2);

console.log(frutasSlice);

const frutasSlice2 = copiaFrutas.slice(1,4);

console.log(frutasSlice2);
