import {DEFAULT_FUNCTION} from './constants';

export class Pokemon{
    constructor(name='', height='', weight='', baseExperience='', src=''){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.baseExperience = baseExperience;
        this.src = src;
    }
}

export class Pokemons{
    constructor(pokemons=[]){
        this.pokemons=pokemons;
    }
}

export class PokemonSelection{
  constructor(header={}, pokemons={}, pokemonLabelClick={}){
      this.header = header;
      this.pokemons = pokemons;
      this.pokemonLabelClick = pokemonLabelClick;
  }
}

export class ReduxAction{
    constructor(type='', payload={}){
        this.type = type;
        this.payload = payload;
    }
}

export class ReduxState{
    constructor(pokemons={}){
        this.pokemons = pokemons;
    }
}

export class Label{
    constructor(string=''){
      this.string = string;
    }
  }
  export class GenericLabel{
    constructor(string='', className=''){
      this.string= string;
      this.className = className;
    }
  }
  
  export class PokemonLabelClick{
    constructor(pokemonLabel={}, handlePokemonClick = DEFAULT_FUNCTION){
      this.pokemonLabel = pokemonLabel;
      this.handlePokemonClick = handlePokemonClick;
    }
  }

export default Pokemon;