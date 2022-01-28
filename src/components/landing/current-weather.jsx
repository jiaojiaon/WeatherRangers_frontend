import React from "react";
import moment from "moment";

import "./current-weather.scss";

class CurrentWeather extends React.Component {
    render() {
        const temperature = Math.floor(this.props.current.temp);
        const description = this.props.current.weather[0].description;
        const image = {
            url: `http://openweathermap.org/img/wn/${this.props.current.weather[0].icon}@4x.png`,
            alt: `Image of  ${this.props.current.weather[0].description}`,
        };
        const feelsLike = Math.floor(this.props.current.feels_like);

        return (
            <div className="current-weather">
                <div className="current-weather__main-content">
                    <div>
                        <span className="current-weather__temperature">
                            {temperature}
                            <span className="current-weather__degree">°F</span>
                        </span>
                        <p className="current-weather__description">{description}</p>
                    </div>

                    <img width="150" src={image.url} alt={image.alt} />
                </div>

                <div>
                    <p id="moment">{moment(this.props.dt_txt).format('lll')}</p>
                    <p className="current-weather__feels-like">Feels like {feelsLike}°F</p>

                </div>
            </div>
        );
    }
}

export default CurrentWeather;