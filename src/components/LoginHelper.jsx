import axios from "axios";
import { useState } from "react"
import qs from 'qs'
export default async function LoginHelper(email, password) {
    // { withCredentials: true, crossDomain:true }
    console.log(email)
    console.log(password)
    let id = -1;
    try{
    const res = await axios.post(`https://pacific-taiga-17233.herokuapp.com/api/users/auth`,
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        {
            data:
            {
                email: email,
                password: password

            }


        });
        console.log(res); // 200
        console.log(res.status);
        if(res.status === 200) {
            id = res.data.id
        }
        // return id;
    }catch(error)
    {
        throw error.message;
    }
    return id;
}
