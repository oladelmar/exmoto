import React, { useEffect, useState } from 'react';
import './WeatherBuilder.scss';
import { weatherAxios } from './../../axios-order';
import Weather from './../../components/Widgets/Weather/Weather';
import { SpinnerLine } from './../../components/UI/Spinner/Spinner';

const WeatherBuilder = () => {
   const [weather, setWeather] = useState({
      temp: '',
      icon: '',
      showSpinner: true
   });
   const API = {key: 'b678c7f9b4bd970e62e506896eaa41c9'}
   
   useEffect(() => {
      weatherAxios.get(`weather?q=Chisinau&appid=${API.key}&units=metric`)
      .then(res => {
         setWeather({ 
           temp: Math.round(res.data.main.temp),
           icon: res.data.weather[0].icon,
           showSpinner: false
         });                  
      })
      .catch(err => {
         setWeather(prevState => ({ 
               ...prevState,
               showSpinner: true
             }));
      })
   }, [API.key]);
   return (
      <div className="WeatherBuilder">
         { weather.showSpinner ? <SpinnerLine/> : <Weather weather={weather}/> } 
      </div>
   );
};

export default WeatherBuilder;