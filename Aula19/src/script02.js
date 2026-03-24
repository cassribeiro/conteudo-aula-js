//Exemplos de evento

//Exemplo de click em h4
const elemento = document.querySelector('.elemento-click');
const info = document.querySelector('.info');

elemento.addEventListener('click', () => {
    elemento.innerHTML = 'STREAM ARIRANG DO BTS :D '
    info.innerHTML = 'Sério, que álbum INCRÍVEL!!!!'
});

//Alterando formatação de texto em um input
const campoTexto = document.querySelector('.campo-texto');

campoTexto.addEventListener('input', uperCase);

function uperCase() {
    campoTexto.value = campoTexto.value.toUpperCase();
};

//Alterando formatação de texto em um input
const campoTexto2 = document.querySelector('.campo-texto2');

campoTexto2.addEventListener('change', toUpperCase2);

function toUpperCase2() {
    campoTexto2.value = campoTexto2.value.toUpperCase();
}