import React from 'react';

const Search = (props) => {
  const { getPokemon, findPokemon } = props;
  return (
    <div className="search" >
      <label className="search__label" htmlFor="name">Filtra Pokemons por nombre</label>
      <input className="search__input" id="name" type="text" name="name" value={findPokemon} onChange={getPokemon} ></input>
    </div>
  );
}

export default Search;