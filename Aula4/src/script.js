//Exemplo de Condição Lógica: If e Else
let x = 8;

if (x == 5){
    //console.log('A variável x é igual a 5!');
} else{
    //console.log('A variável x não é igual a 5!');
}

//Exemplos de Condição Lógica: If Else If
//let y = 10;
let y = 2
if(y > 3){
    console.log('A variável y é maior que 3!')
} else if (y == 3){
    // console.log('A variável y é igual a 3!')
} else{
    // console.log('A variável y possui um valor diferente das verificações')
}

// Exemplo de if 
const elemento = document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ':' + String(pegarMinutos);

console.log(hora);

if (pegarHoras > 18){
    elemento.innerHTML = 'Boa Noite!';
    elemento.style.color = 'yellow'
} 

// Exemplo If 2
let idade = 18;
let texto = 'You cant drive';

if (idade >= 18) {
    texto = 'You can drive!';
    let resultado = 'Your age is' + idade
}
document.getElementById('idade').innerHTML = 'Your age is:'+ idade;
document.getElementById('ex2').innerHTML = texto;

// Exemplo If Aninhado
let idade2 = 18;
let pais = 'Brasil';
let mensagem = 'Você não pode dirigir';

// if (pais == 'Brasil'){
//     console.log('O país definidido é o Brasil');
// }
if (pais == 'Brasil'){
    if(idade2 >= 18){
        mensagem = 'Você pode dirigir!';
    }
}

document.getElementById('ex3').innerHTML = mensagem;

//Exemplo de If Aninhado com operador AND (&&)
let idade3 = 16
let pais2 = 'Estados Unidos'
let mensagem2 = 'Você não pode dirigir'

if (pais2 == 'Estados Unidos' && idade3 == 16){
    mensagem2 == 'Você pode dirigir'
}

document.getElementById('ex3').innerHTML = mensagem;

