import React from 'react';

import './Footer.scss';
import Button from './../UI/Button/Button';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
   const { t } = useTranslation();
   return (
      <footer className="Footer">
         <div className="Container">
            <div className="Footer-Box">
               <div className="Footer-Box__Info">
                  <h3 className="Footer__Header">{t('Контакты')}:</h3>
                  <div className="Footer-Box__Info-Box">
                     <ul className="Footer-Box__List">
                        <li className="Footer-Box__List"><a className="Footer-Box__Link" href="tel:">+373 79 565004</a></li>
                        <li className="Footer-Box__List"><a className="Footer-Box__Link" href="tel:">+373 68 200884</a></li>
                        <li className="Footer-Box__List"><a className="Footer-Box__Link" href="tel:">+373 22 284761</a></li>
                     </ul>
                     <ul className="Footer-Box__List Footer-Box__List--2 ">
                        <li className="Footer-Box__List"><a className="Footer-Box__Link" href="tel:">kiv@exmoto.com</a></li>
                        <li className="Footer-Box__List"><a className="Footer-Box__Link" href="tel:">International Department ExMoto<br />Moldova, Kishinev.</a></li>
                     </ul>
                  </div>
               </div>
               <div className="Footer-Box__Rates">
                  <NavLink to="/price">
                     <Button btnStyle='Button__White'>{t('ПРАЙС-ЛИСТ')}</Button>
                  </NavLink>
               </div>
            </div>
         </div>
      </footer>
   )
};

export default Footer;