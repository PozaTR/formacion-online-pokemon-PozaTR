import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonTypesBackground from './PokemonTypesBackground';
import '../styles/components/pokemonDetail.scss';

const PokemonDetail = (props) => {
  const { pokemon, match } = props;

  if(Object.keys(pokemon).length) {
    const { name, sprites, abilities, weight, height, types, id, evolves_from_species} = pokemon;

    return(
      <div className="pokemon-detail">
        <PokemonTypesBackground pokemonTypes={types}/>
        <Link className="pokemon-detail__link" to="/">Volver</Link>
        <div className="pokemon-detail__card" >
          <h2 className={`pokemon-detail__name pokemon-detail__title pokemon-detail__title--${types[0].type.name}`}>{name}</h2>
          <div className="pokemon-detail__container">
            <ul className="pokemon-detail__types">{types.map((type, index) => 
              <li className={`pokemon-detail__type pokemon-types__type--${type.type.name}`} key={index}>{type.type.name}</li>
            )}
            </ul>
            <img className="pokemon-detail__image" src={sprites.front_shiny} alt={name}/>
            <p className="pokemon-detail__number" >#{id}</p>
          </div>
          <div className="pokemon-detail__profile">
            <h3 className={`pokemon-detail__title pokemon-detail__title--${types[0].type.name}`}>profile</h3>
            <div className="pokemon-detail__container">
              <p className="pokemon-detail__information" >weight: {weight}</p>
              <p className="pokemon-detail__information" >height: {height}</p>
              <p className="pokemon-detail__information" >abilities: 
                <ul className="pokemon-detail__abilities">
                {abilities.map((ability, index) => 
                  <li className="pokemon-detail__profile__ability" key={index}>{ability.ability.name}</li>
                  )}
                </ul>
              </p>
            </div>
          </div>
          {evolves_from_species 
            ? (<div className="pokemon-detail__evolution">
                  <h3 className={`pokemon-detail__title pokemon-detail__title--${types[0].type.name}`}>evolution</h3>
                  <p>{evolves_from_species.name}</p>
                </div>)
            : ''}

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
  pokemon: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default PokemonDetail;