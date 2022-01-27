import axios from "axios";

export default async function LoginHelper(email, password) {

    const res = await axios.get('https://pacific-taiga-17233.herokuapp.com/api/users', {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        auth: {
            email: email,
            password: password
        }
    });
    console.log(res); // 200
  
}
