import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "../../index.css"

//conditional rendering 
export default function SearchCard(
    { weatherData }) {

    // console.log(props)
    const info = weatherData;
    console.log(info)


    let picture = null;
    if (typeof weatherData.main != "undefined") {
        if (weatherData.weather[0].main === "Clouds") {
            picture = "fa-cloud"
        } else if (weatherData.weather[0].main === "Clear") {
            picture = "fa-sun"
        } else if (weatherData.weather[0].main === "Thunderstorm") {
            picture = "fa-bolt"
        } else if (weatherData.weather[0].main === "Drizzle") {
            picture = "fa-cloud-rain"
        } else if (weatherData.weather[0].main === "Rain") {
            picture = "fa-cloud-shower-heavy"
        } else if (weatherData.weather[0].main === "snow") {
            picture = "fa-snow-flake"
        } else {
            picture = "fa-smog"
        }
    } else {
        return (
            <div className='loading'>...Where do you want to go?</div>
        )
    }


    return (


        <div className='searchCard' >
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div class="card bg-dark text-white text-center border-0">
                            <div class="card bg-dark text-white">
                                <img class="card-img" src="http://source.unsplash.com/900x1500/?nature,weather" alt="card-image" />
                                <div class="card-img-overlay">
                                    <div className="bg-dark bg-opacity-50 py-3">
                                        {info && <h2 className="card-title">
                                            {info.name}
                                        </h2>}
                                        <p>{moment(weatherData.dt_txt).format('LLL')}</p>
                                        <hr />
                                        {info.main && <i className={`fas ${picture} fa-6x mb-3`}></i>}
                                        {info.main && <h1 className='fw-bolder mb-5'>
                                            {Math.floor(info.main.temp)}
                                            &deg;F
                                        </h1>}
                                        {info.main && <h3>Feels like : {Math.floor(info.main.feels_like)}&deg;F</h3>}
                                        {info.main && <p className='lead fw-border mb-2'> {info.weather[0].description}</p>}
                                        {info.main && <div className="sunrise-set">
                                            <div className="weather-card-child">
                                                <b>Sunrise</b>: {new Date(info.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                                            </div>
                                            <div className="weather-card-child">
                                                <b>Sunset</b>: {new Date(info.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}



