import React, { Component } from 'react';


import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import CartItemComponent from './CartItem';


class CartComponent extends Component {
  state = {  } 
  render() { 
    return (

      <Drawer
      anchor={"right"}
      open={this.props.isOpen}
      onClose={this.props.closeCart}
    >
    <Box
    sx={{ width: 500 }}
    role="presentation"
    >
 
  {this.props.value.map(data => <CartItemComponent key={data} value={data}></CartItemComponent>)}
 
  

  </Box>
    </Drawer>
    );
  }
}
 
export default CartComponent;


