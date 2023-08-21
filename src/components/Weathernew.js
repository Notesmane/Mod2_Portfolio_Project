// import React, { useState, useEffect } from "react";
// import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=fb1f49e56c08682cf0a5390a623da3e1`;

  
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((Response) => {
        setData(Response.data);
        console.log(Response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="weatherContainer">
      <div className="weather">
        <div className="search">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Your City"
          />
        </div>
      </div>
      <div className="weatherLeft">
        <div className="cityleft">
          <p>{data.name}</p>
          {data.main ? <p className='actualTemp'>{data.main.temp.toFixed()}ºF</p> : null}
        </div>
        <div className='cityRight'>
          {data.main ? (<p className="bold">Real Feel: {data.main.feels_like.toFixed()}ºF</p>) : null}
          {data.weather ? (<p className="bold2">{data.weather[0].main}</p>) : null}
        </div>
      </div>
    </div>
  );
}

export default Weather;
