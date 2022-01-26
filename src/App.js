import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Search/Form';
import SearchCard from './components/card/SearchCard';



function App() {
  
  return (
    
    <div className="App">
      <NavBar />
      <div>
        Welcome
        <Form />
        <SearchCard />
      </div>
    </div>
  );
}

export default App;
