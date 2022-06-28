import { useRef } from 'react';
import { useContext } from 'react';
import WeatherContext from '../store/weather-context';
import './input.css';

const Input = () => {

    const weatherCtx = useContext(WeatherContext);

    const inputRef = useRef();

    const inputSubmitHandler = event => {
        event.preventDefault();
        weatherCtx.getWeather(inputRef.current.value);
    }

    const getLocation = () => {
        weatherCtx.getWeather('auto:ip')
        inputRef.current.value = '';
    }

    return (
        <form onSubmit={inputSubmitHandler}>
            <i onClick={getLocation} className="fa-solid fa-location-crosshairs location-icon"></i>
            <input ref={inputRef} className='location-input' type='text' placeholder='Eg. Lagos'></input>
        </form>
    );
}

export default Input;