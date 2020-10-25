import React from 'react';

import Backdrop from './../Backdrop/Backdrop';
import './Modal.scss';

const Modal = props => (
   <div className="Modal-Box">
      <Backdrop show={props.show} close={props.close}/>
         <div className="Modal" 
            style={{display: props.show ? 'block' : 'none'}}>
            {props.children}
            <div className="Close" onClick={props.close}></div>
         </div>
   </div>
);

export default Modal;
