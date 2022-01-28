import axios from "axios";

export default async function RegistrationHelper(firstName, lastName, email, password, zipCode) {

    let locationExist = false;
    const apiKey = '9d5b71c06e78dc59f8f6f2102a0bf72b'
    // this creates a user inside the database
    const user = await axios.post('https://pacific-taiga-17233.herokuapp.com/api/users', {
        // Axios looks for the auth option, and, if it is set, formats a
        // basic auth header for you automatically.

        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });

    const location = await axios.get(`https://pacific-taiga-17233.herokuapp.com/api/locations/${zipCode}`);
    console.log(location);
    const info = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`)
    let city = info.data.name;
    console.log(city)
    console.log(location.data.id)
    if (location.data.id > 0) {
        locationExist = true;
    }

    if (!locationExist) {
        const newLocation = await axios.post(`https://pacific-taiga-17233.herokuapp.com/api/locations/`, {
            zipCode: zipCode,
            city: city,
            states: "",
        });
        console.log(newLocation)
    }

    const favLoc = await axios.post(`https://pacific-taiga-17233.herokuapp.com/api/favorites/`, {

        userId: user.data.id,
        locationId: location.data.id,
        zipCode: zipCode

    });
    console.log(favLoc)
}



//     const auth = (firstName, lastName, email, password) => async dispatch => {



//     let res;
//     try {
//       res = await axios.post(`https://pacific-taiga-17233.herokuapp.com/api/users`, { firstName, lastName, email, password }, { withCredentials: true });
//     }
//     catch (authError) {
//       return dispatch(getUser({ error: authError }));
//     }

//     try {
//       dispatch(getUser(res.data));
//     }
//     catch (dispatchOrHistoryErr) {
//       console.error(dispatchOrHistoryErr);
//     }
//   };

//   const reducer = (state = {}, action) => {

//         return true;

//   }

//   export default reducer;



