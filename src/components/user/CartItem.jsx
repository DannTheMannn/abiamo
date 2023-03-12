import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, CardMedia } from '@mui/material';
import Grow from '@mui/material/Grow';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import {IconButton} from '@mui/material';
import { purple, red } from '@mui/material/colors';


class CartItemComponent extends Component {
    state = { 

     } 


  
    
    render() { 
        return (

            <Card sx={{ maxWidth: '100%', margin : 5}} > 
            <CardContent color="success">
              <Typography sx={{ fontSize: 14 }} color="ffaffc" gutterBottom>
                {this.props.value}
              </Typography>
              <Typography variant="h5" component="div">
                Name
              </Typography>
              <Typography variant="b" component="div">
                Beschreibung
              </Typography>
              <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://picsum.photos/200/300"
              alt="Live from space album cover"/>
            </CardContent>

            <CardActions>
            <IconButton color="red" aria-label="reduce amount" component="label">
            <RemoveCircle  sx={{ height: 38, width: 38 }}  />
            </IconButton>
            <Typography>0</Typography>
            <IconButton color="primary" aria-label="increase amount" component="label">
            <AddCircle  sx={{ height: 38, width: 38 }}  />
            </IconButton>
            </CardActions>
          </Card>
            
        );
    }
}
 
export default CartItemComponent;