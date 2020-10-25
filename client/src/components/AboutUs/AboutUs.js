import React from 'react';
import './AboutUs.scss';

const AboutUs = () => (
   <div className="Container">
      <div className="AboutUs">
         <h3 className="AboutUs__Heading">O НАС</h3>
         <div className="AboutUs-Box">
            <p className="AboutUs-Box__Text">
            Компания “EX MOTO CS” предлагает Вам свои услуги по курьерской доставке в любой
            населённый пункт Молдовы (включая Кишинёв), СНГ и дальнего зарубежья.
            Полный комплекс услуг по доставке почтовых и грузовых отправлений по принципу «от двери до двери».
            </p>
            <p className="AboutUs-Box__Text">
            Компания “EX MOTO CS” является представителем компании ТОВ "ЕКСПРЕС МОТО УКРАЇНА" – одной из крупнейших курьерских служб в Украине 
            и успешно ведёт свою деятельность в Молдове более 20 лет.
            Скорость и качество нашей работы соответствует самым высоким требованиям.
            </p>
         </div>
      </div>
   </div>
);

export default AboutUs;