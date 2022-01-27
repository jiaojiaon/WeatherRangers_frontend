import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage';


//Should be passed down the user id from login page when 
//authentication is succeed.
export default function Profile() {
  const[userData, setUserData] = useState([
    {zipCode: 20001}
  ])
  const [weatherData2, setWeatherData2] = useState([])
  
    console.log(userData)
    // const newZip = userData[0].zipCode 
        const newZip = 10001;

  const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'
  useEffect(() => {
    async function getFavorites(){
      const res= await axios.get('https://pacific-taiga-17233.herokuapp.com/api/favorites/1')       
        setUserData(res.data); 
         console.log(res)      
    }
    getFavorites();
  
    async function callFavorites(){        
          const results =  await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${newZip}&units=imperial&appid=${apiKey}`)
          setWeatherData2(results.data);
    
      }    
    callFavorites(); 
  },[])
   
  return(
    <div>
      <ProfilePage weatherData2={weatherData2}/>
    </div>
  )  
}


