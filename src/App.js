import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaveRequest from './components/LeaveRequest';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/aboutus' element={<AboutUs />} />
              <Route exact path='/leaverequest' element={<LeaveRequest />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
