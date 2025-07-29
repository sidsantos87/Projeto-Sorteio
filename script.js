const button = document.querySelector('.botao');

function horaDeSortear(){
 
const inputMin = Math.ceil(document.querySelector('.input-min').value);
const inputMax = Math.floor(document.querySelector('.input-max').value);

const container = document.querySelector('.container-paragraph');
const numeroSorteado = document.querySelector('.numero-sorteado');

const emojiDedo = document.querySelector('.emoji-dedo');
const emojiFesta = document.querySelector('.emoji-festa');
const pInput = document.querySelector('.p-input');

let luckInTheGame = Math.floor(Math.random() * (inputMax - inputMin + 1 ) + inputMin);

numeroSorteado.innerHTML = luckInTheGame ;
container.style.visibility = 'visible';
emojiDedo.style.visibility = 'hidden';
emojiFesta.style.visibility = 'visible';
pInput.style.visibility = 'hidden';

}

button.addEventListener('click', horaDeSortear);