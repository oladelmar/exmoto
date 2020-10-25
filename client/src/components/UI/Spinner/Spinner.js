import React from 'react';
import './Spinner.scss';

export const SpinnerCirle = () => (
      <div className="lds-spinner">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
);

export const SpinnerLine = () => (
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
);