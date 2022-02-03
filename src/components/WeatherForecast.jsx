import React, { useState, useEffect } from "react";

import Header from "./landing/Header";
import WeatherAndForecast from "./landing/WeatherAndForecast";
import Loader from "./landing/Loader";
import Warning from "./landing/Warning";

import getCoordinatesOfAddress from "../api/forwardGeocoding";
import getAddressOfCoordinates from "../api/reverseGeocoding";
import getWeatherAndForecast from "../api/weatherAPI";

import "../styles/WeatherForecast.css";

function WeatherForecast() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const [contentState, setContentState] = useState("blank");

  function searchCity(target) {
    setAddress(target);
  }

  function showWarning() {
    setContentState("warning");
    setTimeout(() => setContentState("blank"), 3000);
  }

  useEffect(() => {
    function makeRequest(position) {
      setContentState("loading");
      getAddressOfCoordinates(
        position.coords.latitude,
        position.coords.longitude
      )
        .then((res) => {
          setLocationInfo({
            city: res.data.results[0].components.city_district,
            town: res.data.results[0].components.town,
            state: res.data.results[0].components.state_code,
            country: res.data.results[0].components.country_code
          });
        })
        .then(() =>
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        )
        .catch((error) => showWarning());
    }

    function catchError(err) {
      alert("ERROR(" + err.code + "): " + err.message);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(makeRequest, catchError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (address === "") return;

    setContentState("loading");
    getCoordinatesOfAddress(address)
      .then((res) => {
        if (
          res.data.results.length === 0 ||
          (res.data.results[0].components.city === undefined &&
            res.data.results[0].components.town === undefined)
        ) {
          showWarning();
          return;
        }

        setCoordinates(res.data.results[0].geometry);
        setLocationInfo({
          city: res.data.results[0].components.city,
          town: res.data.results[0].components.town,
          state: res.data.results[0].components.state_code,
          country: res.data.results[0].components.country_code
        });
      })
      .catch((error) => showWarning());
  }, [address]);

  useEffect(() => {
    if (Object.keys(coordinates).length === 0) return;

    getWeatherAndForecast(coordinates)
      .then((res) => {
        setWeatherAndForecastInfo(res.data);
        setContentState("weatherAndForecast");
      })
      .catch((error) => showWarning());
  }, [coordinates]);

  const Main = {
    blank: () => null,
    loading: () => <Loader />,
    warning: () => <Warning />,
    weatherAndForecast: () => (
      <WeatherAndForecast
        weatherInfo={weatherAndForecastInfo}
        location={locationInfo}
      />
    )
  };

  return (
    <div>
      <div className="containerel">
        <>
          <Header searchCity={searchCity} />
          {Main[contentState]()}
        </>
        <hr></hr>

      </div>
    </div>
  );
}

export default WeatherForecast;