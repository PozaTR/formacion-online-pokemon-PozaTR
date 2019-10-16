import React from 'react';
import '../styles/pokemon.scss'
import { fetchPokemon } from '../services/fetchPokemon';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        pokemon: {},
        isLoading:true
      }
  }

  componentDidMount() {
    fetchPokemon(this.props.pokemon.url)
    .then(pokemon => {
      this.setState({
        pokemon: pokemon,
        isLoading: false
      });
    });
  }

  render() {
    const { pokemon, isLoading } = this.state;
    const { pokemon: poke } = this.props;
    return(
      <div className="pokemon">
        { !isLoading ? 
        <div className="pokemon__card">
        <div className="pokemon__image-container" >
        <img className="pokemon__image" src={pokemon.sprites.back_shiny} alt={pokemon.name}/>
        <p className="pokemon__number" >ID/{pokemon.id}</p>
        </div>
        <p className="pokemon__name">{pokemon.name}</p>
        <ul className="pokemon__types">{pokemon.types.map((type, index) => 
          <li className="pokemon__type" key={index}>{type.type.name}</li>
        )}</ul>
        </div>
         : 
         <div className="pokemon__card">
           <p className="pokemon__name">{poke.name}</p>
           <div class="pokemon__loader"></div>
          </div>
        }
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon; 