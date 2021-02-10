import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import {Pokemon, Pokemons, PokemonLabel, Header, PokemonLabelClick, PokemonSelection} from './datatypes';
import { valueToPokemons } from './pokemonReducer';
import {DEFAULT_FUNCTION} from './constants';
import PokemonSelectionComponent from './components/PokemonSelectionComponent';

export const HEADER_STRING ='Pokemon Selection App';
export const HEADER = new Header(HEADER_STRING);
export const LABEL_STRING = 'Random Pokemon';
export const POKEMON_LABEL = new PokemonLabel(LABEL_STRING);
export const APP_CLASS = 'App';

export const pokemonResponseToPokemon = ({data:{
  name='', height=0, weight=0, base_experience=0
}={}}={})=>(
  new Pokemon(
    name,
    height,
    weight,
    base_experience
  )
)

export const randomPokemonNumber = ()=>(
  Math.floor(Math.random() * 889)
);

export const fetchRandomPokemonDatum = ()=>(
  axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber()}/`)
)

export const fetchPokemonData = async ()=>(
  Promise.all(
    [
      axios.get('https://pokeapi.co/api/v2/pokemon/7/'),
      axios.get('https://pokeapi.co/api/v2/pokemon/4/'),
      axios.get('https://pokeapi.co/api/v2/pokemon/1/'),
    ]
  )
);

export const valueToPokemonsSideEffect = (
  dispatch = DEFAULT_FUNCTION)=> async ()=>{
  const pokemonsResponse = await fetchPokemonData();
  dispatch(valueToPokemons(new Pokemons(pokemonsResponse.map(pokemonResponseToPokemon))));
};

export const valueToHandleRandomPokemonClick = (
  dispatch=DEFAULT_FUNCTION)=>({pokemons:[pokemon1, pokemon2, pokemon3]=[]}={})=> async()=>{
  const randomPokemonDatum = await fetchRandomPokemonDatum();
  dispatch(valueToPokemons(new Pokemons([
    pokemon1,
    pokemon2,
    pokemon3,
    pokemonResponseToPokemon(randomPokemonDatum)
  ])))
};

export const App = ()=> {
  const dispatch = useDispatch();
  useEffect(valueToPokemonsSideEffect(dispatch),[])
  const pokemons = useSelector(({pokemons={}}={})=>pokemons);
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
