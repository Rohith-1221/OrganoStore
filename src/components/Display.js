import React from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './style.css'

const Display = () => {
    const navigate=useNavigate()
    
    const handleLogin=()=>{
       navigate('/login')
    }
    const handleRegister=()=>{
        navigate('/register')
    }
        

  return (
    <div className='displaypage'>
    <Box className='text-center' sx={{marginTop:'200px'}}>
        <Typography variant='h1' className='text-7xl text-center text-slate-200 font-sans hover:font-serif'>
            ORGANO
        </Typography>
        <Typography variant='h3' className='text-7xl text-center text-slate-200'>
            Organic Store..!
        </Typography>
        <Button type='submit' variant='contained' color='error' sx={{margin:'10px'}} onClick={handleLogin}>LOGIN WITH EMAIL</Button><br/> 
        <Typography variant='h4' className='text-7xl text-center text-slate-200'>
            OR
        </Typography>
        <Button type='submit' variant='contained' color='primary' sx={{margin:'10px'}} onClick={handleRegister}>SIGN UP or REGISTER</Button><br/>  
    </Box>
    </div>
  )
}

export default Display
