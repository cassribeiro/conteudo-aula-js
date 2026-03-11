//Criando meu primeiro objeto
const carro = { marca: 'Jeep', modelo: 'Compass', ano:2025, cor: 'preto' };

console.log(carro);

//Exemplo 2 de criação de objetos
const carro2 = {
    marca: 'Ford',
    modelo: 'ka' ,
    ano: 1998 ,
    cor: 'prata' ,
};
console.log(carro2);

//Exemplo 3 de criação de objeto 
const carro3 ={}

carro3.marca = 'Fiat';
carro3.modelo = 'Mobi';
carro3.ano = 2026;
carro3.cor = 'vermelho';

console.log(carro3['modelo']);

//Exemplo 4 de criação do objeto
const carro4 = new Object({
    marca: 'Volkswagen',
    modelo: 'CrossFox',
    ano: 2006,
    cor: 'Preto',
    acelerar: function(){
        return this.modelo + ' acelerou!';
    },
});

let marcaCarro = 'marca'

console.log(carro4[marcaCarro]);

