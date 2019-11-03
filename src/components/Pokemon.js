import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypesBackground from './PokemonTypesBackground';
import '../styles/components/pokemon.scss';

const Pokemon = (props) => {
  const { pokemon } = props;

  return(
    <div className="pokemon">
      <PokemonTypesBackground  pokemonTypes={pokemon.types} showType/>
      <div className="pokemon__information" >
        <div className="pokemon__information__container">
          <img className="pokemon__image" src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
          <p className="pokemon__name">{pokemon.name}</p>
          {pokemon.evolves_from_species ? (<p className="pokemon__evolution" >{pokemon.evolves_from_species.name}</p>) : ''}
          <ul className="pokemon__types">
            {pokemon.types.map((type, index) => 
              <li className="pokemon__type" key={`type-${index}`}>{type.type.name}</li>
            )}
          </ul>
        </div>
        <p className="pokemon__number" >ID/{pokemon.id}</p>
      </div>
    </div>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Pokemon; 