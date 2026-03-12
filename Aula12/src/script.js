//Criando um construtor
function Pessoa(primeiroNome, ultimoNome, idade, pais){
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade
    this.pais = pais
}

const euMesmo = new Pessoa('Cassia', 'Costa', '23', 'Brasil');

const meuIrmao = new Pessoa('Alex', 'Costa', '38', 'Brasil')

// console.log(euMesmo);
// console.log(meuIrmao);

//Reforçando criação de construtores de objetos 
function Veiculo(marca, modelo, motorPotencia, cor, ano, rodas){
    this.marca = marca;
    this.modelo = modelo;
    this.motorPotencia = motorPotencia;
    this.cor = cor;
    this.ano = ano;
    this.rodas = rodas;
    this.acelerar = function(){
        return this.modelo + ' acelerou';
    };
}

const minhaMoto = new Veiculo('Suzuki', 'Intruder', '125cc', 'preta', '2014', '2');

console.log(minhaMoto);

const meuCarro = new Veiculo('RAM', '1500', '426cv', 'preta', '2026', '4');

console.log(meuCarro);

//Veiculo.prototype.chassi = 123456789;
meuCarro.placa = '0000-0000';

meuCarro.frear = function(){
    return this.modelo + ' freou'
};


console.log(meuCarro.frear());
console.log(meuCarro.acelerar());

Veiculo.prototype.parar = function(){
    return this.marca + ' parou'
}

console.log(meuCarro.parar());


