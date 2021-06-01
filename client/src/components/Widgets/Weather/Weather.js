import React from 'react'
import './Weather.scss';
import { useTranslation } from 'react-i18next';

const Weather = props => {
   const { t } = useTranslation();
   return (
      <div className='Weather'>
         <div className="Weather-LeftSide">
            <span className='Weather-LeftSide__Location'>{t('Кишинёв')}</span>
            <div className='Weather-LeftSide__Temperature'>
               <span>{`${props.weather.temp} `}</span> <span>&#8451;</span>
            </div>
         </div>
         <div className="Weather-RightSide">
            <img src={`https://openweathermap.org/img/wn/${props.weather.icon}.png`} className="Weather-RightSide__Icon" alt="weather icon " />
         </div>
      </div>
   );
}

export default Weather;