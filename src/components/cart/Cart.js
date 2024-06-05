
import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decreaseQuantity, increseQuantity, remove } from './features/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Typography,Button, Card, Box,CardMedia, CardContent } from '@mui/material';

const Cart = () => {
  const scost=0;
 const navigate =  useNavigate()
 const products = useSelector((state)=>state.cart)
 const dipatch = useDispatch()
 console.log(products,'this is cart')
 const totalPriceOfCart = products.reduce((acc,val)=>{
    return acc+val.price*val.quantity
 },0)

 const handleOrder=()=>{
    alert('placed order successfully')
    navigate('/Home')
 }

 console.log(totalPriceOfCart,'this is cart value')

  return (
    <div className="text-center p-4 bg-gray-800">
      <div>
      <Typography variant='h2' className='text-white'>YOUR ORDERS</Typography>
      <Button onClick={()=>navigate('/Home')} variant='contained' color='error'>Go Back</Button>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2'>
        {products&&products.map((product) => (
          <Card key={product.id} className="m-3 p-3 cartcard">
              <CardMedia
                    component="img"
                    image={product.src}
                    className='cartimg'
                    alt="image"
                    sx={{height:'150px',width:'200px'}}
                  />
              <CardContent className="product-info">
                <Typography variant='h5' className='text-slate-800'>{product.name}</Typography>
                <Typography  variant='p' className='text-slate-600'>Price: ${product.price*product.quantity}</Typography>
              </CardContent>
            <Button onClick={()=>dipatch(remove(product.id))} variant='outlined' color='error' className='rbtn'>
              Remove
            </Button><br/>
            <Button onClick={product.quantity>1?()=>dipatch(decreaseQuantity({id:product.id})):null}>-</Button>
            <Typography  variant='p' className='text-slate-600'>{product.quantity>1?product.quantity:1}</Typography>
            <Button onClick={()=>dipatch(increseQuantity({id:product.id}))}>+</Button>
          </Card>
        ))}
      </div>
      <Box className='p-2 m-2'>
          <Typography variant='h5' className='text-slate-50'>Total amount:${totalPriceOfCart}</Typography>
          <Typography variant='h5' className='text-slate-50'>Shipping cost:${scost}</Typography>
      </Box>
      <Box className='p-2 m-2'>
        <Typography variant='h4' className='text-slate-50'>Total Payment:${totalPriceOfCart+scost}</Typography>
      </Box>
      
    </div>
      <Button variant='contained'  color='error' onClick={handleOrder}>
        Checkout and place order
      </Button>
    </div>
  );
};

export default Cart;
