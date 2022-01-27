import axios from "axios";
import { useState } from "react"
import qs from 'qs'
export default async function LoginHelper(email, password) {
    // { withCredentials: true, crossDomain:true }
    console.log(email)
    console.log(password)
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
    }catch(error)
    {
        throw error.message;
    }

}
