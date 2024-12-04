/*Você foi encarregado de adicionar uma nova funcionalidade ao seu aplicativo de busca de
Pokémon. A nova funcionalidade deve permitir que os usuários filtrem os Pokémon por
geração. Para isso, você deve adicionar uma nova seção ao HTML, criar um estilo CSS para
essa seção e implementar a lógica JavaScript para buscar e exibir os Pokémon da geração
selecionada. Use como ponto de partida o código do enunciado da AP2.
*/

// Lógica para filtro de Pokémon por geração
document.getElementById('filter-button').addEventListener('click', async () => {
    const generation = document.getElementById('generation-select').value;
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
    const data = await response.json();

    if (response.ok) {
        const pokemonList = data.pokemon_species.map(pokemon => pokemon.name).sort();
        document.getElementById('pokemon-data').innerHTML = `
            <h2>Geração ${generation}</h2>
            <ul>
                ${pokemonList.map(name => `<li>${name}</li>`).join('')}
            </ul>`
        ;
    } else {
        document.getElementById('pokemon-data').innerHTML = '<p>Error</p>';
    }
});