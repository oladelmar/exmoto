import axios from 'axios';

export const weatherAxios = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const countryAxios = axios.create({
      baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/'
});

const insctance = axios.create({
      baseURL: 'https://exmoto.md/api/v1'
});
  
export default insctance;