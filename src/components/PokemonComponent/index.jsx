import React from 'react';

import './index.css';

export const PokemonComponent = ({
    height='', weight='', name='', baseExperience='', src=''
})=>(
    <div className='pokemon'>
        <img src={src} alt={name}/>
        <div>{name}</div>
        <div>{height}</div>
        <div>{weight}</div>
        <div>{baseExperience}</div>
    </div>
);

export default PokemonComponent;