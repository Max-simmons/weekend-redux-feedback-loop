import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FeelingPage from '../FeelingPage/FeelingPage';


function App() {

  useEffect(() => {

  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    
      
      <FeelingPage/>

      {/* <Understanding/> */}

      {/* <Support/> */}

      {/* <Comments/> */}

      {/* <Review/> */}

      {/* <ThankYou/> */}


    </div>
  );
}

export default App;
