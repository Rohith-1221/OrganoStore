import { Box, Card,TextField, Typography,Button,CardMedia } from '@mui/material'
import React,{useState} from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'

const Contact = () => {
    const [name,setName]=useState('')
    const [phoneoremail,setPhem]=useState('')
    const [message,setMessage]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post('http://localhost:3003/customers',{name,phoneoremail,message})
            console.log(response.data)
            setName('')
            setPhem('')
            setMessage('')
            alert('successfully submitted')
        }catch(err){
            console.log('error in submit')
        }
    }
    
  return (
    <>
    <div className='p-4 contactpage'>
        <h2 className='text-center text-white chead'>
            EXPLORE..! GET IN TOUCH WITH US
        </h2>
        <Box className='mapbox'> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121872.48002026287!2d78.15782829726562!3d17.3389345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b386798cd3b%3A0x8f659b7c78219d11!2sOrgano%20Farm%20Store!5e0!3m2!1sen!2sin!4v1712210739335!5m2!1sen!2sin"   className='maps' loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
        </Box>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-4'>

            <Card className='ccard p-3 text-center bg-inherit'>
                <CardMedia
                    sx={{ height: 160,border:'1px solid black' }}
                    image="Images/Logo.png"
                    title="logo"
                /><br/>
                <Typography variant='p' className='text-slate-600'>
                We support dedicated farmers who cultivate with love and passion. Choosing Organo Farm Store directly supports these farmers livelihoods.
                </Typography><br/>
                <a href='https://www.instagram.com/organo_farm_store/'> <InstagramIcon sx={{fontSize:'40px'}} className='text-rose-700'/> </a>
                <a href='https://www.facebook.com/people/Organo-Farm-Store/100069416213685/'> <FacebookIcon sx={{fontSize:'40px'}} className='text-sky-600'/> </a>
                <a href='https://www.linkedin.com/in/organo-farmstore-aaba6b16a/'> <LinkedInIcon sx={{fontSize:'40px'}} className='text-blue-800'/> </a>
            </Card>

            <Card className='ccard p-3 text-center bg-inherit'>
                <Typography variant='h5' className='text-blue-700'>
                    EXPLORE
                </Typography><br/>
                <Typography variant='h6' className='text-slate-600' component={Link} to='/Home'><HomeIcon/>Home</Typography><br/><br/>
                <Typography variant='h6' className='text-slate-600' component={Link} to='/Blog'><PhoneIphoneIcon/>Blog</Typography><br/><br/>
                <Typography variant='h6' className='text-slate-600' component={Link} to='/Products'><AddBusinessRoundedIcon/>Shop</Typography><br/><br/>
                <Typography variant='h6' className='text-slate-600' component={Link} to='/Contact'><PhoneInTalkIcon/>Contact</Typography><br/><br/>
                <Typography variant='h6' className='text-slate-600' component={Link} to='/Cart'><AddShoppingCartIcon/>Cart</Typography><br/>
            </Card>

            <Card className='ccard p-3 text-center'>
                <Typography variant='h5' className='text-blue-700'>
                    GET IN TOUCH
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="NAME" className='bg-gray-100' value={name} onChange={(e)=>setName(e.target.value)} variant="outlined"  margin='normal'/><br/>
                    <TextField label="PHONE/EMAIL" className='bg-gray-100 ' value={phoneoremail} onChange={(e)=>setPhem(e.target.value)} variant="outlined" margin='normal'/><br/>
                    <TextField label="MESSAGE" className='bg-gray-100' value={message} onChange={(e)=>setMessage(e.target.value)} variant="outlined" margin='normal'/><br/>
                    <Button type='submit'  variant='contained' color='success' sx={{margin:'10px'}}>SUBMIT</Button>    
                </form>         
            </Card>

            <Card className='ccard p-3 text-center '>
              <Typography variant='h5' className='text-blue-700'>
                    SUPPORT CONTACT
              </Typography><br/>
              <Typography variant='h6' className='text-slate-600'>
                <PhoneInTalkIcon/>
                    Phone
              </Typography>
                <Typography variant='p' className='text-slate-500'>
                    Mobile:(+91)9874561230<br/>
                    Mobile:(+91)8745612308
                </Typography>
                <Typography variant='h6' className='text-slate-600'>
                <EmailIcon/>
                    Email
                </Typography>
                <Typography variant='p' className='text-slate-500'>
                    organi@info.com<br/>
                    organo2024@gmail.com
                </Typography>
                <Typography variant='h6' className='text-slate-600'>
                <LocationOnIcon/>
                    Location
                </Typography>
                <Typography variant='p' className='text-slate-500'>
                    Moinabad Road<br/>
                    Himayatnagar<br/>
                    Telangana,500075.
                </Typography>
            </Card>
            
        </div>
    </div>
    <div className='cright bg-slate-900 p-2 text-center text-slate-200'>
        <Typography variant='h5'>
            All Rights Reserved | Copyrighted by ©2024 ROHITH
        </Typography>
    </div>
    </>
  )
}

export default Contact
