import React, { useState } from 'react';

import Location from './../../components/Header/Location/Location';

const PriceBuilder = () => {
   const [location] = useState(['Молдова', 'Украина', 'Россия', 'Румыния', 'Беларусь', 'Прибалтика', 'Азия']);
   const [rates, setRates] = useState({cardStatus: {}});

   const showCardsHandler = (event) => {
      let status = {}
      let selectedCard = event.target.getAttribute('data');
      
      if(event.type === 'mouseenter') {status[selectedCard] = true;} 
      if(event.type === 'mouseleave') {status[selectedCard] = false;} 
      setRates({cardStatus: status});
   };

   return (
      <>
         <Location 
            locations={location} 
            showCards={(event) => showCardsHandler(event)}
            show={rates.cardStatus}
         />
      </>
   );

};

export default PriceBuilder;