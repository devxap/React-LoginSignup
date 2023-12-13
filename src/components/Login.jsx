import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';
import Welcome from './Welcome';
import './login.css';

function Login() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const { user, people, isLoggedIn, setIsLoggedIn } = useContext(UserContext);


  // const windowOpen=()=>{
  //     const content=(<div><h1>Hello Ji</h1></div>)
  //     const newWindow=window.open('', '_blank');
  //     newWindow.document.write('<html><head><title>New Window</title></head><body>');
  //     newWindow.document.write(ReactDOMServer.renderToString(content));
  //     newWindow.document.write('</body></html>');
  //     newWindow.document.close();
  // }
 
  const handleLogin = () => {
    const userExists = people.some((person) => (person.username === name)&&(person.password === pass));
    if (userExists) {
      setIsLoggedIn(true);
      
    } else {
      const passExists = people.some((person) => (person.username === name)&&(person.password!=pass));
      if(passExists){
        alert('Wrong password, please enter the correct password to continue!');
      }
      else{
        alert('You have not signed up yet, please sign up first to continue!')
        setIsLoggedIn(false);  
      }
    }
  };

  if (isLoggedIn) {
    return (
      // {windowOpen}
      <Welcome username={name} password={pass}/>
    );
  } else {
    return (
      <div className='container'>
        <h2 className='h2color'>Login</h2>
        <input
          type="text"
          className='username'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          className='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button className='btn' onClick={handleLogin}>Login</button>
        {/* Other content for logged-out state */}
      </div>
    );
  }
}

export default Login;
