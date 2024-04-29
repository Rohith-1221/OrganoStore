import {createSlice} from '@reduxjs/toolkit'

const initialState = []
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload)
        },
        increseQuantity(state,action){

            const updatedCart = state.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item);
            return updatedCart   
        },
        decreaseQuantity(state,action){

            const updatedCart = state.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity-1}:item);
            return updatedCart   
        }
        
    }
})


export const {add,remove,increseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer