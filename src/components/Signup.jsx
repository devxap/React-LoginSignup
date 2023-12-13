import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext'; 
import './login.css'

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(false);

    const { user, setUser, people, setPeople } = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
          const isUsernameTaken= people.some((person)=> person.username==username);

          if(!isUsernameTaken && username!=""){
            setUser({ username, password });
            setPeople([...people, { username, password }]);
            alert(`Username ${username} is now registered`);
            setFlag(true);
            setUsername('');
            setPassword('');
          }
          else{
            alert('Username not available, try another');
            setFlag(false);
          }
        }
    
    return (
        <>
        <div className='container'>
            <h2 className='h2color'>Sign Up</h2>
            <input 
                type='text'
                className='username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder='username' 
            />
            <input 
                type='text'
                className='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password' 
            />
            <button className='btn' onClick={handleSubmit}>Signup</button>
        </div>
        <div className='container'>
           {  
           flag ? ( <h4>Congrats, <h2 className='h2color'>{user.username}</h2></h4>) : (<h6>This project demonstrates my understanding and implementation of following concepts : <i className='h2color'>Context API, Conditional Rendering, useState Hook, Component Division, Logic Fundamental Application</i><h2 className='h2color'>Please Register or Login</h2></h6>)
           }
        </div>
        </>
    )
    }
  
export default Signup;