import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCard from '../card/SearchCard';

export default function Form() {
  
    const [zipcode, setZipcode] =useState('10001');
    const [weatherData, setWeatherData] = useState({})
    const [weatherData2, setWeatherData2] = useState([])

    let flag = true;

    console.log(zipcode)
    console.log(weatherData)

    // how to call data when you enter the page automatically?
    // On load, weatherData in SearchCard is undefiend =>  shows Cannot read properties of undefined (reading 'temp')
    
    useEffect(()=>{
        const firstFetch = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`);
        
        if(flag){
            setWeatherData2(await response.json());
            console.log(weatherData2)
        }
        return () => {
            flag = false;
        }
        };

        firstFetch();
    },[])

    const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'

    const handleSubmit = async e => {
        e.preventDefault();
        const results = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`)
        
        setWeatherData(results.data);  
      
    }; 

    // forcast 16 days
    // api.openweathermap.org/data/2.5/forecast/daily?zip=94040,us&appid={API key}

  
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                aria-label='location'
                type='text'
                className='search-form'
                placeholder='Search for location'
                requried ="true"
                value={zipcode}
                onChange={e => setZipcode(e.target.value)} />
            <div className='d-flex justify-content-end'></div>
             <button type="button" className='btn btn-primary btn-sm' onClick={handleSubmit} >
                 Search
             </button>
             
        </form>
            <SearchCard weatherData={weatherData} setWeatherData={setWeatherData}/>
        </div>
       
    
      );
}
