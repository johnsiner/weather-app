import { useContext } from 'react';
import WeatherContext from '../store/weather-context';
import './details.css';
import humidity from './humidity.png'

const Details = props => {

    const weatherCtx = useContext(WeatherContext);

    const feelsLike = !weatherCtx.weatherData || weatherCtx.httpError ? '- ' : weatherCtx.weatherData.current.feelslike_c;
    const humidityText = !weatherCtx.weatherData || weatherCtx.httpError ? '- ' : weatherCtx.weatherData.current.humidity;
    const wind = !weatherCtx.weatherData || weatherCtx.httpError ? '- ' : weatherCtx.weatherData.current.wind_kph;
    const preciptation = !weatherCtx.weatherData || weatherCtx.httpError ? '- ' : weatherCtx.weatherData.current.precip_mm;


    return (
        <div className='details'>

            <div>
                <div className='details-element'>
                    <div className='icon-container'>
                        <i className="fa-solid fa-temperature-three-quarters details-icon"></i>
                    </div>
                    <div>
                        <h4 className='value'>{`${feelsLike}°C`}</h4>
                        <h5 className='description'>Feels like</h5>
                    </div>
                </div>
                <div className='details-element'>
                    <div className='icon-container'>
                        <img src={humidity} alt=''></img>
                    </div>
                    <div>
                        <h4 className='value'>{`${humidityText}%`}</h4>
                        <h5 className='description'>Humidity</h5>
                    </div>
                </div>
            </div>

            <div>
                <div className='details-element'>
                    <div className='icon-container'>
                        <i className="fa-solid fa-wind details-icon"></i>
                    </div>
                    <div>
                        <h4 className='value'>{`${wind}km/hr`}</h4>
                        <h5 className='description'>Wind</h5>
                    </div>
                </div>
                <div className='details-element'>
                    <div className='icon-container'>
                        <i className="fa-solid fa-cloud-showers-heavy details-icon"></i>
                    </div>
                    <div>
                        <h4 className='value'>{`${preciptation}mm`}</h4>
                        <h5 className='description'>Precipitation</h5>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Details;