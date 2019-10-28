# First and second exercise from online course Adalab: Pokemon

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this project about?

It is a web app made with React to show a list with the first 25 pokemons. In each pokemon card you can see his name, image, number, type and evolution.
Also you have an input where you can filter each pokemon by name.
Beside that, there is detail page showing up more information about the selected character.


## Project structure

The project includes three service and six components.


### Service

Service available fetches required information from Api about pokemon characters:

    -First service (fetchPOkemons): fetch the first 25 pokemons from the API
    -Second service (fetchPokemon) : fetch the pokemon card information like name, url, types and order.
    -Thrird service (fetchSpecie) : fetch species information when you cand find pokemon evolution.

### Components

-App: you have the main structure and the diffrents function and the state.
-Search: find pokemon card by name.
-Pokemons: render pokemons list
-Pokemon: fetch pokemon card information and render it.
-PokemonDetail: render more information about the selected character like it height, weight and abilities.
-PokemonTypesBackground: it's a special component created to render types styles.

## Technologies

-React
-Sass
-Html
-Git
-ES6

## How to run the project

In the project directory, you can run:

### `npm install`

To install all the project dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

