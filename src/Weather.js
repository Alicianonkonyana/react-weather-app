import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          {" "}
          <input type="search" placeholder="type a city..."></input>
          <input type="submit" value="search"></input>
        </form>
        <div className="row">
          <div className="col-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="sunny icon"
            />
          </div>
          <div className="col-3">
            <h1>14°C</h1>
          </div>
          <div className="col-3">
            <ul>
              <li>precipitation:68%</li>
              <li> Humidity:58%</li>
              <li>Wind:39 km/h</li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Weather</h2>
            <div>Monday 04:24</div>
            <div>Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}
