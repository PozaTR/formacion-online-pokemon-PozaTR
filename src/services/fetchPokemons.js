const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon';

const fetchPokemons = () => fetch(ENDPOINT).then(response => response.json());

export { fetchPokemons };