import axios from "axios";


export default async function LoginHelper(email, password) {
    console.log("LoginHelper")
    const res = await axios.post('https://pacific-taiga-17233.herokuapp.com/api/users/auth', {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        data: {
            email: email,
            password: password
        }
    });
    console.log(res); // 200
    // console.log(data); // 200
    if(res.status === 200) {
        const data = await res.json()
        return data.id
    }
    return -1;

  
}
