import React from 'react';
import Pokemon from './Pokemon';

const Pokemons = (props) => {
  const { pokemons } = props;
  return (
      <ul>
          {pokemons.map(pokemon =>
            <li>
              <Pokemon pokemon={pokemon} />
            </li>
          )}
        </ul>
  )
}

export default Pokemons;