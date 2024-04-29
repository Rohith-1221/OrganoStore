import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmpassword]=useState('')
    const navigate=useNavigate()
        

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post('http://localhost:3003/user/register',{name,email,password,confirmpassword})
            console.log(response.data)
            setName('')
            setEmail('')
            setPassword('')
            setConfirmpassword('')
            alert('successfully registered')
            handleLogin()
        }catch(err){
            console.log('email registered already')
        }
    }
    const handleLogin=()=>{
        navigate('/login')
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 regform'>
    <Box sx={{margin:'230px 0px'}}>
        <Typography variant='h2' className='text-7xl text-center text-slate-200 font-sans hover:font-serif'>
            ORGANO
        </Typography>
    </Box>
    <Box className='text-center' sx={{margin:'70px 0px'}}>
        <Typography variant='h4'className='text-7xl text-center text-white'>
            SIGN UP<br/> or<br/> REGISTRATION
        </Typography>
        <form onSubmit={handleSubmit} className='text-center'>
            <TextField label="NAME" className='bg-gray-200 register' variant="filled"  value={name} onChange={(e)=>setName(e.target.value)} margin='normal'required/><br/>
            <TextField label="EMAIL" className='bg-gray-200 register' variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)} margin='normal' required/><br/>
            <TextField type='password' className='bg-gray-200 register' label="PASSWORD" variant="filled"  value={password} onChange={(e)=>setPassword(e.target.value)} margin='normal' required/><br/>
            <TextField type='password' className='bg-gray-200 register' label="CONFIRM PASSWORD" variant="filled"   value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} margin='normal' required/><br/>
            <Button type='submit' variant='contained' color='primary' sx={{margin:'10px'}}>REGISTER</Button><br/>
            <Typography variant='p' className='text-slate-200'>
                Already have an account ?
            </Typography><br/>
            <Button  variant='contained' color='error' sx={{margin:'10px'}} onClick={handleLogin}>LOGIN</Button>             
        </form>
    </Box>
    </div>
  )
}

export default Register
