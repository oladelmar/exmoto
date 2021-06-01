import React, { useEffect, useState } from 'react';

import './PricePage.scss';
import PriceTable from './../../components/Header/PriceTable/PriceTable';
import { useTranslation } from 'react-i18next';

const PricePage = () => {
   const { t } = useTranslation();

   const [price] = useState({
      moldova: {
         country: `${t('Молдова')}`,
         cityData: {
            kishinev: {
               city: `${t('Кишинёв')}`,
               priceNds: '36',
               priceNoNds: '',
               priceplus: '6',
               delivery: `${t('В день приёма заказа')}`
            },
            other: {
               city: `${t(`${t('Другие города')}`)}`,
               priceNds: '90',
               priceNoNds: '',
               priceplus: '12',
               delivery: `1/2 ${t('рабочих дня')})`
            },
         },
         currency: `${t(`${t('Лей')}`)}`,
         weight: '2',
         weightplus: '1',
         addNds: false
      },
      romania: {
         country: `${t('Румыния')}`,
         cityData: {
            buchuresti: {
               city: `${t('Бухарест')}`,
               priceNds: '480',
               priceNoNds: '',
               priceplus: '50',
               delivery: `1/3 ${t('рабочих дня')}`
            },
            other: {
               city: `${t('Другие города')}`,
               priceNds: '540',
               priceNoNds: '',
               priceplus: '50',
               delivery: `2/5 ${t('рабочих дня')}`
            },
         },
         currency: `${t('Лей')}`,
         weight: '0,5',
         weightplus: '0,5',
         addNds: false
      },
      ukraine: {
         country: `${t('Украина')}`,
         cityData: {
            kiev: {
               city: `${t('Киев')}`,
               priceNds: '300',
               priceNoNds: '250',
               priceplus: '18',
               delivery: `1/3 ${t('рабочих дня')}`
            },
            bigcity: {
               city: `${t('Крупные города')}`,
               priceNds: '360',
               priceNoNds: '300',
               priceplus: '18',
               delivery: '2/3 '
            },
            region: {
               city: `${t('Области')}`,
               priceNoNds: '350',
               priceNds: '420',
               priceplus: '18',
               delivery: '2/4 '
            },
         },
         currency: `${t('Лей')}`,
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
      russia: {
         country: `${t('Россия')}`,
         cityData: {
            moscow: {
               city: `${t('Москва')}`,
               priceNoNds: '400',
               priceNds: '480',
               priceplus: '50',
               delivery: `3/5 ${t('рабочих дня')}`
            },
            bigcity: {
               city: `${t('Крупные города')}`,
               priceNoNds: '400',
               priceNds: '480',
               priceplus: '50',
               delivery: `4/7 ${t('рабочих дня')}`
            },
            region: {
               city: `${t('Области')}`,
               priceNoNds: '560',
               priceNds: '675',
               priceplus: '50',
               delivery: `5/10 ${t('рабочих дня')}`
            },
         },
         currency: `${t('Лей')}`,
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
      belarussia: {
         country: `${t('Беларусь')}`,
         cityData: {
            minsk: {
               city: `${t('Минск')}`,
               priceNoNds: '500',
               priceNds: '600',
               priceplus: '50',
               delivery: `2/3 ${t('рабочих дня')}`
            },
            bigcity: {
               city: `${t('Другие города')}`,
               priceNoNds: '600',
               priceNds: '720',
               priceplus: '50',
               delivery: `3/5 ${t('рабочих дня')}`
            },

         },
         currency: `${t('Лей')}`,
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
      pribaltyka: {
         country: `${t('Прибалтика')}`,
         cityData: {
            latvia: {
               city: `${t('Латвия')}`,
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '4/5',
               delivery: `4/6 ${t('рабочих дня')}`
            },
            litva: {
               city: `${t('Литва')}`,
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '4/5',
               delivery: `4/6 ${t('рабочих дня')}`
            },
            estony: {
               city: `${t('Эстония')}`,
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '4/5',
               delivery: `4/6 ${t('рабочих дня')}`
            },
         },
         currency: '$',
         weight: '0,5',
         weightplus: '0,5',
         addNds: true,
         type: `${t('Страна')}`
      },
      asia: {
         country: `${t('Средняя и Центральная Азия')}`,
         type: `${t('Страна')}`,
         cityData: {
            kazah: {
               city: `${t('Казахстан')}`,
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '6/8',
               delivery: `4/6 ${t('рабочих дня')}`
            },
            kirgiz: {
               city: `${t('Киргизия')}`,
               priceNoNds: '60',
               priceNds: '72',
               priceplus: '8/10',
               delivery: `${t('Уточнять у диспетчера')}`
            },
            tadjik: {
               city: `${t('Таджикистан')}`,
               priceNoNds: '67',
               priceNds: '81',
               priceplus: '13/16',
               delivery: `${t('Уточнять у диспетчера')}`
            },
            uzbek: {
               city: `${t('Узбекистан')}`,
               priceNoNds: '67',
               priceNds: '81',
               priceplus: '13/16',
               delivery: `${t('Уточнять у диспетчера')}`
            },
            turkmek: {
               city: `${t('Туркменистан')}`,
               priceNoNds: '67',
               priceNds: '81',
               priceplus: '13/16',
               delivery: `${t('Уточнять у диспетчера')}`
            },
         },
         currency: '$',
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
   });

   const allTables = Object.keys(price).map(ctry => (
      <div className="PricePage-Box__Item" key={ctry}>
         <h2 className="PricePage-Box__Header">{price[ctry].country}</h2>
         <div className="PricePage-Box__Block">
            <PriceTable country={price[ctry]}/>
         </div>
      </div>
   ));

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="PricePage">
         <h1 className="PricePage__Heading">{t('ПРАЙС-ЛИСТ')}</h1>
         <div className="PricePage-Box">
            {allTables}
         </div>
         <p className="PricePage__Hint">* {t('Тарифы на международные отправки по странам ЕС и остального мира, запрашивайте у диспетчера')}.</p>
      </div>
   );
};

export default PricePage;