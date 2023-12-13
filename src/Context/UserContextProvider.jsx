import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState('');
    const [people, setPeople] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <UserContext.Provider value={{user,setUser, people, setPeople, isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;