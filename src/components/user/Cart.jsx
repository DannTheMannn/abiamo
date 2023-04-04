import React, { useContext } from 'react';


import Drawer from '@mui/material/Drawer';
import { Box, Button, Typography } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import CartItemComponent from './CartItem.jsx'
import { ShoppingCartContext } from '../hooks/ShoppingCartContext';
import { DataContext } from '../hooks/ApiContext.jsx';

function CartComponent() {
  const {getTotal, getPrice, getTitle} = useContext(DataContext);
  const { closeCart, isOpen, cartItems } = useContext(ShoppingCartContext);



  const calcTotal = (items) => {

    return getTotal(cartItems)
  }
  const placeOrder = (items) => {

    //console.log(getTotal(items))
    //this.context.clearCart()
  };
  
  return ( 
    <Drawer
    anchor={"right"}
    open={isOpen}
    onClose={closeCart}
  >
  <Box
  sx={{width: 'min(90vw, 500px)', height :"100%", position : "relative"}}
  role="presentation"
  >
    <Box
    sx={{ height: 'calc(100% - 180px);', overflowY: "scroll"}}>
    {cartItems.map(item => <CartItemComponent key={item.id} id={item.id}></CartItemComponent>)}
    </Box>



<Typography variant="h5" component="div" sx={{position : "absolute", bottom : "80px", padding : '20px'}}>Gesamt: {(calcTotal(cartItems) / 100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})}</Typography>
<Button variant="contained" sx={{minHeight : "70px",  width : "100%",  position : "absolute", bottom : "0", borderRadius : 0}} onClick={()=> placeOrder(cartItems)} endIcon={<PaymentsIcon />}>Buy</Button>


</Box>
  </Drawer>
   );
}

export default CartComponent;

