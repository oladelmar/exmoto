import React from 'react';

import './Dots.scss';
const Dots = props => {
   const dotsList = [];
   for (let i = 0; i < props.dots; i++) {
      dotsList.push(
      <div 
         className={props.active[i] ? "Dots-Box__Dot Dots-Box__Dot--Active" : "Dots-Box__Dot"} 
         onClick={() => props.changeSlide(i)} 
         key={`dot-${i}`}>
      </div>);
   }
   return (
      <div className="Dots-Box">
         {[...dotsList]} 
      </div>
   );
};

 export default Dots;