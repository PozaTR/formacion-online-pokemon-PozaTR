import React from 'react';
import Pokemon from './Pokemon';

const Pokemons = (props) => {
  const { pokemons, findPokemon } = props;
  return (
      <ul>
          {pokemons
          .filter(myPokemon => myPokemon.name.toUpperCase().includes(findPokemon.toUpperCase()))
          .map((pokemon, index) =>
            <li key={index}>
              <Pokemon pokemon={pokemon} />
            </li>
          )}
        </ul>
  )
}

export default Pokemons;