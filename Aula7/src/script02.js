//Utilização do método charAt()
let texto = 'Abacate';
let exCharAt = texto.charAt(6);

console.log(exCharAt);

//Utilização do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);
console.log(exCharCodeAt);

//Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);

//Utilização do método At()
let exAt = texto.at(6);
let exAtComoArray = texto[2];
console.log(exAt);
console.log(exAtComoArray);

//Utilização do método concat()
let texto2 = 'Verde';
let texto3 = texto.concat(' ', texto2);
console.log(texto3)

//Utilização do método slice()
let frutas = 'Banana, Maçã e Uva';
let exSlice = frutas.slice(2,11);
console.log(exSlice);

//Utilização de toUpperCase() e toLowerCase
let carro = 'Fiat mobi'
let carro2 = 'IMPALA'

let exLowerCase = carro2.toLowerCase();
let exUpperCase = carro.toUpperCase();

console.log(exLowerCase);
console.log(exUpperCase);

//Utilização do método isWellFormed()
let saudacao = 'Hello! Welcome!';
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);

//Utilização do método trim()
let thalison = '                     O Thalison gosta do         Corinthians ';

let exTrim = thalison.trim();

console.log(exTrim);