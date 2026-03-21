//Utilizando o evento mouseover
const caixa = document.querySelector('.caixa');

caixa.addEventListener('mouseover', function(){
    caixa.innerHTML = 'O mouse está dentro da caixa :o';
    caixa.style.background = 'cyan';
});

caixa.addEventListener('mouseout', function() {
    caixa.innerHTML = 'O mouse está fora da caixa ;)';
    caixa.style.background = 'bisque';
});

//Exemplo de posição do mouse na página
const conteudo = document.querySelector('.conteudo');

document.addEventListener('mousemove', handlePosicao);

function handlePosicao(evento){
    conteudo.innerHTML = 'X: ' + evento.clientX + ' ' + 'Y:' + evento.clientY;
};