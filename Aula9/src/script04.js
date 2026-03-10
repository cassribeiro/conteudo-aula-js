//Criando a primeira função 
function primeiraFuncao() {
    return console.log('Somente a dor coletiva gera a união');
}
primeiraFuncao();

//Realizando operações com funções
// function multiplicar(a,b){
//     return console.log(a * b)
// }

// let mult1 = multiplicar(7,5);
// let mult2 = multiplicar(2,5);

//Realizando operações com funções
function multiplicar(a,b){
    return (a * b)
}

let mult3 = multiplicar(7,5);
let mult4 = multiplicar(2,5);

const elemento = document.querySelector('.ex1');

elemento.innerText = `
    ${mult3} \n
    ${mult4} \n
`;


