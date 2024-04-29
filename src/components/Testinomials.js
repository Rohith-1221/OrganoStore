import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './style.css'

const Testinomials = () => {
  return (
    <div className='testinomials'>
        <Box className='text-slate-200 text-center p-4'>
            <Typography variant='p' >
              Our Testinomials
            </Typography>
            <Typography variant='h2'>
              What They Say 
            </Typography>
        </Box>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  p-3'>
          <Card className='tcard m-4 p-3 text-center bg-inherit'>
            <CardContent>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/><br/>

              <Typography variant='h6'>
              “Organo Farm Store has completely changed the way I look at my groceries. The transparency and dedication to supporting local farmers are truly commendable. 
              I have not only discovered delicious, healthy products but also a deeper connection to the food I eat.”
              </Typography>
            </CardContent>
            <Box className='customer m-3'>
              <Box>
                <img src='https://organofarmstore.co.in/wp-content/uploads/2023/10/236832.png' alt='customer1'/>
                </Box>
                <Box>
                    <Typography variant='h5' className='text-blue-700 p-4'>
                      ANAND <br/>
                      Customer
                    </Typography>
                </Box>
            </Box>
          </Card>

          <Card className='tcard m-4 p-3 text-center bg-inherit'>
            <CardContent>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarHalfIcon className='text-yellow-300'/><br/>

              <Typography variant='h6'>
              “I have been a loyal customer of Organo Farm Store for years, and it never ceases to impress me. The quality of their organic produce and their commitment to sustainable practices are unmatched. 
              I feel good about the food choices I make when I shop here.”
              </Typography>
            </CardContent>
            <Box className='customer m-3'>
              <Box>
                <img src='https://organofarmstore.co.in/wp-content/uploads/2023/10/5719711.png' alt='customer1'/>
                </Box>
                <Box>
                    <Typography variant='h5' className='text-blue-700 p-4'>
                      VENKAT <br/>
                      Customer
                    </Typography>
                </Box>
            </Box>
          </Card>

          <Card className='tcard m-4 p-3 text-center bg-inherit'>
            <CardContent>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/>
              <StarIcon className='text-yellow-300'/><br/>

              <Typography variant='h6'>
              “As a chef, sourcing top-quality ingredients is crucial to me. Organo Farm Store consistently provides me with the finest products, and I love knowing the stories behind each item.
               It's a culinary journey I'm proud to be a part of it and i prefer to visit the store.”
              </Typography>
            </CardContent>
            <Box className='customer m-3'>
              <Box>
                <img src='https://organofarmstore.co.in/wp-content/uploads/2023/10/6833594.png' alt='customer1'/>
              </Box>
                <Box>
                    <Typography variant='h5' className='text-blue-700 p-4'>
                      NANDITHA <br/>
                      Customer
                    </Typography>
                </Box>
            </Box>
          </Card>
        </div>
    </div>
  )
}

export default Testinomials
