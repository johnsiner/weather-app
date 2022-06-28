import { createContext } from "react";

const WeatherContext = createContext({
    weatherData: {},
    getWeather: location => {},
    httpError: '',
    iconCode: ''
});

export default WeatherContext;