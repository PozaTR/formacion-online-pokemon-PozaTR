import React from 'react';
import './styles/components/app.scss';
import { fetchPokemons } from './services/fetchPokemons';
import logo from './images/Pokemon-Logo.png';
import Pokemons from './components/Pokemons';
import Search from './components/Search';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: [],
      findPokemon: ''
    }

    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    fetchPokemons()
    .then(pokemons => {
      this.setState({
        pokemons: pokemons.results
      })
    })
  }

  getPokemon(event) {
    const findPokemon = event.currentTarget.value;
    this.setState ({
      findPokemon: findPokemon
    })
  }
  
  render() {
    const { pokemons, findPokemon } = this.state;

    return(
      <div>
        <header className="header" >
          <h1 className="header__title" >Lista de Pokemons</h1>
          <img className="header__logo" src={logo} alt="logo pokemon"/>
        </header>
        <main>
          <Search getPokemon={this.getPokemon} findPokemon={findPokemon}/>
          <Pokemons pokemons={pokemons} findPokemon={findPokemon}/>
        </main>
      </div>
    );
  }
};

export default App;
