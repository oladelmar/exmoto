import React from 'react';
import './PhoneBox.scss';
import { useTranslation } from 'react-i18next';

const PhoneBox = () => {
   const { t } = useTranslation();
   return (
      <div className="Phone">
         <ul className="PhoneBox">
            <li className="PhoneBox__Item PhoneBox__Item--Bold">${t('контакты')}:</li>
            <li className="PhoneBox__Item">+373 79 56 50 04</li>
            <li className="PhoneBox__Item">+373 68 20 08 84</li>
            <li className="PhoneBox__Item">+373 22 28 47 61</li>
         </ul>
      </div>
   )
};

export default PhoneBox;