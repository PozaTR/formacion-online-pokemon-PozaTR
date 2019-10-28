import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonTypesBackground from './PokemonTypesBackground';
import '../styles/components/pokemonDetail.scss';

const PokemonDetail = (props) => {
  const { pokemon } = props;

  if(Object.keys(pokemon).length) {
    const { name, sprites, abilities, weight, height, types, id, evolves_from_species, gender_rate, egg_groups, habitat } = pokemon;

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
            <dl className="pokemon-detail__container pokemon-detail__profile__list">
              <dt className="pokemon-detail__profile__term">Weight:</dt>
              <dd className="pokemon-detail__profile__definition">{weight}</dd>
              <dt className="pokemon-detail__profile__term">Height:</dt>
              <dd className="pokemon-detail__profile__definition">{height}</dd>
              <dt className="pokemon-detail__profile__term">Egg groups:</dt>
              <dd className="pokemon-detail__profile__definition">
                <ul className="pokemon-detail__definition__list">
                {egg_groups.map((eggGroup, index) => 
                  <li className="pokemon-detail__definition__element" key={`egg-group-${index}`}>{eggGroup.name}</li>
                )}
                </ul>
              </dd>
              <dt className="pokemon-detail__profile__term">Gender rate:</dt>
              <dd className="pokemon-detail__profile__definition">{gender_rate}</dd>
              <dt className="pokemon-detail__profile__term">Habitat:</dt>
              <dd className="pokemon-detail__profile__definition">{habitat.name}</dd>
              <dt className="pokemon-detail__profile__term">Abilities:</dt>
              <dd className="pokemon-detail__profile__definition">
                <ul className="pokemon-detail__definition__list">
                {abilities.map((ability, index) => 
                  <li className="pokemon-detail__definition__element" key={`ability-${index}`}>{ability.ability.name}</li>
                )}
                </ul>
              </dd>
            </dl>
          </div>
          {evolves_from_species 
            ? (<div className="pokemon-detail__evolution">
                  <h3 className={`pokemon-detail__title pokemon-detail__title--${types[0].type.name}`}>evolution</h3>
                  <p className="pokemon-detail__container">{evolves_from_species.name}</p>
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