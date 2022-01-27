import React, { useEffect, useState } from 'react';
// import Form from '../Search/Form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//conditional rendering 
const SearchCard = ({ weatherData }) => {

    // console.log(props)
    const info = weatherData;
    console.log(info)

   
    let picture = null;
    if( typeof weatherData.main != "undefined"){
        if(weatherData.weather[0].main ==="Clouds"){
            picture = "fa-cloud"
        }else if(weatherData.weather[0].main ==="Clear"){
            picture = "fa-sun"
        }else if(weatherData.weather[0].main ==="Thunderstorm"){
            picture = "fa-bolt"
        }else if(weatherData.weather[0].main ==="Drizzle"){
            picture = "fa-cloud-rain"
        }else if(weatherData.weather[0].main ==="Rain"){
            picture = "fa-cloud-shower-heavy"
        }else  if(weatherData.weather[0].main ==="snow"){
            picture = "fa-snow-flake"
        }else  {
            picture = "fa-smog"
        }
    }else{
        return (
            <div className='loading'>...Where do you want to go?</div>
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
       
            
            <div className='searchCard'>
                <div className='container mt-5'>
                    <div className='row justify-content-center'>   
                    {/* center */}
                        <div className='col-md-4'>
                            <div class="card bg-dark text-white text-center border-0">
                                <div class="card bg-dark text-white">
                                    <img class="card-img" src="http://source.unsplash.com/900x1500/?nature,weather" alt="card-image" />
                                    <div class="card-img-overlay">
                                        <div className="bg-dark bg-opacity-50 py-3">
                                            {info && <h1 className="card-title">
                                                {info.name}
                                                {/* " " */}
                                            </h1> }
                                            <p className="card-text">{currentDate()}</p>
                                            <hr className='mt-2'/>
                                            {info.main && <i className={`fas ${picture} fa-6x mb-3`}></i>}
                                            {info.main && <h1 className='fw-bolder mb-5'>
                                                {info.main.temp}
                                                &deg;F
                                            </h1> }
                                            {info.main && <p className='lead fw-border mb-2'> {weatherData.weather[0].main}</p> }
                                            {info.main && <p className='lead mt-4'>{info.main.temp_min} &deg;F | {info.main.temp_max} &deg;F</p> }
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

export default SearchCard;

