import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form className="Search-form">
          <input
            type="search"
            placeholder="type a city..."
            className="Form-control"
            autoFocus
          ></input>

          <input type="submit" value="search" className="Submit-button" />
        </form>
        <div className="Current-weather">
          <h1>New York</h1>

          <ul>
            <li>Tuesday 12:16,clear sky</li>
            <li>Humidity:86%,Wind :3.09 km/h</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
            <strong>
              <span className="Temperature">6 </span>{" "}
            </strong>
            <span className="Temperature-unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>precipitation:60%</li>
              <li>Humidity:5%</li>
              <li>Wind:5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
