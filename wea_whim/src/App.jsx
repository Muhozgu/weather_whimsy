import { useState } from 'react';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;  //https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely

    const res = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=193c6045931f405189d9ae9ce78af351&include=minutely`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="app">
      <h1 className="title">Weather Whimpsey</h1>
      <div className="search-container">
        <input
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button onClick={fetchWeather} className="button">Search</button>
      </div>
      {weather && (
        <div className="card">
          <h2>{weather.location.name}</h2>
          <p className="temp">{weather.current.temp_c}&deg;C</p>
          <p className="condition">{weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}
