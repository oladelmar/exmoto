import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import './Services.scss';
import Service from './Service/Service';
import { Curier, Envelope } from './../../assets/image';
import { useTranslation } from 'react-i18next';

const Services = props => {
   const { t } = useTranslation();

   const [service] = useState({
      contact: {
         heading: `${t('Написать нам')}`,
         icon: Envelope
      },
      curier: {
         heading: `${t('Заказать курьера')}`,
         icon: Curier
      },
   });

   return (
      <div className="Container">
         <div className="Services">
            <h3 className="Services__Header">{t('СВЯЗАТЬСЯ С НАМИ')}</h3>
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