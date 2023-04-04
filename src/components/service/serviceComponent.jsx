import React, { Component } from 'react';
import ServiceItemComponent from './serviceItem';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Container } from '@mui/system';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';



class ServiceComponent extends Component {
    
    state = {
        data: null,
      };
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
        this.setState({ data: response.data });
      };
    
      handleDelete = itemid => {
        const data = this.state.data.filter(c => c.id !== itemid)
        this.setState({data})
      }

      render() {
        const { data } = this.state;
    
        if (!data) {
          return  (
            <Container maxWidth="sm">
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>
            </Container>

          );           
        }
        return (



        <Box>
        <Container maxWidth="sm">
        <TransitionGroup>
        {this.state.data.map(data => (
        <Collapse key={data.id}>
        <ServiceItemComponent key={data.id} onDelete={this.handleDelete} value={data}/>
        </Collapse>
        ))}
        </TransitionGroup>
        </Container>
        <FormControlLabel sx={{position : "fixed", bottom : "5vh", right : "5vh"}} control={<Switch defaultChecked />} label="Allow Orders" labelPlacement="start" />
        </Box>

        




        );
    }
}

 
export default ServiceComponent;