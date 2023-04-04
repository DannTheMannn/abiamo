import React, { Component } from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



class ServiceItemComponent extends Component {
    
    state = {  } 
    render() { 
        return (

            <Card sx={{ width: '80%', margin : 5, position: "relative"}}> 
            <CardContent color="success">
              <Typography variant="h5" component="div">
                ddd
    
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="h5" component="div">
                price
              </Typography>
              <Button variant="contained" color="success" startIcon={<DeleteIcon />} sx={{position : "absolute", right : 10, bottom : 10}} onClick={() => this.props.onDelete(this.props.value.id)}>
                Delete
                </Button>
            </CardContent>
          </Card>
        );
    }
}
 
export default ServiceItemComponent;