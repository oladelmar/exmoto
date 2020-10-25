import React, { useEffect, useState } from 'react';

import './PricePage.scss';
import PriceTable from './../../components/Header/PriceTable/PriceTable';

const PricePage = () => {
   const [ price ] = useState({
      moldova: {
         country: "Молдова",
         cityData: {
            kishinev: {
               city: 'Кишинёв',
               priceNds: '36',
               priceNoNds: '',
               priceplus: '6',
               delivery: 'В день приёма заказа'
            } ,             
            other: {
               city: 'Другие города',
               priceNds: '90',
               priceNoNds: '',
               priceplus: '12',
               delivery: '1/2 рабочих дня'
            } ,             
         },
         currency: 'Лей',
         weight: '2',
         weightplus: '1',
         addNds: false
      },
      romania: {
         country: "Румыния",
         cityData: {
            buchuresti: {
               city: 'Бухарест',
               priceNds: '480',
               priceNoNds: '',
               priceplus: '50',
               delivery: '1/3 рабочих дня'
            } ,             
            other: {
               city: 'Другие города',
               priceNds: '540',
               priceNoNds: '',
               priceplus: '50',
               delivery: '2/5 рабочих дня'
            } ,             
         },
         currency: 'Лей',
         weight: '0,5',
         weightplus: '0,5',
         addNds: false
      },
      ukraine: {
         country: "Украина",
         cityData: {
            kiev: {
               city: 'Киев',
               priceNds: '300',
               priceNoNds: '250',
               priceplus: '18',
               delivery: '1/3 рабочих дня'
            } ,             
            bigcity: {
               city: 'Крупные города',
               priceNds: '360',
               priceNoNds: '300',
               priceplus: '18',
               delivery: '2/3 '
            },             
            region: {
               city: 'Области',
               priceNoNds: '350',
               priceNds: '420',
               priceplus: '18',
               delivery: '2/4 '
            },             
         },
         currency: 'Лей',
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
      russia: {
         country: "Россия",
         cityData: {
            moscow: {
               city: 'Москва',
               priceNoNds: '350',
               priceNds: '420',
               priceplus: '50',
               delivery: '3/5 рабочих дня'
            } ,             
            bigcity: {
               city: 'Крупные города',
               priceNoNds: '400',
               priceNds: '480',
               priceplus: '50',
               delivery: '4/7 рабочих дня'
            },             
            region: {
               city: 'Области',
               priceNoNds: '560',
               priceNds: '675',
               priceplus: '50',
               delivery: '5/10 рабочих дня'
            },             
         },
         currency: 'Лей',
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
      belarussia: {
         country: "Беларусь",
         cityData: {
            minsk: {
               city: 'Минск',
               priceNoNds: '500',
               priceNds: '600',
               priceplus: '50',
               delivery: '2/3 рабочих дня'
            } ,             
            bigcity: {
               city: 'Другие города',
               priceNoNds: '600',
               priceNds: '720',
               priceplus: '50',
               delivery: '3/5 рабочих дня'
            },             
             
         },
         currency: 'Лей',
         weight: '0,5',
         weightplus: '0,5',
         addNds: true
      },
      pribaltyka: {
         country: "Прибалтика",
         cityData: {
            latvia: {
               city: 'Латвия',
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '4/5',
               delivery: '4/6 рабочих дня'
            },                          
            litva: {
               city: 'Литва',
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '4/5',
               delivery: '4/6 рабочих дня'
            },                          
            estony: {
               city: 'Эстония',
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '4/5',
               delivery: '4/6 рабочих дня'
            },                          
         },
         currency: '$',
         weight: '0,5',
         weightplus: '0,5',
         addNds: true,
         type: 'Страна'
      },
      asia: {
         country: "Средняя и Центральная Азия",
         type: 'Страна',
         cityData: {
            kazah: {
               city: 'Казахстан',
               priceNoNds: '30',
               priceNds: '36',
               priceplus: '6/8',
               delivery: '4/6 рабочих дня'
            },                          
            kirgiz: {
               city: 'Киргизиятва',
               priceNoNds: '60',
               priceNds: '72',
               priceplus: '8/10',
               delivery: 'Уточнять у диспетчера'
            },                          
            tadjik: {
               city: 'Таджикистан',
               priceNoNds: '67',
               priceNds: '81',
               priceplus: '13/16',
               delivery: 'Уточнять у диспетчера'
            },                          
            uzbek: {
               city: 'Узбекистан',
               priceNoNds: '67',
               priceNds: '81',
               priceplus: '13/16',
               delivery: 'Уточнять у диспетчера'
            },                          
            turkmek: {
               city: 'Туркменистан',
               priceNoNds: '67',
               priceNds: '81',
               priceplus: '13/16',
               delivery: 'Уточнять у диспетчера'
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
            <PriceTable country={price[ctry]} key/>
         </div>
      </div>
   ));

   useEffect(() => {
      window.scrollTo(0 , 0);
   }, []);
   
   return (
      <div className="PricePage">
         <h1 className="PricePage__Heading">ПРАЙС-ЛИСТ</h1>
         <div className="PricePage-Box"> 
            { allTables }
         </div>
         <p className="PricePage__Hint">* Тарифы на международные отправки по странам ЕС и остального мира, запрашивайте у
диспетчера.</p>
      </div>
   );
};

export default PricePage;