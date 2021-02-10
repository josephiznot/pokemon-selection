import axios from 'axios';

export const MAX_POKEMON_NUMBER = 889;
export const POKEMON_URL_1 = 'https://pokeapi.co/api/v2/pokemon/7/';
export const POKEMON_URL_2 = 'https://pokeapi.co/api/v2/pokemon/4/';
export const POKEMON_URL_3 = 'https://pokeapi.co/api/v2/pokemon/1/';
export const DEFAULT_POKEMON_API_REQUESTS = [
  axios.get(POKEMON_URL_1),
  axios.get(POKEMON_URL_2),
  axios.get(POKEMON_URL_3),
];

// randomPokemonNumber :: Number -> Number
export const randomPokemonNumber = (maxNumber=MAX_POKEMON_NUMBER)=>(
    Math.floor(Math.random() * maxNumber)
  );
  
// numberToString :: Number  -> String
export const numberToString = (number=0)=>(
  `https://pokeapi.co/api/v2/pokemon/${number}/`
);

// fetchRandomPokemonDatum :: String -> Promise
export const fetchRandomPokemonDatum = (string=numberToString(randomPokemonNumber()))=>(
  axios.get(string)
)

// fetchPokemonData :: Promise[] -> Promise
export const fetchPokemonData = async (promises = DEFAULT_POKEMON_API_REQUESTS)=>(
  Promise.all(promises)
);
  