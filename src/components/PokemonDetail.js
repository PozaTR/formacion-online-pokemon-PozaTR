import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/pokemonDetail.scss';

const PokemonDetail = (props) => {
  const { pokemon, match } = props;

  if(Object.keys(pokemon).length) {
    const { name, sprites, abilities, weight, height, types, id, evolves_from_species} = pokemon;

    return(
      <div className="pokemon-detail">
        <Link className="pokemon-detail__link" to="/">Volver</Link>
        <div className="pokemon-detail__information" >
          <h2 className="pokemon-detail__information__name">{name}</h2>
          <div className="pokemon-detail__information__container">
            <ul className="pokemon-detail__information__types">{types.map((type, index) => 
                    <li className={`pokemon-detail__information__type pokemon__type--${type.type.name}`} key={index}>{type.type.name}</li>
                  )}
            </ul>
            <img className="pokemon-detail__information__image" src={sprites.front_shiny} alt={name}/>
            <p className="pokemon-detail__information__number" >#{id}</p>
          </div>
          <div className="pokemon-detail__profile">
            <h3 className="pokemon-detail__profile__title pokemon-detail__titles">profile</h3>
            <div className="pokemon-detail__profile__container">
              <p className="pokemon-detail__profile__information" >weight: {weight}</p>
              <p className="pokemon-detail__profile__information" >height: {height}</p>
              <ul className="pokemon-detail__profile__information pokemon-detail__profile__abilities">abilities: 
              {abilities.map((ability, index) => 
                <li className="pokemon-detail__profile__ability" key={index}>{ability.ability.name}</li>
                )}
              </ul>
            </div>
          </div>
          <div className="pokemon-detail__evolution">
            <h3 className="pokemon-detail__evolution__title pokemon-detail__titles">evolution</h3>
            {evolves_from_species ? (<p>{evolves_from_species.name}</p>) : ''}
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
  pokemon: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default PokemonDetail;