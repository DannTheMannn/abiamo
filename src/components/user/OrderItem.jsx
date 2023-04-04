import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import {useShoppingCart } from '../hooks/ShoppingCartContext';


function OrderItemComponent({id, title, body, price}) {
  const {increaseCartQuantity, getItemQuantity} = useShoppingCart()

  return ( 
    <Card sx={{ width: 'min(80%, 800px)', margin : 5}}> 
    <CardActionArea onClick={() => increaseCartQuantity(id)}>
    <CardContent color="success">
      <Chip label={getItemQuantity(id)} sx={{position : "absolute", top : 5, right : 5}} />
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {body}
      </Typography>
      <Typography variant="h5" component="div">
        {(price / 100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})}
      </Typography>
    </CardContent>
    </CardActionArea>
  </Card>
   );
}

export default OrderItemComponent;

