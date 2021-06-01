import React from 'react';
import './Advertisement.scss';
import { AriixWhite } from './../../assets/image';
import { useTranslation } from 'react-i18next';

const Advertisement = props => {
   const { t } = useTranslation();
   return (
      <div className="Advertisement-Box">
         <h3 className="Advertisement-Box__Header">{t('МЫ РЕКОМЕНДУЕМ')}</h3>
         <a className="Advertisement-Link" rel="noopener noreferrer" href="https://shop.ariix.com/OnlineServices/productListingNg/customerShoppingMain?itemCode=" target="_blank">
            <div className="Advertisement">
               <img src={AriixWhite} alt="logo" />
               <p className="Advertisement__Text">{t('ЗДОРОВЬЕ И КРАСОТА')}<br /> {t('СКИДКА')}  15%</p>
            </div>
         </a>
      </div>
   );
}

export default Advertisement;