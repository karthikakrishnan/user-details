import React, { useState } from 'react'

import { createBrowserHistory as history} from 'history';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'


const Login = () => {
    const [login, setLogin] = useState({userName: '', password: ''})
    
    const handleInputChange = (event) => {
      const { name, value } = event.target
      console.log(event)
      setLogin((prevProps) => ({
        ...prevProps,
        [name]: value
      })
    )
    }

    const loginUser = () => {
        console.log('submit', login)
        history.push('./user')
    }
    return(
    <form onSubmit={loginUser}>
     <div className="App">
      <header className="App-header">
        <TextField
          id='userName'
          name='userName'
          placeholder='User name'
          value={login.userName}
    onChange={handleInputChange}
        />
        <TextField
          type="password"
          name='password'
          id='password'
          placeholder='password'
          value={login.password}
          onChange={handleInputChange}
        />
        <Button primary type='submit'>Login</Button>
      </header>
    </div>
    </form>

)
    }

export default Login