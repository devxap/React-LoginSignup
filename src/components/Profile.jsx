import React, { useContext } from 'react';
import UserContext from '../Context/UserContext'; 

function Profile() {

    const { user, people } = useContext(UserContext);

    if(!user) return <div>Please Login</div>

    return(
        <>
        <div>
            <h1>Congratulations 🎉 {user.username}</h1>
            <div>
            </div>
        </div>
        </>
    )
}

export default Profile;