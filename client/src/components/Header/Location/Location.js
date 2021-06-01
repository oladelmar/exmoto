import React from 'react';

import './Location.scss';
import PriceTable from './../../Header/PriceTable/PriceTable';
import { useTranslation } from 'react-i18next';

const Location = props => {
   const { t } = useTranslation();

   return (
      <div className="Location">
         <span className="Location__Span">{t('тарифы')}: </span>
         <ul className="Location__List" >
            {props.locations.map(loc => (
               <li className="Location__Item" key={loc} data={loc} onMouseEnter={(event) => props.showCards(event)} onMouseLeave={(event) => props.showCards(event)}>
                  {loc}
                  <div className={props.show[loc] ? "Location__Table Location__Table--Active" : "Location__Table"}>
                     <PriceTable data={loc} key={`table-${loc}`} />
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Location;

// 