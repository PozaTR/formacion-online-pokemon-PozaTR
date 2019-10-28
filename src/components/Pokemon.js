import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypesBackground from './PokemonTypesBackground';
import '../styles/components/pokemon.scss';

class Pokemon extends React.Component {
  render() {
    const { pokemon, isLoading } = this.props;
    return(
      <div className="pokemon">
        { !isLoading
          ? <React.Fragment>
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
            </React.Fragment> 
          : <React.Fragment>
              <div className="pokemon__information__container">
                <p className="pokemon__name">{pokemon.name}</p>
                <div className="pokemon__loader"></div>
              </div>
            </React.Fragment>
        }
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon; 