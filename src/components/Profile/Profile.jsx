import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage';
import ProfileHelper from './ProfileHelper';



//Should be passed down the user id from login page when 
//authentication is succeed.
export default function Profile() {
  const[userData, setUserData] = useState([
    {zipCode: 20001}
  ])

   let id = localStorage.getItem('email')
   console.log(id)
    
  const [weatherData2, setWeatherData2] = useState([])
  
  console.log(userData[0].zipCode)
  // const newZip = userData[0].zipCode 
    ProfileHelper();
    const newZip = localStorage.getItem('zipcode')

  const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'
  useEffect(() => {
    // async function getFavorites(){
    //   const res= await axios.get('https://pacific-taiga-17233.herokuapp.com/api/favorites/')       
    //     setUserData(res.data); 
    //      console.log(res)      
    // }
    // getFavorites();
  
    async function callFavorites(){        
          const results =  await axios(`https://api.openweathermap.org/data/2.5/weather?zip=${newZip}&units=imperial&appid=${apiKey}`)
          setWeatherData2(results.data);
    
      }    
    callFavorites();
  },[])

  return(
    <div>
      <ProfilePage weatherData2={weatherData2}/>
      {/* <ProfileHelper /> */}
    </div>
  )  
}
