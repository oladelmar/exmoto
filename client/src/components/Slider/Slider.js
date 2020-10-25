import React from 'react';

import './Slider.scss';

const Slider = props => {
   return (
         <div id={props.id}  className="SliderImage" style={{backgroundImage: `linear-gradient(105deg, rgba(255,255,255,0.9) 
         ${props.percent}%, rgba(255,255,255, 1) ${'45%'}, transparent 10%), url(${props.bgimage})`}}>
            <div className="SliderImage__Box">
               <h2 className="SliderImage__Heading">{props.heading}</h2>
               <p className="SliderImage__Paragraph">{props.text}</p>
            </div>
         </div>
      );
};

export default Slider;
