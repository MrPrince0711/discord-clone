import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch();
    }
  return (
    <div className='login'>
        <div className="login_logo">
            <img src="https://www.cdnlogo.com/logos/d/84/discord.svg" alt="logo" />
        </div>

        <Button onClick = {signIn} >Sign IN</Button>
    </div>
  )
}

export default Login