import React from 'react';
import '../styles/components/pokemon.scss'
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
        { !isLoading
          ? <React.Fragment>
              <ul className="pokemon__types">{pokemon.types.map((type, index) => 
                <li className={`pokemon__type pokemon__type--${type.type.name}`} key={index}>{type.type.name}</li>
              )}
              </ul>
              <div className="pokemon__information" >
                <div className="pokemon__information__container">
                  <img className="pokemon__image" src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
                  <p className="pokemon__name">{pokemon.name}</p>
                </div>
                <p className="pokemon__number" >ID/{pokemon.id}</p>
              </div>
            </React.Fragment> 
          : <React.Fragment>
              <div className="pokemon__information__container">
                <p className="pokemon__name">{poke.name}</p>
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