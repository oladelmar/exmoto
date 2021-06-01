import React from 'react';
import './AboutUs.scss';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
   const { t } = useTranslation();
   return (
      <div className="Container">
         <div className="AboutUs">
            <h3 className="AboutUs__Heading">{t('O НАС')}</h3>
            <div className="AboutUs-Box">
               <p className="AboutUs-Box__Text">
                  {t('Компания EX MOTO CS предлагает Вам свои услуги по курьерской доставке в любой населённый пункт Молдовы')}, {t('включая Кишинёв')}, {t('СНГ и дальнего зарубежья')}.
                  {t('Полный комплекс услуг по доставке почтовых и грузовых отправлений по принципу от двери до двери')}.
               </p>
               <p className="AboutUs-Box__Text">
                  {t('Компания “EX MOTO CS“ является представителем компании ТОВ “ЕКСПРЕС МОТО УКРАЇНА“')} – {t('одной из крупнейших курьерских служб в Украине и успешно ведёт свою деятельность в Молдове более 20 лет')}.
                  {t('Скорость и качество нашей работы соответствует самым высоким требованиям')}.
            </p>
            </div>
         </div>
      </div>
   );
}

export default AboutUs;