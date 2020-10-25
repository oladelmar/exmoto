import React from 'react';
import './PriceCard.scss';

const PriceCard = props => (
   <div  className={props.show ? 'PriceCard PriceCard--Active' : 'PriceCard'} data={props.data}>
   </div>
);

export default PriceCard; 