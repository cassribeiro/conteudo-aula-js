//Utilizando key events
const conteudo = document.querySelector('.conteudo');
const conteudo2 = document.querySelector('.conteudo2');
const campo = document.querySelector('#campo');
const eventos = ['input', 'keydown']

campo.addEventListener('input', handleTexto);
campo.addEventListener('keydown', handleTecla);

function handleTecla(event) {
    conteudo.innerHTML = 'Você digitou: ' + event.key;
}

function handleTexto(event) {
    conteudo2.innerHTML = 'Você digitou: ' + event.target.value;
}

//Exemplo de detecção de tecla
const campo2 = document.querySelector('#campoEnter');
const conteudo3 = document.querySelector('.conteudo3');

campo2.addEventListener('keydown', handleCondicao);

function handleCondicao(evento) {
    if (evento.code === 'Enter') {
        conteudo3.innerHTML = 'A tecla ENTER foi pressionada!';
    }
}
