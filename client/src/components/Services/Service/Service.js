import React from 'react';

import './Service.scss';

const Service = props => (
   <div className="Service" id={props.id}>
      <img src={props.icon} className="Service__Icon" alt="icon"/>
      <div className="Service-Box">
         <h4 className="Service-Box__Header">{props.heading}</h4>
      </div>
   </div>
);

export default Service;