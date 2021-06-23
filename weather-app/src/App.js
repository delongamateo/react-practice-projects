import './App.css';
import WeatherDetail from './WeatherDetail';
import WeatherComp from './WeatherComp';
import { useState } from 'react';

const weather = require('./weather.json');

function App() {
  const [day, setDay] = useState(0);


  return (
    <div className="container">
      <WeatherDetail dayWeather={weather[day]} />
      <WeatherComp weather={weather} setDay={setDay} />
    </div>
  );
}

export default App;
