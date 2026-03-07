//Utilização do método padStart()
let texto = '7';
texto = texto.padStart(3, '0');

console.log(texto);

//Utilização do método padEnd()
let texto2 = '7'
texto2 = texto2.padEnd(3, '0');

console.log(texto2);

//Utilização do método repeat()
let fruta = 'Morango ';
let repeticao = fruta.repeat(4);

console.log(repeticao);

//Utilização do método replace()
let kdrama = 'Spring Fever'
let novoKdrama = kdrama.replace('Spring Fever', 'My Idol');

console.log(novoKdrama);

//Utilização do método replaceAll()
let frase = 'Hoje eu almocei muito bem! Comi abóbora, chuchu e salada! A farofa de banana também estava muito boa.';

frase = frase.replaceAll('farofa de banana', 'farofa de alho');
frase = frase.replaceAll('chuchu', 'pepino');

console.log(frase);

//Utilização do método split()
let saudacao = 'Oie, Tudo bem?'
let exsplit = saudacao.split('');

console.log(exsplit);

//Utilização dos métodos indexOf(), lastIndexOf() e search()
let exemplo = 'Por favor localize onde "localize" ocorre';
let exIndexOf = exemplo.indexOf('localize');

let exLastIndexOf = exemplo.lastIndexOf('localize');

let exSearch = exemplo.search('favor');

console.log(exIndexOf);
console.log(exLastIndexOf);
console.log(exSearch);

//Utilização do método includes()
let olaMundo = 'Olá, mundo! Bem-vindo ao universo!';
let exIncludes = olaMundo.includes('mundo');

console.log(exIncludes);

//Utilização do método startsWith()
let olaMundo2 = 'Olá, mundo! Bem-vindo ao universo!';
let exStarstWith = olaMundo2.startsWith('Olá');
let exStarstWith2 = olaMundo2.startsWith('universo');

console.log(exStarstWith);
console.log(exStarstWith2);

//Utilização do método endsWith()
let nome = 'Harry Styles'
let exEndsWith = nome.endsWith('Styles');

console.log(exEndsWith);