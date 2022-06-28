import { useEffect, useState } from 'react';
import WeatherContext from './weather-context';

let module = require('./weather-codes.js');

const WeatherProvider = (props) => {
   const [weatherData, setWeatherData] = useState();
   const [httpError, setHttpError] = useState();
   const [iconCode, setIconCode] = useState();

   const weatherCodes = module.weatherCodes;

   useEffect(() => {
      const fetchWeatherdata = async () => {
         const responce = await fetch(
            'https://api.weatherapi.com/v1/current.json?key=b44c8f1457c3454d8ca110248220104&q=auto:ip&aqi=no'
         );

         if (!responce.ok) {
            throw new Error('Something went wrong');
         }

         const data = await responce.json();
         setWeatherData(data);
         const code = weatherCodes.filter(
            (i) => i.code === data.current.condition.code
         );
         setIconCode(code[0].icon);
      };
      const ac = new AbortController();
      fetchWeatherdata().catch((error) => {
         setHttpError(error.message);
      });

      return () => ac.abort(); // Abort fetch on unmount
   }, [weatherCodes]);

   const getWeather = async (location) => {
      const responce = await fetch(
         `https://api.weatherapi.com/v1/current.json?key=b44c8f1457c3454d8ca110248220104&q=${location}&aqi=no`
      );
      if (!responce.ok) {
         if (responce.status === 400) {
            setHttpError('Enter valid location');
         } else setHttpError('Something went wrong');
         return;
      }
      setHttpError();
      const data = await responce.json();
      setWeatherData(data);
      const code = weatherCodes.filter(
         (i) => i.code === data.current.condition.code
      );
      setIconCode(code[0].icon);
   };

   const weatherContext = {
      weatherData,
      getWeather,
      httpError,
      iconCode,
   };

   return (
      <WeatherContext.Provider value={weatherContext}>
         {props.children}
      </WeatherContext.Provider>
   );
};

export default WeatherProvider;
