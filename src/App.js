import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Label, PokemonLabelClick, PokemonSelection} from './datatypes';
import PokemonSelectionComponent from './components/PokemonSelectionComponent';
import {valueToPokemonsSideEffect, reduxStateToPokemons, valueToHandleRandomPokemonClick} from './transformations';

export const HEADER_STRING ='Pokemon Selection App';
export const HEADER = new Label(HEADER_STRING);
export const LABEL_STRING = 'Random Pokemon';
export const POKEMON_LABEL = new Label(LABEL_STRING);
export const APP_CLASS = 'App';

export const App = ()=> {
  const dispatch = useDispatch();
  useEffect(valueToPokemonsSideEffect(dispatch),[])
  const pokemons = useSelector(reduxStateToPokemons);
  const pokemonSelection = new PokemonSelection(
    HEADER,
    pokemons,
    new PokemonLabelClick(
      POKEMON_LABEL,
      valueToHandleRandomPokemonClick(dispatch)(pokemons))
  );
  return (
    <div className={APP_CLASS}>
      <PokemonSelectionComponent {...pokemonSelection} />
    </div>
  );
}

export default App;
