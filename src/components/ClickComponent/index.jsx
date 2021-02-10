import React from 'react';

import './index.css';
import {DEFAULT_FUNCTION} from '../../constants';

export const CLICK_CONTAINER_CLASS = 'click-container';

export const ClickComponent = (BaseComponent)=>(
    handleClick=DEFAULT_FUNCTION)=>(props)=>(
    <div className={CLICK_CONTAINER_CLASS} onClick={handleClick}>
        <BaseComponent {...props} />
    </div>
);

export default ClickComponent;