const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = (pokemonId) => fetch(ENDPOINT+pokemonId).then(response => response.json());

export { fetchPokemon };