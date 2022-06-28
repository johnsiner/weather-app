import { useEffect, useState } from 'react';
import './App.css';
import Widget from './components/Widget';
import WeatherProvider from './store/weatherContextProvider';

function App() {


    return (
        <WeatherProvider>
            <div className='app'>
                <Widget />
            </div>
        </WeatherProvider>
    );
}

export default App;
