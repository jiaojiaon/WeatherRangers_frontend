import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCard from '../card/SearchCard';

export default function Form() {
  
    const [zipcode, setZipcode] =useState('');
    const [weatherData, setWeatherData] = useState({})
    const [weatherData2, setWeatherData2] = useState([])

    let flag = true;

    console.log(zipcode)
    console.log(weatherData)

    
    useEffect(() => {
        const firstFetch = async () => {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`);

            if (flag) {
                setWeatherData2(await response.json());
                console.log(weatherData2)
            }
            return () => {
                flag = false;
            }
        };

        firstFetch();
    }, [])


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
                placeholder='Search by Zipcode'
                requried ="true"
                value={zipcode}
                onChange={e => setZipcode(e.target.value)} />
            <div className='justify-content-end'></div>
             <button type="button" className='btn btn-primary btn-sm' onClick={handleSubmit} >
                 <i className='fas fa-search'></i>
             </button>
             </div>  
        </form>
            <SearchCard weatherData={weatherData} setWeatherData={setWeatherData}/>
               
        </div>
       
    
      );
}
