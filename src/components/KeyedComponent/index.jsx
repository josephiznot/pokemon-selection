import React from 'react';

import {numberToKey} from './transformations';

export const KeyedComponent = (BaseComponent) => (
    {id=0, ...props}={}, index=0) =>{
    const key = numberToKey(id)(index);
    return(
        <BaseComponent {...props} key={key} />
    );
}

export default KeyedComponent;