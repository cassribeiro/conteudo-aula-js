//Utilização do método toString()
let numero = 123;
let exToString = numero.toString();
console.log(typeof exToString);

//Octeto completo vale 255 - lembrar disso

//Utilização do método toExponential()
let a = 9.646;
let exToExponential = a.toExponential(2);
console.log(exToExponential);

//Utilização do método toFixed() - perfeito para trabalhar com valores monetários
let b = 44.465778;
let exToFixed = b.toFixed(2);
console.log(exToFixed);

//Utilização do método toPrecision()
let c = 77.55554
let exToPrecision = c.toPrecision(4);
console.log(exToPrecision);

//Os métodos de cima não são retornados como números e sim como string(texto)

//Utilização do método valueOf() - retorna os números como número e não como string
let d = 9031993;  //HAPPY SUGA DAY
let exValueOf = d.valueOf();
console.log(exValueOf);

//método = ação
//propriedade = característica 

//Utilização do método Number()
let e = '777';
let exNumber = Number(e);
console.log(exNumber);