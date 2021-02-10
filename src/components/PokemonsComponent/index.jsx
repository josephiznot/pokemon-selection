import React from 'react';

import './index.css';
import KeyedComponent from '../KeyedComponent';
import PokemonComponent from '../PokemonComponent';

export const POKEMONS_CLASS = 'pokemons';

export const PokemonsComponent = ({pokemons=[]})=>{
    const pokemonComponents = pokemons.map(KeyedComponent(PokemonComponent));
    return (
      <div className={POKEMONS_CLASS}>
        {pokemonComponents}
      </div>
    );
  };