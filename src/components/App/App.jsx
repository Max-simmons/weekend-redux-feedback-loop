import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
      <Router>
    
      <Route exact path = '/'>
      <FeelingPage/>
      </Route>

      <Route exact path = '/understanding'>
      {/* <Understanding/> */}
      </Route>

      <Route exact path = '/support'>
      {/* <Support/> */}
      </Route>

      <Route exact path = '/comments'>
      {/* <Comments/> */}
      </Route>

      <Route exact path = '/review'>
      {/* <Review/> */}
      </Route>

      <Route exact path = '/thankyou'>
      {/* <ThankYou/> */}
      </Route>

      </Router>
    </div>
  );
}

export default App;
