import React, { useState, useEffect } from 'react';
import './root.css';

export default function Root() {
  const ApiKey: string = '4b6b8969dc618e1bf2e2319466654a7d';
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}$appid=${ApiKey}`

  return (
    <div className="app">
      <form className="location-name"></form>
      <form className="lat-and-lon">
        <div>
          <label>latitude</label>
          <input
            type="text"
            placeholder="0 ~ 180"
            value={latitude}
            onChange={(e: any) => setLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>longitude</label>
          <input
            type="text"
            placeholder="0 ~ 180"
            value={longitude}
            onChange={(e: any) => setLongitude(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
