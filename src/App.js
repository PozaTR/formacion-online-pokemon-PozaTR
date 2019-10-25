import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchPokemons } from './services/fetchPokemons';
import Search from './components/Search';
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import logo from './images/Pokemon-Logo.png';
import './styles/components/app.scss';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: [],
      findPokemon: '',
      isLoading: true
    }

    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    fetchPokemons()
    .then(pokemons => {
      const pokemonsArray = pokemons.results.map(pokemon => {
        return fetch(pokemon.url)
          .then(response => response.json());
      });
      return Promise.all(pokemonsArray);
    })
    .then(pokemonsArray => {
      console.log(pokemonsArray)
      this.setState({
        pokemons: pokemonsArray,
        isLoading: false
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
    const { pokemons, findPokemon, isLoading } = this.state;

    return(
      <div>
        <header className="header" >
          <h1 className="header__title" >Lista de Pokemons</h1>
          <img className="header__logo" src={logo} alt="logo pokemon"/>
        </header>
        <main>
          <Switch >
            <Route exact path="/" render={RouterProps => (
              <React.Fragment>
                <Search match={RouterProps.match} getPokemon={this.getPokemon} />
                <Pokemons match={RouterProps.match} pokemons={pokemons} findPokemon={findPokemon} isLoading={isLoading}/>
              </React.Fragment>
             )}>
            </Route>
            <Route path="/detail/:pokemonId" render={RouterProps => (
              <PokemonDetail match={RouterProps.match} pokemons={pokemons}/>
            )}>
            </Route>
            
          </Switch>
        </main>
      </div>
    );
  }
};

export default App;
