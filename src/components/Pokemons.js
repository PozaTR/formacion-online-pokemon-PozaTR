import React from 'react';
import '../styles/pokemons.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';


const Pokemons = (props) => {
  const { pokemons, findPokemon } = props;
  return (
      <ul className="pokemons__list">
          {pokemons
          .filter(myPokemon => myPokemon.name.toUpperCase().includes(findPokemon.toUpperCase()))
          .map((pokemon, index) =>
            <li key={index} >
              <Pokemon pokemon={pokemon} />
            </li>
          )}
        </ul>
  );
}

Pokemons.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  findPokemon: PropTypes.string.isRequired
}

export default Pokemons;