import axios from "axios";

export default async function RegistrationHelper(firstName, lastName, email, password) {

    const res = await axios.post('https://pacific-taiga-17233.herokuapp.com/api/users', {
        // Axios looks for the auth option, and, if it is set, formats a
        // basic auth header for you automatically.
        auth: {
            firstName: firstName,
            lastName : lastName,
            email: email,
            password: password
        }
    });
    console.log(res); // 200

}