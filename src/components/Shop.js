import React,{useState} from 'react'
import { Typography,Card,CardContent,CardMedia,CardActionArea,Button } from '@mui/material';
import { add, remove } from "../components/cart/features/cartSlice";
import {useDispatch,useSelector } from 'react-redux'
// import result from './files/data.json'

const Shop = ({product}) => {
    const [addedToCart,setAddedToCart] = useState(false)
    // const [products,setProducts]=useState([])

    // useEffect(()=>{
    //   setProducts(result)
    // },[])

    const dispatch = useDispatch()
    const handleAddToCart = (item)=>{
          dispatch(add(item))
          setAddedToCart(true)
    }

    const handleDeleteCartItem = (itemId)=>{
      dispatch(remove(itemId))
      setAddedToCart(false)
    }
    const {cart} = useSelector((state)=>state)
    const isThereInCart  = (itemId)=>{
      return cart.find(cartItem=>cartItem.id===itemId)
    }

  return (
    <>
    <div>
        {/* {products.map((product,index)=>( */}
              <Card className='m-5 hover:bg-neutral-800' sx={{height:'400px',borderRadius:'20px',border:'1px solid #000'}} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.src}
                    alt="image"
                    sx={{height:'200px'}}
                  />
                  <CardContent className='text-center '>
                    <Typography gutterBottom variant="h5" className='text-rose-700 hover:text-white'>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" className='text-blue-600 hover:text-white'>
                        {product.category}<br/>
                        ${product.price}<br/>
                    </Typography>
                    {
                      isThereInCart(product.id)? <Button variant='contained' color='error' onClick={()=>handleDeleteCartItem(product.id)}>remove item</Button>
                      : <Button variant='contained' color='success' onClick={()=>handleAddToCart({...product,quantity:1})}>Add to Cart</Button>
                    }
                  </CardContent>
                </CardActionArea>
        </Card>     
      {/* ))} */}
    </div>
    </>
  )
}

export default Shop
