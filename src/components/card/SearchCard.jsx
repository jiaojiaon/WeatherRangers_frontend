import React, { useEffect, useState } from 'react';
import Form from '../Search/Form';

const SearchCard = (props) => {

    const [search, setSearch] =useState("new york");
    const [weatherData, setWeatherData] = useState(null)
    const[input, setInput] = useState('');
    const [error, setError] = useState(false)

    // let componentMounted = true;
    console.log(props.zipcode)

    // useEffect(() =>{
    //         const fetchWeather = async () => {
    //             const response = await fetch(`https//api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d5b71c06e78dc59f8f6f2102a0bf72b
    //         `);
    //         if(componentMounted){
    //             setData(await response.json());
    //             console.log(data)
    //         }
    //         return () => {
    //             componentMounted = false;
    //         }
    //     }
    //     fetchWeather();
    // },[])
    const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'

    useEffect(async () => {
        await fetchData()
      }, [error])
    
      const fetchData = async () => {
        try {
          const res = await fetch(`api.openweathermap.org/data/2.5/weather?zip=${props.zipcode}&appid=${apiKey}`);
          if (!res.ok) {
            setError(true)
          } else {
            const obj = await res.json()
            setError(false)
            setWeatherData(obj)
            console.log(weatherData)
          }
        } catch (error) {
          console.log(error)
        }
      }




    return (
        <div className='searchCard'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card bg-dark text-white text-center border-0">
                            <div class="card bg-dark text-white">
                                <img class="card-img" src="http://source.unsplash.com/1600x900/?nature,water" alt="card-image" />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text">Last updated 3 mins ago</p>
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

