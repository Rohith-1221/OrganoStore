import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const LoginForm = ({handleLogin}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
        
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post('http://localhost:3003/user/login',{email,password},{
                withCredentials:true
            })
            const {token} = response.data
            if(token){
                localStorage.setItem('token',token)
            }
            console.log(response.data)
            handleLogin(email)
            alert('successfully loggedin')
            navigate('/Home')
        }catch(err){
            console.log('Invalid emailid',err)
        }
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 loginform'>
        <Box sx={{margin:'250px 0px'}}>
            <Typography variant='h2' className='text-7xl text-center text-slate-200 font-sans hover:font-serif'>
                ORGANO
            </Typography>
        </Box>
        <Box className='text-center' sx={{margin:'200px 0px'}}>
            <Typography variant='h4' className='text-7xl text-center text-white'>
                LOGIN or SIGN IN
            </Typography>
            <form onSubmit={handleSubmit} className='text-center'>
                <TextField  label="EMAIL" className='bg-gray-200 login' variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)} margin='normal' required/><br/>
                <TextField type='password' className='bg-gray-200 login' label="PASSWORD" variant="filled"  value={password} onChange={(e)=>setPassword(e.target.value)} margin='normal' required/><br/>
                <Button type='submit' variant='contained' color='primary' sx={{margin:'10px'}}>LOGIN</Button><br/>
            </form>   
        </Box>
    </div>
  )
}

export default LoginForm
