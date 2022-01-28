import React from "react";
import "./App.css";

import CurrentWeather from "./components/current-weather";
import Forecast from "./components/forecast";
import "./index.css"
import * as Api from "./api/weatherAPI";

const FARENHEIT = "farehnheit";

class ForecastHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "New York",
            metric: FARENHEIT,
            hourlyForecast: [],
            current: "",
        };

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.updateTemperature = this.updateTemperature.bind(this);

        this.updateTemperature();
    }

    handleLocationChange(location) {
        this.setState({ location });
    }

    async updateTemperature() {
        const weatherRes = await Api.getWeatherBasedOnLocation(this.state.location);
        const forecastRes = await Api.getForecast(
            weatherRes.coord.lat,
            weatherRes.coord.lon
        );

        this.setState({
            current: forecastRes.current,
            metric: FARENHEIT,
            hourlyForecast: forecastRes.hourly,
        });
    }

    render() {
        const location = this.state.location;
        const hourlyForecast = this.state.hourlyForecast;
        const current = this.state.current;

        return (
            <div className="homeforecast">
                <div className="App-header">
                    {<h1>{this.state.location}</h1>}
                    {current && <CurrentWeather current={current} />}
                    {hourlyForecast.length > 0 && <Forecast forecast={hourlyForecast} />}
                </div>
            </div>
        );
    }
}

export default ForecastHome;