import React from 'react';

export const GenericLabelComponent = ({string='', className=''})=>(
    <div className={className}>{string}</div>
  );

export default GenericLabelComponent;