import React, { useContext } from 'react';
import { InvGlobal } from './App';

function LoginForm({ Login, error}) {

    const [ currentUser, setUserInfo ] = useContext(InvGlobal);

    const submitHandler = e => {
        e.preventHandler();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* {ERROR MESSAGE HERE} */}
            <div className="form-group">
                <label htmlFor="name">UserName: </label>
                <input type="text" name="UserName" id="UserName" onChange={e => setUserInfo({...details, UserName: e.target.value})} value={details.UserName} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={e => setUserInfo({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;