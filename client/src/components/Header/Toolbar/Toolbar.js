import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.scss';
import Logo from './../Logo/Logo';
import PhoneBox from './../PhoneBox/PhoneBox';
import OrderBuilder from './../../../containers/OrderBuilder/OrderBuilder';
import Button from './../../UI/Button/Button';
import Weather from './../../../containers/WeatherBuilder/WeatherBuilder';
import Currency from './../../../containers/CurrencyBuilder/CurrencyBuilder';

const Toolbar = () => {
   return (
      <header className="Toolbar">
         <div className="Container">
            <div className="Toolbar-Box">
               <div  className="Toolbar-Box__Top-Row">
                  <Logo/>
                  <OrderBuilder/>
                  <div className="Toolbar-Box__Price">
                     <NavLink to='/price'>
                        <Button btnStyle="Button__Green">ПРАЙС-ЛИСТ</Button>
                     </NavLink>
                  </div>
                  <PhoneBox/>
               </div>
               <div className="Toolbar-Box__Line"></div>
               <div className="Toolbar-Box__Bottom-Row">
                  <Currency/>
                  <Weather/>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Toolbar;