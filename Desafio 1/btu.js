let contagem = 0;

const botao = document.getElementById('botao');
const contador = document.getElementById('contador');

botao.addEventListener('click', () => {
    contagem++;
    contador.textContent = `Cliques: ${contagem}`;
});