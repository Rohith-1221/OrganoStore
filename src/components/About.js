import React from 'react'
import { Typography,Box } from '@mui/material';
import './style.css'

const About = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 flex p-5'>
        <Box>
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
    </div>
  )
}

export default About
