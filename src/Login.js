import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    
    const loginToApp = (e) => {
        e.preventDefault();
        // auth
    };

    const register = () => {
        
    };

  return (
    <div className="login">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-512.png" alt="" />

        <form>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />
            <input type="text" placeholder="Profile pic URL (optional)" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member?{" "}
            <span className="login__register" onClick={register}>
                Register Now
            </span>
        </p>
    </div>
  )
}

export default Login