import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCard from '../card/SearchCard';
import Profile from '../Profile/Profile'

export default function Form() {
    const [zipcode, setZipcode] = useState([]);
    const [weatherData, setWeatherData] = useState({})

    let flag = true;

    console.log(zipcode)
    console.log(weatherData)


    // let id = localStorage.getItem('email')
    // console.log(id);

    const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'

    const handleSubmit = async e => {
        e.preventDefault();
        const results = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`)

        setWeatherData(results.data);
  
    };



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className='input-group mb-4 w-50 mx-auto mt-4'>
                    <input
                        aria-label='location'
                        type='search'
                        className='form-control'
                        // className='form-control'
                        placeholder='Search by Zipcode'
                        requried="true"
                        value={zipcode}
                        onChange={e => setZipcode(e.target.value)} />
                    <div className='justify-content-end'></div>
                    <button type="button" className='button ' onClick={handleSubmit} >
                        <i className='fas fa-search'></i>
                    </button>
                </div>
            </form>

            <SearchCard weatherData={weatherData} setWeatherData={setWeatherData} />


        </div>


    );
}
