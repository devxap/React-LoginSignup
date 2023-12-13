import { React, useState, useContext } from 'react'
import './App.css'
import Signup from './components/Signup';
import Login from './components/login';
import Profile from './components/profile';
import Welcome from './components/Welcome';
import UserContextProvider from './Context/UserContextProvider';
import './components/login.css'

function App() {
    return (
      <div className='parent'>
              <UserContextProvider>
        <Signup />
        <Login />
        {/* <Profile /> */}
      </UserContextProvider>

      </div>
    )
  }

export default App;
