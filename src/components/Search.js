import React from 'react';
import '../styles/components/search.scss';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { getPokemon, findPokemon } = props;
  return (
    <div className="search" >
      <label className="search__label" htmlFor="name">Filtra Pokemons por nombre</label>
      <input className="search__input" id="name" type="text" name="name" value={findPokemon} onChange={getPokemon} ></input>
    </div>
  );
}

Search.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  findPokemon: PropTypes.string.isRequired
}

export default Search;