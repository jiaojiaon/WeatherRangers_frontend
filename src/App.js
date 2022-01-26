import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Search/Form';
import SearchCard from './components/card/SearchCard';




function App() {
  
  return (
    
    <body className="App">
      <NavBar />
      <div>
        <Form />
        {/* <SearchCard /> */}
      </div>
    </body>
  );
}

export default App;
