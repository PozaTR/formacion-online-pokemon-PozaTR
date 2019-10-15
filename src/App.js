import React from 'react';
import './App.css';
import { fetchPokemons } from './services/fetchPokemons';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    fetchPokemons()
    .then(pokemons => {
      console.log(pokemons)
      this.setState({
        pokemons: pokemons.results
      })
    })
  }
  
  render() {
    const { pokemons } = this.state;

    return(
      <div>
        <header className="header" >
          <h1 className="header__title" >Lista de Pokemons</h1>
        </header>
        <main>
          <ul>
            {pokemons.map(pokemon =>
              <li>
                <p>{pokemon.name}</p>
              </li>
            )}
          </ul>
        </main>
      </div>
    );
  }
};

export default App;
