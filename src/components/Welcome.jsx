// Welcome.jsx
import React, { useContext } from 'react';
import Login from './login';
import UserContext from '../Context/UserContext';
import './login.css'

function Welcome({ username, password }) {

  const {user, people, isLoggedIn, setIsLoggedIn}= useContext(UserContext);

  const handleLogout=()=>{
    if(isLoggedIn){
      
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true);
    }
  }

  if(isLoggedIn){
    return (
      <div className='container'>
        <h4 className='h2color'>Hi {username}</h4>
        <h4>Your password is : {password}</h4>
        <button className='btn' onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  else{
    return(
      <Login username={username} password={password} />
    )
  }
}

export default Welcome;
