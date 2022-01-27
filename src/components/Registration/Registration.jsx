import { useState } from 'react';
import './Registration.css';
import RegistrationHelper from '../RegistrationHelper';
import { Navigate } from 'react-router-dom'

export default function Registration(props) {
 
  const [credentials, setCredentials] = useState({
    user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
       
    },

    fav: {
      zipCode: ""
    },

    redirect: false
});
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

const handleChange = (event) => {
    const updatedUser = { ...credentials.user }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue

    setCredentials({ user: updatedUser })
}
 
const handleSubmit = (event) => {
    event.preventDefault()
    RegistrationHelper(credentials.user.firstName,credentials.user.lastName,credentials.user.email, credentials.user.password);
    setCredentials({ redirect: true })
}
if (credentials.redirect) {
    return (<Navigate to="/userProfile" />)
}
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {credentials.user.firstName} {credentials.user.lastName} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
      <>
    <div className="form">
      <div>
        <h1>Weather Rangers Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form onSubmit={handleSubmit}>
        {/* Labels and inputs for form data */}
        <label className="label" htmlFor="firstName">First Name</label>
        <input onChange={handleChange} className="input"
          value={credentials.user.firstName} type="text" name="firstName" />
          <label className="label" htmlFor="lastName">Last Name</label>
        <input onChange={handleChange} className="input"
          value={credentials.user.lastName} type="text" name="lastName" />
 
        <label className="label" htmlFor="email">Email</label>
        <input onChange={handleChange} className="input"
          value={credentials.user.email} type="email" name="email" />
 
        <label className="label" htmlFor="password">Password</label>
        <input onChange={handleChange} className="input"
          value={credentials.user.password} type="password" name="password" />
        
        <label className="label" htmlFor="zipCode">Favorite City</label>
        <input onChange={handleChange} className="input"
          placeholder='Enter zipcode only'
          value={credentials.fav.zipCode} type="text" name="zipCode" />
 
        <button onClick={handleSubmit} className="btn-regi" type="submit">
          Submit
        </button>

      </form>
    </div>
    </>
  );
}