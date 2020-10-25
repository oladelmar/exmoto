import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import './Services.scss';
import Service from './Service/Service';
import { Curier, Envelope } from './../../assets/image';

const Services = props => {
   const [service] = useState({
      contact: {
         heading: 'Написать нам',
         icon: Envelope
      },
      curier: {
         heading: 'Заказать курьера',
         icon: Curier
      },
   });
   
   return (
      <div className="Container">
         <div className="Services">
            <h3 className="Services__Header">СВЯЗАТЬСЯ С НАМИ</h3>
            <div className="Services-Box" onClick={props.click}>
               <Service 
                  key='contact'
                  id='contact'
                  heading={service.contact.heading}
                  icon={service.contact.icon}
               />
               <NavLink to="/delivery" className="Link">
                  <Service 
                     key='curier'
                     heading={service.curier.heading}
                     icon={service.curier.icon}
                  />
               </NavLink>
            </div>
         </div> 
      </div>
   );
};

export default Services;