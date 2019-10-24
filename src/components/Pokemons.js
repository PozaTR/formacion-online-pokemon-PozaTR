import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import '../styles/components/pokemons.scss';


const Pokemons = (props) => {
  const { pokemons, findPokemon } = props;
  const pokemonsFilter = pokemons.filter(myPokemon => myPokemon.name.toUpperCase().includes(findPokemon.toUpperCase()));
  return (
      <ul className="pokemons__list">
          {pokemonsFilter.map((pokemon) =>
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