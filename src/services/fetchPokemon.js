import { fetchSpecie } from './fetchSpecie';

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const _fetchPokemon = (pokemonId) => fetch(ENDPOINT+pokemonId).then(response => response.json());

const fetchPokemon = async (pokemonId) => {
  let pokemon = {}
  try{
    const pokemonData = await _fetchPokemon(pokemonId)
    pokemon = {
      ...pokemonData
    }

    const specieData = await fetchSpecie(pokemonId)
    pokemon = {
      ...pokemon,
      ...specieData
    }
  } catch (err) {
    return pokemon
  }
  return pokemon
}

export { fetchPokemon };

//First attempt using Promise.all
//
// const fetchPokemon = (pokemonId) => Promise.all([
//     _fetchPokemon(pokemonId),
//     fetchSpecie(pokemonId)
//   ])
//   .then((responses) => {
//     const pokemonData = responses[0]
//     const specieData = responses[1]
//     return {
//       ...pokemonData,
//       ...specieData
//     }
//   })