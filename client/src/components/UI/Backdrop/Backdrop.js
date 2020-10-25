import React from 'react';

import './Backdrop.scss';

const Backdrop = ( props ) => (
     props.show ? 
     <div className='Backdrop' onClick={props.close}>
          {props.children}
     </div> : null
);

export default Backdrop; 