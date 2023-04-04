import React, { Component } from 'react';
import Card from '@mui/material/Card';


const styles = {
  Card: {
      backgroundImage: 'url(currywurst-mutige-hamburger-bruzzelhuette-harburg-1000x637.jpeg)',
      backgroundPosition: 'center',
      backgroundSize: '100% auto'
      
      
  }
};



class FoodBannerComponent extends Component {
    render() { 
        return (

            <Card style={styles.Card}  sx={{ width: ' min(80%, 800px)', height : '14vh', margin : 5}}/>

        );
    }
}
 
export default FoodBannerComponent;