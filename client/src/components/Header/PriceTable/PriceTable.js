import React from 'react';

import './PriceTable.scss';

const PriceTable = props => {
      const allRows = Object.keys(props.country.cityData).map(key => (
            <li className="Table__Body-Row" key={key} >
                  <div className="Table__Body-Col Table__Body-Col--1">{`${props.country.cityData[key].city}`}</div>
                  {props.country.cityData[key].priceNoNds ? <div className="Table__Body-Col">{`${props.country.cityData[key].priceNoNds} ${props.country.currency}`} </div> : null}
                  <div className="Table__Body-Col">{`${props.country.cityData[key].priceNds} ${props.country.currency}`}</div>
                  <div className="Table__Body-Col">{`${props.country.cityData[key].priceplus} ${props.country.currency}`}</div>
                  <div className="Table__Body-Col">{props.country.cityData[key].delivery}</div>
            </li> 
      ));

      return(
      <ul  className='Table__List'>
            <li  className="Table__Header-Row">
                  <div  className="Table__Header-Col Table__Header-Col--1">{props.country.type ? props.country.type : 'Город'}</div>
                  {props.country.addNds ? <div  className="Table__Header-Col">{`Цена до ${props.country.weight} кг `}<br/>(Без НДС)</div> : null}
                  <div  className="Table__Header-Col">{`Цена до ${props.country.weight} кг`} <br/>(C НДС)</div>
                  <div className="Table__Header-Col">{`+ ${props.country.weightplus}кг`} </div>
                  <div  className="Table__Header-Col">Сроки доставки</div>
            </li> 
            {allRows}
      </ul>
      );
};

export default PriceTable;
