import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { Button, CardMedia } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';





class OrderItemComponent extends Component {
    state = {  } 
    render() { 
        return (

            <Card sx={{ width: '800px', margin : 5}}> 
            <CardActionArea onClick={() => this.props.onAdd(this.props.value.id)}>
            <CardContent color="success">
            

              <Typography variant="h5" component="div">
                ghjghj
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="h5" component="div">
                price
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>

        );
    }
}
 
export default OrderItemComponent;