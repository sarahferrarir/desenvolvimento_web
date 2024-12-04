/* Você precisa construir uma tabela HTML que exiba uma lista de Pokémon com seus
nomes e tipos, utilizando dados obtidos da API PokeAPI. Qual das seguintes opções
descreve corretamente o processo para realizar essa tarefa?
A) Usar o método fetch para obter os dados da API, iterar sobre os dados com um loop for,
criar elementos de tabela (<tr> e <td>) dinamicamente e anexá-los ao DOM.
B) Usar o método fetch para obter os dados da API, iterar sobre os dados com o método
map, criar elementos de tabela (<tr> e <td>) dinamicamente e anexá-los ao DOM.
C) Usar o método fetch para obter os dados da API, iterar sobre os dados com o método
forEach, criar elementos de tabela (<tr> e <td>) dinamicamente e anexá-los ao DOM.
D) Todas as opções acima estão corretas.
Resposta: D) Todas as opções acima estão corretas.
Explicação:
Todas as opções A, B e C descrevem corretamente o processo de obter dados da API
PokeAPI e iterar sobre esses dados para criar uma tabela HTML dinamicamente. Aqui está
um exemplo inicial de como isso pode ser feito, escolha uma das opções para criar a tabela
com as informações nome e tipo:
*/

// script.js

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const pokemonList = data.results;

    const tableBody = document.getElementById('lista-pokemons');

    // Fetch info do Pokémon para achar seu tipo
    for (const pokemon of pokemonList) {
        // Faz uma requisição para obter detalhes do Pokémon
        const detailsResponse = await fetch(pokemon.url);
        const detailsData = await detailsResponse.json();

        const novaLinha = document.createElement('tr');
        const nomeCelula = document.createElement('td');
        const tipoCelula = document.createElement('td');

        nomeCelula.textContent = pokemon.name;
        tipoCelula.textContent = detailsData.types.map(typeInfo => typeInfo.type.name).join(', ');

        novaLinha.appendChild(nomeCelula);
        novaLinha.appendChild(tipoCelula);
        tableBody.appendChild(novaLinha);
    }
});