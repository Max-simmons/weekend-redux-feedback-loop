import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import AdminPage from '../AdminPage/AdminPage'
import Header from '../Header/Header';

function App() {

  useEffect(() => {

  }, [])

  return (
    <Router>
    <div className='App'>
      {/* <Header /> */}
      {/* <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      
      <p><Link to='/admin'>Admin</Link></p>
      
      </header> */}
      <Route exact path = '/admin'>
      <AdminPage/>
      </Route>

      <Route exact path = '/'>
      <FeelingPage/>
      </Route>

      <Route exact path = '/understanding'>
      <UnderstandingPage/>
      </Route>

      <Route exact path = '/support'>
      <SupportPage/>
      </Route>

      <Route exact path = '/comments'>
      <CommentsPage/>
      </Route>

      <Route exact path = '/review'>
      <ReviewPage/>
      </Route>

      <Route exact path = '/thankyou'>
      <ThankYouPage/>
      </Route>

      
    </div>
    </Router>
  );
}

export default App;
