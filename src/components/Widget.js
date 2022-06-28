import './widget.css'
import Card from "./Card";
import Header from "./Header";
import Details from './Details';
import { useContext } from 'react';
import WeatherContext from '../store/weather-context';

const weatherFolder = require.context('./weather', true);


const Widget = () => {

    const weatherCtx = useContext(WeatherContext);

    const temperatureText = !weatherCtx.weatherData || weatherCtx.httpError ?
        '-' : weatherCtx.weatherData.current.temp_c;
    const descriptionText = !weatherCtx.weatherData || weatherCtx.httpError ?
        '' : weatherCtx.weatherData.current.condition.text;
    let locationText = 'Enter your location!';
    if (weatherCtx.weatherData) {
        locationText = `${weatherCtx.weatherData.location.name}, ${weatherCtx.weatherData.location.country}`;
    }
    if (weatherCtx.httpError) {
        locationText = weatherCtx.httpError;
    }

    let iconAddress;
    if (weatherCtx.iconCode) {
        iconAddress = weatherFolder(
            `./${weatherCtx.weatherData.current.is_day ? 'day' : 'night'}/${weatherCtx.iconCode}.png`
        );
    }


    return (
        <Card className='widget'>
            <Header />
            {weatherCtx.iconCode && <img src={iconAddress} className='weather-icon' alt=''></img>}
            <h1 className='temp-text'>{`${temperatureText}°C`}</h1>
            <p className='description-text'>{descriptionText}</p>
            <div>
                <span ><i className="fa-solid fa-map-location-dot location-dot"></i></span>
                <span className='location-text'>{locationText}</span>
            </div>
            <Details />
        </Card>
    );
}

export default Widget;