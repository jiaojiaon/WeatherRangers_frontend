import React from "react"
import { useState } from "react"
import LoginHelper from "../LoginHelper";
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
        LoginHelper(credentials.user.email, credentials.user.password);
        setCredentials({ redirect: true })
    }
    if (credentials.redirect) {
        return (<Navigate to="/userProfile" />)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="logInfo">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="inputbtn"
                            type="text"
                            name="email"
                            placeholder="email..."
                            value={credentials.user.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor="password">Enter Password:</label>
                        <input
                            placeholder="password..."
                            type="password"
                            // type="text"
                            name="password"
                            value={credentials.user.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className="logbtn">Log In</button>
            </form>
        </div>
    )
}