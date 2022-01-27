import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Should be passed down the user id from login page when 
//authentication is succeed.
export default function Profile() {

  const userId = 1;

  const[userData, setUserData] = useState([])

  useEffect(() => {
    async function getFavorites(){
       await axios.get('https://pacific-taiga-17233.herokuapp.com/api/favorites')
      .then(function (response) {
        console.log(response.data)
        setUserData(response.data);  
      })
    }  
    getFavorites();
  },[])
  console.log(userData) 
  
  //checking if the data is comming
  // favorites/userId only comes with 1 result. => get/1 need to be reconsidered 

  // const r = userData.filter(d=>d.userId.every(c => userId.includes(c.userId)));
  // console.log(r);

  // const r = userData.data.filter(d=>d.userId.every(c => userId.includes(c.userId)));
  // console.log(userData.data)
  // const userInfo = 
 
  //   const userInfo = [...userData]
  //  const filteredFav = userInfo.filter(uData => {
  //    return uData.userId.includes(userId)
  //  })

  function filterByID(item) {
    if(item.userId === 1){
      return true;
    }
    return false;
  }

  let filterR = userData.filter(filterByID)

  console.log(filterR)

  // userData =userData.filter(userId => userData.userId === '1').map(filteredData => (
  //    filteredData.zipCode
  // ))
        

  // console.log(userData)
  // //   });


  return(
    <div></div>
  )  
}
