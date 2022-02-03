import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Search/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import Profile from './components/Profile/Profile';
import Registration from './components/Registration/Registration';
// import ForecastHome from './components/landing/ForecastHome';
import Footer from './components/Footer';
import WeatherForecast from './components/WeatherForecast';

function App() {

  return (

    <body className="App">
      <NavBar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<WeatherForecast />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Profile />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </body>
  );
}

export default App;
