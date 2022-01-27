import React, { useEffect, useState } from 'react';
// import Form from '../Search/Form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//conditional rendering 
const SearchCard = ({ weatherData }, { setWeatherData }) => {

    // console.log(props)
    const info = weatherData;
    console.log(info)

    console.log("test")




    return (
       
            
            <div className='searchCard'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div class="card bg-dark text-white text-center border-0">
                                <div class="card bg-dark text-white">
                                    <img class="card-img" src="http://source.unsplash.com/900x1500/?nature,weather" alt="card-image" />
                                    <div class="card-img-overlay">
                                        <div className="bg-dark bg-opacity-50 py-3">
                                            {info && <h2 className="card-title">
                                                {info.name}
                                                {/* " " */}
                                            </h2> }
                                            <p class="card-text">Wendsday,January, 26, 2022</p>
                                            <hr />
                                            <i className='fas fa-cloud fa-4x'></i>
                                            {info.main && <h1 className='fw-bolder mb-5'>
                                                {info.main.temp}
                                                &deg;F
                                            </h1> }
                                            <p className='lead fw-border mb-0'>Cloud</p>
                                            <p className='lead'>&deg;F | 35.06 &deg;C</p>
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

