import React from 'react';
import './styles/components/app.scss';
import { Switch, Route } from 'react-router-dom';
import { fetchPokemons } from './services/fetchPokemons';
import logo from './images/Pokemon-Logo.png';
import Search from './components/Search';
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';


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
          <Switch >
            <Route exact path="/" render={RouterProps => (
              <React.Fragment>
                <Search match={RouterProps.match} getPokemon={this.getPokemon} findPokemon={findPokemon}/>
                <Pokemons match={RouterProps.match} pokemons={pokemons} findPokemon={findPokemon}/>
              </React.Fragment>
             )}>
            </Route>
            <Route path="/detail/:pokemonName" render={RouterProps => (
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
