import React from "react";

import "../../styles/Forecast.css";

export default function Forecast({ weatherInfo, date }) {
    return (
        <div className="wForecast">
            <h2 className="Forecast__title">{[date[0], date[1], date[2]]}</h2>
            <img
                className="Forecast__weather-icon"
                src={
                    "https://openweathermap.org/img/wn/" +
                    weatherInfo.weather[0].icon +
                    ".png"
                }
                alt={weatherInfo.weather[0].main}
            />
            <div className="Forecast__temperature">
                <span className="temperature__max">
                    H:{Math.round(weatherInfo.temp.max)}
                    <sup className="temperature__symbol">°</sup>
                </span>
                <span className="temperature__min">
                    L:{Math.round(weatherInfo.temp.min)}
                    <sup className="temperature__symbol">°</sup>
                </span>
                <p className="description">{weatherInfo.weather[0].description}</p>
            </div>

            <hr></hr>
        </div>
    );
}
