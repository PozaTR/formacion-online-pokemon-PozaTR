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
                </div>
                <p className="pokemon__number" >ID/{pokemon.id}</p>
                {pokemon.evolves_from_species ? (<p>{pokemon.evolves_from_species.name}</p>) : ''}
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