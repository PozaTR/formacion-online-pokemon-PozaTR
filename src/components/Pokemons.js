import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/pokemons.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';


const Pokemons = (props) => {
  const { pokemons, findPokemon } = props;
  return (
      <ul className="pokemons__list">
          {pokemons
          .filter(myPokemon => myPokemon.name.toUpperCase().includes(findPokemon.toUpperCase()))
          .map((pokemon) =>
            <li key={`pokemon-${pokemon.name}`} >
              <Link className="main__link" to={`/detail/${pokemon.name}`}>
                <Pokemon pokemon={pokemon} />
              </Link>
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