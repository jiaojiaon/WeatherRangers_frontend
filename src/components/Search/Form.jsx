import axios from 'axios';
import React, { useState } from 'react';
import SearchCard from '../card/SearchCard';

export default function Form() {
  
    const [zipcode, setZipcode] =useState('');
    const [weatherData, setWeatherData] = useState(null)

    console.log(zipcode)
    console.log(weatherData)

    const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'

    const handleSubmit = async e => {
        e.preventDefault();
        const results = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`)
        setWeatherData(results.data);
        console.log(results)
        
    }; 

  
    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label='location'
                type='text'
                className='search-form'
                placeholder='Search for location'
                requried
                value={zipcode}
                onChange={e => setZipcode(e.target.value)} />
            <div className='d-flex justify-content-end'></div>
             <button type="button" className='btn btn-primary btn-sm' onClick={handleSubmit} >
                 Search
             </button>
             <SearchCard zipcode={zipcode} />
        </form>
    
       
    
      );
}
