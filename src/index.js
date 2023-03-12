import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import FoodOrderComponent from './components/user/FoodOrder';
import AdminComponent from './components/admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <Routes>
        <Route path="/" element={<FoodOrderComponent/>} />
        <Route path="/admin" element={<AdminComponent />} />  
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
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
