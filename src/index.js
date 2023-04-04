import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import FoodOrderComponent from './components/user/FoodOrder';
import AdminComponent from './components/admin/Admin';
import ServiceComponent from './components/service/serviceComponent';
import { ShoppingCartProvider } from './components/hooks/ShoppingCartContext';
import { createTheme, ThemeProvider} from '@mui/material/styles';
// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary :
    {
      main: '#5b3a29'
    },
    secondary: {
      main: '#f0'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>


      <Router>
      <Routes>
        <Route path="/" element={
        
        <ShoppingCartProvider>
        <FoodOrderComponent/>
        </ShoppingCartProvider>


        } />
        <Route path="/admin" element={<AdminComponent />} />  
        <Route path="/service" element={<ServiceComponent />} />
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
