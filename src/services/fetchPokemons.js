const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon?offset=0&limit=25';

const fetchPokemons = () => fetch(ENDPOINT).then(response => response.json());

export { fetchPokemons };