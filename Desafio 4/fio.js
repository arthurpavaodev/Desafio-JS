const container = document.getElementById('pokemon-container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

async function carregarPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=12';
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const listaPokemons = dados.results;

    listaPokemons.forEach(async (pokemon) => {
        const respostaPokemon = await fetch(pokemon.url);
        const dadosPokemon = await respostaPokemon.json();

        criarCardPokemon(dadosPokemon);
    });
}

function criarCardPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Tipo:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    `;

    card.addEventListener('click', () => {
        abrirModal(pokemon);
    });

    container.appendChild(card);
}

function abrirModal(pokemon) {
    modal.style.display = 'block';

    const habilidades = pokemon.abilities.map(h => h.ability.name).join(', ');
    const tipos = pokemon.types.map(t => t.type.name).join(', ');

    modalBody.innerHTML = `
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Tipo:</strong> ${tipos}</p>
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> ${habilidades}</p>
    `;
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


carregarPokemons();
