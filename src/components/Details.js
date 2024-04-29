import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Card, CardMedia, Typography } from '@mui/material';
import './style.css'

const Details = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const [pincode,setPincode]=useState('')
    const [town,setTown]=useState('')
    const [state,setState]=useState('')
    const navigate=useNavigate()
        

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post('http://localhost:3003/userinfo',{name,email,gender,pincode,town,state})
            console.log(response.data)
            setName('')
            setEmail('')
            setGender('')
            setPincode('')
            setTown('')
            setState('')
            alert('Submitted Successfully....')
            // navigate('/login')
        }catch(err){
            console.log('Error in submitting the details.')
        }
    }

  return (
    <div className='userinfo grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
    <Box className='text-center  bg-slate-800/30 p-4'>
        <Typography variant='h4'className='text-7xl text-white text-center text-current'>
            USER DETAILS
        </Typography>
        <form onSubmit={handleSubmit} className='text-center'>
            <TextField label="NAME" className='bg-gray-200 rounded' variant="filled"  value={name} onChange={(e)=>setName(e.target.value)} sx={{width:'60%'}} margin='normal'/><br/>
            <TextField label="EMAIL" className='bg-gray-200 rounded' variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{width:'60%'}} margin='normal' /><br/>
            <TextField label="GENDER" className='bg-gray-200 rounded' variant="filled" value={gender} onChange={(e)=>setGender(e.target.value)} sx={{width:'60%'}} margin='normal' /><br/>
            <TextField label="PINCODE" className='bg-gray-200 rounded' variant="filled" value={pincode} onChange={(e)=>setPincode(e.target.value)} sx={{width:'60%'}} margin='normal' /><br/>
            <TextField label="TOWN" className='bg-gray-200 rounded' variant="filled" value={town} onChange={(e)=>setTown(e.target.value)} sx={{width:'60%'}} margin='normal' /><br/>
            <TextField label="STATE" className='bg-gray-200 rounded' variant="filled" value={state} onChange={(e)=>setState(e.target.value)} sx={{width:'60%'}} margin='normal' /><br/>
            <Button type='submit' variant='contained' color='error' sx={{margin:'10px'}}>SUBMIT</Button><br/>           
        </form>
    </Box>
    <Box className='text-center  bg-slate-800/30 p-4 features'>
        {/* <div className='mainblock'> */}
            <Box className='thecard'>
                <div className='thefront'>
                    <img src='Images/allcateg.jpg' alt='fruits'/>
                </div>
                <div className='theback'>
                    <Typography variant='h5' className='text-green-900'>Elevate Your Well-Being: Savor the Purity of Our Locally Sourced Delights:</Typography>
                    <Typography variant='h6' className='text-blue-600'>
                        At Our Store, we take pride in offering a comprehensive range of premium natural products, ensuring not only quality but also the absolute safety of every morsel that graces your plate. Our journey is your guarantee of safe and witnessed foods that prioritize your well-being and the well-being of the planet. 
                        Explore our product range and experience the true essence of farm-fresh, pure, and wholesome sustenance.
                    </Typography>
                    <Button onClick={()=>navigate('/Products')} variant='contained' color='success' sx={{margin:'20px'}}>Shop more</Button>                    
                </div>
            </Box>
        {/* </div> */}
    </Box>
    </div>
  )
}

export default Details
