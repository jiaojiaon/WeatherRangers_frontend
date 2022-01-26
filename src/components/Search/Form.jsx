import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCard from '../card/SearchCard';

export default function Form() {
  
    const [zipcode, setZipcode] =useState('10001');
    const [weatherData, setWeatherData] = useState({})
    const [input, setInput] =useState('')

    let flag = true;

    console.log(zipcode)
    console.log(weatherData)
    // console.log(weatherData.main.temp)

    // how to call data when you enter the page automatically?
    // On load, weatherData in SearchCard is undefiend =>  shows Cannot read properties of undefined (reading 'temp')
    const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'
    useEffect(()=>{
        const firstFetch = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`);
        if(flag){
            setWeatherData( await response.json());
            console.log(weatherData)
        }
        return () => {
            flag = false;
            console.log(flag)
        }
        };

        firstFetch();
    },[zipcode])

   

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const results = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`)
        
    //     setWeatherData(results.data);  
      
    // }; 

    const handleSubmit = e => {
        e.preventDefault();
        setZipcode(input)       
      
    };

    let picture = null;
    if( typeof weatherData.main != "undefined"){
        if(weatherData.weather[0].main =="Clouds"){
            picture = "fa-cloud"
        }else if(weatherData.weather[0].main =="Clear"){
            picture = "fa-sun"
        }else if(weatherData.weather[0].main =="Thunderstorm"){
            picture = "fa-bolt"
        }else if(weatherData.weather[0].main =="Drizzle"){
            picture = "fa-cloud-rain"
        }else if(weatherData.weather[0].main =="Rain"){
            picture = "fa-cloud-shower-heavy"
        }else  if(weatherData.weather[0].main =="snow"){
            picture = "fa-snow-flake"
        }else  {
            picture = "fa-smog"
        }
    }else{
        return (
            <div>...Loading</div>
        )
    }

    

    function currentDate() {
        var myCurrentDate = new Date();
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var date = days[myCurrentDate.getDay()] +', '+  months[(myCurrentDate.getMonth())]+', ' +  myCurrentDate.getDate() +', ' + myCurrentDate.getFullYear() ;
        return (
          date
        );
      }
   
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                aria-label='location'
                type='text'
                className='search-form'
                placeholder='Search for location'
                requried ="true"
                // value={zipcode}
                value={input}
                // onChange={e => setZipcode(e.target.value)} />
                onChange={e => setInput(e.target.value)} />
            <div className='d-flex justify-content-end'></div>
             <button type="button" className='btn btn-primary btn-sm' onClick={handleSubmit} >
                 Search
             </button>
             
        </form>
            {/* <SearchCard weatherData={weatherData} setWeatherData={setWeatherData}/> */}

            <div className='searchCard'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card bg-dark text-white text-center border-0">
                            <div class="card bg-dark text-white">
                                <img class="card-img" src="http://source.unsplash.com/900x1500/?nature,water" alt="card-image" />
                                    <div class="card-img-overlay">
                                        <div className="bg-dark bg-opacity-50 py-3">
                                        <h2 className="card-title">
                                            {weatherData.name}
                                            {/* " " */}
                                            </h2>
                                        <p class="card-text">
                                            {/* Wendsday, January, 26, 2022 */}
                                            {currentDate()}
                                        </p>
                                       <hr />
                                       <i className={`fas ${picture} fa-4x`}></i>
                                       {/* <i className={`fas fa-sun fa-6x`}></i> */}
                                       <h1 className='fw-bolder mb-5'>
                                           {weatherData.main.temp}
                                           {/* {temp} */}
                                           &deg;F
                                           </h1>
                                       <p className='lead fw-border mb-0'>
                                           {weatherData.weather[0].main}                                           
                                           </p>
                                       <p className='lead'>
                                           {weatherData.main.temp_min}&deg;F |  {weatherData.main.temp_max} &deg;F
                                        </p>
                                        </div>                                       
                                    </div>
                                </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    
      );
}
