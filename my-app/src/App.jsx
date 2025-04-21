import React, { useState, useEffect } from 'react';
import './App.css';
import  Header  from './components/Header';
import RestaurantContainer from './components/RestaurantContainer';







function App() {
 

  return (
    <>
     <Header/>
     
     <RestaurantContainer/>
    </>
  );
}

export default App;
