import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileHelper() {

    let email = localStorage.getItem('email')
    console.log(email)

    const[users, setUsers] = useState([])

    useEffect(()=> {
       try{
        async function getUsers(){
            const res= await axios.get('https://pacific-taiga-17233.herokuapp.com/api/users/')       
              setUsers(res.data); 
               console.log(res)      
          }
          getUsers();
          
        }catch(error){
         throw error.message   
        }


    },[])

    console.log(users)

    

    if(users.length > 0){
    const findId = users.filter(user => user.email === email)   
    const val =  findId[0].id               
    console.log(findId[0].id)
    localStorage.setItem('id',val )
    }

    let filteredId = localStorage.getItem('id')
     
   async function getResp(){
    const resp= await axios.get(`https://pacific-taiga-17233.herokuapp.com/api/favorites/${filteredId}`); 
    const result = resp.data
    console.log(resp)
    console.log(result)
    // localStorage.setItem('zipcode',result[0].zipCode) 
    const zip = result[0].zipCode
} 
   getResp();

   const zipResult = localStorage.getItem('zipcode')
   console.log(zipResult)

  return <div></div>; 
}
