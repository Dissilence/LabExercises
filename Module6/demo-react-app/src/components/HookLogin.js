import React from 'react';
import {Hello} from '../components/Hello';

function HookLogin() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')    
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username + ' ' + password)

        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)

        if (!isLoggedIn) { 
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrMsg('Maximum login attempts exceeded. You are blocked.'); 
            }
            else {
                setErrMsg('Unsuccessful login attempt #'+newAttempts+' of 5'); 
            }
            setLoginAttempts(newAttempts)
        }

        setLoggedIn( isLoggedIn )
    }

    const handleInputChange = (event) => {
        const target = event.target;
        console.log(target)

        if (target.name === 'username') {
            setUsername(target.value)
        }
    
        if (target.name === 'password') {
            setPassword(target.value)
        }
    }   

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? <Hello name={username}/> : 'Please log in'}</div>

            {!loggedIn && loginAttempts < 5 &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Hook Username: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="username" value={username} name="username" onChange={ (e) => setUsername(e.target.value) }/>
                    </div>

                    {/* add another form field for email address */}
                    <div className="formRow">
                        <label htmlFor="email">Hook Email: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="email" value={email} name="email" type="email" onChange={ (e) => setEmail(e.target.value) }/>
                    </div>                    

                    <div className="formRow">
                        <label htmlFor="password">Hook Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input type="password" id="password" name="password" value={password} onChange={ handleInputChange } />
                    </div>

                    <button>Login</button>
                </form>
            }
            <p>{errMsg}</p>

        </div>
    );    
}

export default HookLogin