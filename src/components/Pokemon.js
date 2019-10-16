import React from 'react';
import { fetchPokemon } from '../services/fetchPokemon';

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
      <div>
        { !isLoading ? 
        <div>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.back_shiny} alt={pokemon.name}/>
        <p>{pokemon.id}</p>
        <ul>{pokemon.types.map((type, index) => 
          <li key={index}>{type.type.name}</li>
        )}</ul>
        </div>
         : 
         <div>
           <p>{poke.name}</p>
           <p>'isLoading...'</p>
          </div>
        }
      </div>
    )
  }
}

export default Pokemon; 