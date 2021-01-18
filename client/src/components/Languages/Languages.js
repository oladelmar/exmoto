import React from 'react';
import './Languages.scss';

const Languages = props => (
   <div className="Language">
      <div className="Language-Box">
         <button onClick={() => props.handleLang('ru')} className="Language-Box__Button"> RU </button>
         <span> / </span>
         <button onClick={() => props.handleLang('ro')} className="Language-Box__Button"> RO </button>
      </div>
   </div>
);

export default Languages