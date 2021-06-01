import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.scss';
import Logo from './../Logo/Logo';
import PhoneBox from './../PhoneBox/PhoneBox';
import OrderBuilder from './../../../containers/OrderBuilder/OrderBuilder';
import Button from './../../UI/Button/Button';
import Weather from './../../../containers/WeatherBuilder/WeatherBuilder';
import Currency from './../../../containers/CurrencyBuilder/CurrencyBuilder';
import LanguagesBuilder from './../../../containers/LanguageBuilder/LanguageBuilder';
import { useTranslation } from 'react-i18next';

const Toolbar = () => {
   const { t } = useTranslation();
   return (
      <header className="Toolbar">
         <div className="Container">
            <div className="Toolbar-Box">
               <div className="Toolbar-Box__Top-Row">
                  <Logo />
                  <OrderBuilder />
                  <div className="Toolbar-Box__Price">
                     <NavLink to='/price'>
                        {/* <h1>{t('Welcome to React')}</h1> */}
                        <Button btnStyle="Button__Green">{t('ПРАЙС-ЛИСТ')}</Button>
                     </NavLink>
                  </div>
                  <PhoneBox />
               </div>
               <div className="Toolbar-Box__Line"></div>
               <div className="Toolbar-Box__Bottom-Row">
                  <LanguagesBuilder />
                  <Currency />
                  <Weather />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Toolbar;