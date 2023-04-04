import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material';
import {useShoppingCart } from '../hooks/ShoppingCartContext';
import { DataContext } from '../hooks/ApiContext';
import { useContext } from 'react';

function CartItemComponent({id}) {
  const {increaseCartQuantity, decreaseCartQuantity, getItemQuantity, removeFromCart} = useShoppingCart()
  const { getTitle, getBody } = useContext(DataContext);
  return ( 
    <Card sx={{ maxWidth: '100%', margin : 5, position: 'relative'}} > 
    <CardContent color="success">
      <Typography variant="h5" component="div">
        {getTitle(id)}
      </Typography>
      <Typography variant="b" component="div">
      {getBody(id)}
      </Typography>
    </CardContent>

    <CardActions>
    <IconButton color="red" aria-label="reduce amount" component="label" onClick={() => decreaseCartQuantity(id)}>
    <RemoveCircle  sx={{ height: 38, width: 38 }}  />
    </IconButton>
    <Typography>{getItemQuantity(id)}</Typography>
    <IconButton color="primary" aria-label="increase amount" component="label" onClick={() => increaseCartQuantity(id)}>
    <AddCircle  sx={{ height: 38, width: 38 }}  />
    </IconButton>
    <IconButton color="primary" aria-label="increase amount" component="label" sx={{position: "absolute", top: 5, right: 5}} onClick={() => removeFromCart(id)}>
    <DeleteIcon  sx={{ height: 38, width: 38}}  />
    </IconButton>
    </CardActions>
  </Card>
   );
}

export default CartItemComponent;


