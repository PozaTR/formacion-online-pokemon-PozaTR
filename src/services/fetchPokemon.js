import { fetchSpecie } from './fetchSpecie';

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const _fetchPokemon = (pokemonId) => fetch(ENDPOINT+pokemonId).then(response => response.json());

const fetchPokemon = (pokemonId) => Promise.all([
    _fetchPokemon(pokemonId),
    fetchSpecie(pokemonId)
  ])
  .then((responses) => {
    const pokemonData = responses[0]
    const specieData = responses[1]
    return {
      ...pokemonData,
      ...specieData
    }
  })

export { fetchPokemon };