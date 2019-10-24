import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/pokemonDetail.scss';

const PokemonDetail = (props) => {
  const { pokemons, match } = props;
  const pokemonId = parseInt(match.params.pokemonId);
  const pokemonFind = pokemons.find(pokemon => pokemon.id === pokemonId);

  if(pokemonFind) {
    const { name, sprites, abilities, weight, height, types, id} = pokemonFind;

    return(
      <div className="pokemon-detail">
        <Link className="pokemon-detail__link" to="/">Volver</Link>
        <div className="pokemon-detail__information" >
          <ul className="pokemon-detail__types">{types.map((type, index) => 
                  <li className={`pokemon-detail__type pokemon__type--${type.type.name}`} key={index}>{type.type.name}</li>
                )}
          </ul>
          <img className="pokemon-detail__image" src={sprites.front_shiny} alt={name}/>
          <p className="pokemon-detail__name">{name}</p>
          <p className="pokemon-detail__number" >ID/{id}</p>
          <div className="">
          <p className="pokemondetail-weight" >Weight: {weight}</p>
          <p className="pokemon-detail-weight" >Height: {height}</p>
          <ul className="pokemon-detail__abilities">
            {abilities.map((ability, index) => 
              <li className="pokemon-detail__ability" key={index}>Habilidades: {ability.ability.name}</li>
              )}
          </ul>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <React.Fragment>
        <Link className="detail__link" to="/">Volver</Link>
        <div>Ese personaje no existe</div>
      </React.Fragment>
    )
  }
}

PokemonDetail.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired
}

export default PokemonDetail;