import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/search.scss';

const Search = (props) => {
  const { getPokemon } = props;
  return (
    <div className="search" >
      <label className="search__label" htmlFor="name">Filtra Pokemons por nombre</label>
      <input className="search__input" id="name" type="text" name="name" onChange={getPokemon} ></input>
    </div>
  );
}

Search.propTypes = {
  getPokemon: PropTypes.func.isRequired,
}

export default Search;