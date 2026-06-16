import { buscarPersonagens } from "./api.js";
import { renderizarPersonagens, mostrarMensagem } from "./util.js";

const from = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

async function carregarPersonagens(nome='') {
    try {
        mostrarMensagem('Carregando personagem...');
        const data = await buscarPersonagens(nome);
        renderizarPersonagens (data.results);
    } catch (error) {
        mostrarMensagem('Nenhum personagem encontrado.')
    }  
};

from.addEventListener('submit', async function(event) {
    event.preventDefault();

    const nomeDigitado = input.value;

    await carregarPersonagens(nomeDigitado);

});

carregarPersonagens();

async function iniciarApp() {
    const personagens = await buscarPersonagens();
    renderizarPersonagens(personagens.results);
    console.log(personagens)
}

iniciarApp();