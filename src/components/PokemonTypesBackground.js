import React from 'react';
import '../styles/components/pokemonTypesBackground.scss';

const pokemonTypesBackground = (props) => {
  const { pokemonTypes } = props

  return(
    <ul className="pokemon-types">{pokemonTypes.map((type, index) => 
      <li className={`pokemon-types__type pokemon-types__type--${type.type.name}`} key={index}></li>
    )}
    </ul>
  )
}

export default pokemonTypesBackground;