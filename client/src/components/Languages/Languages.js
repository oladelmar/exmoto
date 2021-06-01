import React from 'react';
import './Languages.scss';

import {RusIcon, RoIcon} from "./../../assets/image";

const Languages = props => (
   <div className="Language">
      <div className="Language-Box">
         <button onClick={() => props.handleLang('ru')} className="Language-Box__Button">
         <img src={RusIcon} alt="ExMoto logo" className="Language-Box__Icon"/> </button>
         <span></span>
         <button onClick={() => props.handleLang('ro')} className="Language-Box__Button">
         <img src={RoIcon} alt="ExMoto logo" className="Language-Box__Icon"/> </button>
      </div>
   </div>
);

export default Languages