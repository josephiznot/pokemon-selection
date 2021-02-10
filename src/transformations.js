import Pokemon, { Pokemons } from "./datatypes";
import { valueToPokemons } from './pokemonReducer';
import {fetchPokemonData, fetchRandomPokemonDatum} from './io';
import { DEFAULT_FUNCTION } from "./constants";

// stringToName :: String -> String
export const stringToName = (string='')=>(
    string.slice(0,1).toUpperCase() + string.slice(1)
  );
  
  // numberToHeight :: Number -> String
  export const numberToHeight = (number='')=>(
    `${number}"`
  );
  
  // numberToWeight :: Number -> String
  export const numberToWeight = (number='')=>(
    `${number}lb`
  );
  
  // numnberToBaseExperience :: Number -> String
  export const numnberToBaseExperience = (number='')=>(
    `${number} XP`
  );
  
  // pokemonResponseToPokemon :: PokemonDatum -> Pokemon
  export const pokemonResponseToPokemon = ({data:{
    name='', height=0, weight=0, base_experience=0, sprites:{front_default}={}
  }={}}={})=>(
    new Pokemon(
      stringToName(name),
      numberToHeight(height),
      numberToWeight(weight),
      numnberToBaseExperience(base_experience),
      front_default
    )
  )
  
  // valueToPokemonsSideEffect :: Function -> Functino -> Void
  export const valueToPokemonsSideEffect = (
    dispatch = DEFAULT_FUNCTION)=> async ()=>{
    const pokemonsResponse = await fetchPokemonData();
    dispatch(valueToPokemons(new Pokemons(pokemonsResponse.map(pokemonResponseToPokemon))));
  };
  
  // valueToHandleRandomPokemonClick :: Function -> Pokemons -> Function -> Void
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
  
  // reduxStateToPokemons :: ReduxState -> Pokemons
  export const reduxStateToPokemons = ({pokemons={}}={})=>pokemons