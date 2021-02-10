import React from 'react';

import './index.css';

export const PokemonComponent = ({
    height='', weight='', name='', baseExperience=''
})=>(
    <div className='pokemon'>
        <div className='pokemon-name'>{name}</div>
        <div>{height}</div>
        <div>{weight}</div>
        <div>{baseExperience}</div>
    </div>
);

export default PokemonComponent;