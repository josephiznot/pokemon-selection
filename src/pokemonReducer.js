import {ReduxAction, ReduxState} from './datatypes';

export const initialState = new ReduxState();
export const POKEMONS = 'POKEMONS';

// valueToPokemons :: Pokemon[] -> ReduxAction
export const valueToPokemons = (pokemonsPayload=[]) =>(
    new ReduxAction(POKEMONS, pokemonsPayload)
)

// pokemonReducer :: ReduxState, ReduxAction -> ReduxState
export const pokemonReducer = (state = initialState, {type='', payload={}}={})=>{
    if(type === POKEMONS){
        return {...state, pokemons: payload}
    }
    return state;
};

export default pokemonReducer;