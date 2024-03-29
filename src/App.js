import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { fetchPokemons } from './services/fetchPokemons';
import { fetchPokemon } from './services/fetchPokemon';
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
      isLoading: true,
      pokemonDetail: {}
    }

    this.getPokemon = this.getPokemon.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getPageInfo(this.props.location.pathname);
    }
  }

  componentDidMount() {
    this.getPageInfo(this.props.location.pathname);
  }

  getPageInfo(pathname) {
    if(pathname === '/') {
      this.setState({
        isLoading: true
      })
      fetchPokemons()
      .then(pokemons => {
        const pokemonsArray = pokemons.results.map(pokemon => {
          //remove trailing slash from url
          const urlCleaned = pokemon.url.slice(0, -1);
          //find last slash position
          const lastSlashPosition = urlCleaned.lastIndexOf('/');
          //keep the rest of url after last slash position (pokemonId)
          const pokemonId = pokemon.url.substring(lastSlashPosition + 1);
          return fetchPokemon(pokemonId);
        });
        return Promise.all(pokemonsArray);
      })
      .then(pokemonsArray => {
        this.setState({
          pokemons: pokemonsArray,
          isLoading: false
        })
      })
    } else {
      const positionPokeId = pathname.lastIndexOf('/') + 1;
      const pokemonId = pathname.substring(positionPokeId);
      this.setState({
        isLoading: true,
        pokemonDetail: {}
      })
      fetchPokemon(pokemonId)
        .then(pokemon => {
          this.setState({
            pokemonDetail: pokemon,
            isLoading: false
          })
        })
    }
  } 

  getPokemon(event) {
    const findPokemon = event.currentTarget.value;
    this.setState ({
      findPokemon: findPokemon
    })
  }
  
  render() {
    const { pokemons, findPokemon, isLoading, pokemonDetail } = this.state;
    const { location } = this.props;

    return(
      <>
        <header className={`header ${location.pathname !== '/' ? 'header--slim' : ''}`} >
          <h1 className="header__title" >Lista de Pokemons</h1>
          <img className="header__logo" src={logo} alt="logo pokemon"/>
        </header>
        <main className="main">
          {isLoading 
            ? <div className="main__loader__container">
                <p className="main__loader__message">Loading</p>
                <div className="main__loader"></div>
              </div>
            : <Switch >
              <Route exact path="/" render={RouterProps => (
                <div>
                  <Search match={RouterProps.match} getPokemon={this.getPokemon} />
                  <Pokemons match={RouterProps.match} pokemons={pokemons} findPokemon={findPokemon} />
                </div>
              )}>
              </Route>
              <Route path="/detail/:pokemonId" render={RouterProps => (
                <PokemonDetail match={RouterProps.match} pokemon={pokemonDetail}/>
              )}>
              </Route>
            </Switch>
          }
        </main>
      </>
    );
  }
};

export default withRouter(props => <App {...props}/>);
