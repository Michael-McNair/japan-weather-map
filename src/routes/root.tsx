import { useState } from 'react';
import SlideButton from '../components/SlideButton';
import styled from 'styled-components';
import APIKey from '../APIKey';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  label {
    margin: 10px 0 5px;
  }
  button {
    margin-top: 10px;
    padding: 5px 10px;
  }
`;

export default function Root() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  function fetchCoords() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <StyledApp>
      <form className="location-name"></form>
      <form className="lat-and-lon">
        <div>
          <label>latitude</label>
          <input
            type="number"
            max="180"
            placeholder="0 ~ 180"
            value={latitude}
            onChange={(e: any) => setLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>longitude</label>
          <input
            type="number"
            max="180"
            placeholder="0 ~ 180"
            value={longitude}
            onChange={(e: any) => setLongitude(e.target.value)}
          />
        </div>
        <SlideButton
          onClick={(e: any) => {
            e.preventDefault();
            if (latitude !== '' && longitude !== '') {
              fetchCoords();
              setLatitude('');
              setLongitude('');
            }
          }}
          content="Search"
        />
      </form>
    </StyledApp>
  );
}
