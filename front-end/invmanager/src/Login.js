import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import { InvGlobal } from './App';
import { Alert } from 'bootstrap';


const Login = (details) => {

    const [ currentUser, setUserInfo ] = useContext(InvGlobal);
    const [ error, setError ] = useContext(InvGlobal);

    //Authenticate Login and password from db

    if (details.UserName == 'Rick' && details.password == 'password1') {
        //Success Alert
    } else {
        //failed Alert
    }

return (

    <div className='Login'>
        {(currentUser.UserName != "") ? (
            <div className="welcome">
            <h2>Welcome, <span>{currentUser.UserName}</span></h2>
            </div>
        ) : (
            <LoginForm Login={Login} error={error}/>
        )}

    </div>

    
)
}

export default Login;