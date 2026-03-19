//Utilizando o getElementById()
const elemento1 = document.getElementById('selecionandoElementos');

console.log(elemento1);

//Utilizando o getElementsByTagName()
const elemento2 = document.getElementsByTagName('h1');

console.log(elemento2[1]);

//Utilizando o getElementByClassName()
const elemento3 = document.getElementsByClassName('selecionandoElementoPorClasse');

console.log(elemento3[0]);

//Utilizando o querySelector()
const elemento4 = document.querySelector('.elementoClasse');

console.log(elemento4);

const elemento5 = document.querySelector('#elementoId')

console.log(elemento5);

//utilizando o querySelectorAll()
const elementos = document.querySelectorAll('h3')

console.log(elementos[0]);