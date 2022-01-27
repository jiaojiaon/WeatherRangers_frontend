import React from "react"
import { useState } from "react"
import LoginHelper from "../LoginHelper";
import './login.css'
// import { BrowserRouter as Router } from "react-router-dom"
// send user name pw to backend => backend take info => call user info specified
// check against given info
// backend return indication
// if correct => navigate to a page
// else
import { Navigate } from 'react-router-dom'
export default function Login(props) {
    const [credentials, setCredentials] = useState({
        user: {
            email: "",
            password: ""
        },
        redirect: false
    });
    const handleChange = (event) => {
        const updatedUser = { ...credentials.user }
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue
        setCredentials({ user: updatedUser })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const id = LoginHelper(credentials.user.email, credentials.user.password).then(
            id => { if (id > 0) {
                setCredentials({...credentials, redirect: true})
                localStorage.setItem('email', credentials.user.email)
            }}
        ).catch(err => console.log(err)) ;
        // console.log(localStorage.getItem('email'))
    }
    if (credentials.redirect) {
        return (<Navigate to="/favorites" />
        )
        //maybe name as my_weather or something like that? If we have time
    }
    console.log(credentials.user.email)
    return (
        <div><br />
            <h1>Sign In</h1><br />
            <form onSubmit={handleSubmit}>
                <div className="logInfo">
                    <div>
                        <label className="label" htmlFor="email">Email:</label>
                        <input className="input"
                            type="text"
                            name="email"
                            placeholder=" Enter email..."
                            value={credentials.user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="password">Enter Password:</label>
                        <input className="input"
                            placeholder="Enter password..."
                            type="password"
                            // type="text"
                            name="password"
                            value={credentials.user.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className="btn">Log In</button>
            </form>
        </div>
    )
}






