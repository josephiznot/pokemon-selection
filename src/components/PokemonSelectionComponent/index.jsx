import React from 'react';

import { GenericLabel } from '../../datatypes';
import {ClickComponent} from '../ClickComponent';
import {GenericLabelComponent} from '../GenericLabelComponent';
import { PokemonsComponent } from '../PokemonsComponent';
import {DEFAULT_FUNCTION} from '../../constants';

export const HEADER_CLASS = 'header';
export const POKEMON_LABEL_CLASS = 'pokemon-label';

export const HeaderComponent = ({string=''})=>(
    GenericLabelComponent(new GenericLabel(string, HEADER_CLASS))
);
  
export const PokemonLabelComponent = ({string=''})=>(
    GenericLabelComponent(new GenericLabel(string, POKEMON_LABEL_CLASS))
);

export const PokemonLabelClickComponent = ({
    pokemonLabel={}, handlePokemonClick = DEFAULT_FUNCTION})=>(
    ClickComponent(PokemonLabelComponent)(handlePokemonClick)(pokemonLabel)
);

export const PokemonSelectionComponent = ({header={}, pokemons={}, pokemonLabelClick={}})=>(
    <React.Fragment>
        <HeaderComponent {...header} />
        <PokemonLabelClickComponent {...pokemonLabelClick}/>
        <PokemonsComponent {...pokemons}/>
    </React.Fragment>
);

export default PokemonSelectionComponent;