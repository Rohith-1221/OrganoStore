import React from 'react'
import { Typography,Box } from '@mui/material';
import './style.css'

const Blog = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 flex p-4 blogpage'>
        <div className='p-2'>
            <img src='Images/leaf.webp' alt='about' className='img1'/>
            <img src='https://wallpaperaccess.com/full/5858786.jpg' alt='about' className='img2'/>
            <img src='Images/banner1.webp' alt='about' className='img3'/>
        </div>
        <div className='mt-4 p-2'>
            <Typography variant='h4' className='text-7xl text-slate-300 text-center'>
                welcome..!
            </Typography>         
            <Typography variant='h3' className='title text-slate-100 text-center font-sans hover:font-serif'>
                ORGANO
            </Typography>  
            <Typography variant='h5' className='text-slate-300 text-center'>
            Organic stores are more than just markets; they're gateways to a healthier lifestyle, reminding us that what we consume matters, not just for our bodies, but for the planet too.  
            </Typography>
        </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 flex p-5'>
        <Box className='m-4'>
            <Typography variant='p'>
                Our farm benefits
            </Typography>
            <Typography variant='h4'>
                Why Choose Organo Farm Store
            </Typography><br/>
            <Typography variant='p'>
                At Organo Farm Store, we stand as your dedicated ally on your journey towards a healthier and more sustainable lifestyle. Choosing us means choosing more than just premium natural products; it’s a conscious decision to prioritize your well-being and the health of our planet. Our commitment to quality, safety, and sustainability ensures that every product you find at our store is not only delicious and nutritious but also environmentally responsible, with a minimal carbon footprint. By choosing Organo Farm Store, you are embracing the taste of farm-fresh, pure, 
                and wholesome sustenance that nourishes both your body and our shared Earth. Join us in making a positive impact, one bite at a time.
            </Typography>
        </Box>
        <Box>
            <img src='Images/imag.webp' alt='about' className='image1'/>
            <img src='Images/leaf.webp' alt='about' className='image2'/>            
            <img src='Images/grains.webp' alt='about' className='image3'/>
        </Box>
    </div>
    </>
  )
}

export default Blog
