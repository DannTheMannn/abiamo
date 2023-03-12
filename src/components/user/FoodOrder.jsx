import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderItemComponent from './OrderItem';
import axios from 'axios';
import CartComponent from './Cart';
import { Container } from '@mui/system';
class FoodOrderComponent extends Component {

      state = { 
        items : [],
        isOpen: false,
        cartItems: [],
        cartQuantity: 0
        

       } 

      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    
        this.setState({ items: response.data });
      };
    
      addToCart = (item) => {

        this.setState((state) => ({
          cartItems: [...state.cartItems, item],
        }));
    
    
        this.setState((state) => ({
          cartQuantity: state.cartQuantity + 1,
        }));
    
      };
    
    
      deleteFromCart = (item) => {
     
        this.setState((state) => ({
          cartItems: state.cartItems.filter((i) => i !== item),
        }));
    
    
        this.setState((state) => ({
          cartQuantity: state.cartQuantity - 1,
        }));
      };

      openCart = () => {
        this.setState((state) => ({
          isOpen: true
        }));
      };
    
      closeCart = () => {
        this.setState((state) => ({
          isOpen: false
        }));
    
      };
    
      placeOrder = () => {
    
      };


      render() {

        const { items } = this.state;
    
        if (!items) {
          return <div className="spinner-grow" role="status">
                 <span className="sr-only">Loading...</span>
                 </div>;
        }
        return (

            <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
              <Toolbar>
                <Typography
                  variant="h6"
                  noWrap
                  component="div">
                  Bruzzelhütte
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={this.openCart}>
                    <Badge badgeContent={this.state.cartQuantity} color="error">
                    <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            
          </Box>
          <Container sx={{ marginTop: "10vh"}}>

   
          {this.state.items.map(item => <OrderItemComponent key={item.id} onAdd={this.addToCart} value={item}/>)}
       
          
          
          </Container>



          <CartComponent value={this.state.cartItems} isOpen={this.state.isOpen} closeCart={this.closeCart}/>
          </>
        );}


}
 
export default FoodOrderComponent;


