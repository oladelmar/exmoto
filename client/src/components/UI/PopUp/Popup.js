import React from 'react';
import checked from './../../../assets/images/checked.png';
import './Popup.scss';

const Popup = props => (
    <div className="Popup">
       <p className="Popup__Text">{props.text}</p>
       <img src={checked} className="Popup__Icon" alt="checked"/>
    </div>
);

export default Popup;