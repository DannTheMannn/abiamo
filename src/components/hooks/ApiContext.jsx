import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context object
export const DataContext = createContext();

// Create the context provider component
export const DataProvider = ({ children }) => {


  const [data, setData] = useState([]);


  function getTitle(id) {
    const item = data.find((obj) => obj.id === id);
      return item['title']

  }
  function getBody(id) {
    const item = data.find((obj) => obj.id === id);
      return item['body']

  }
  function getPrice(id) {
    const item = data.find((obj) => obj.id === id);
      return item['price']

  }

  function getTotal(items) {
    let total = 0
    for (let item of items) {
        const i = data.find((obj) => obj.id === item.id);
        if (i) {
        total += i["price"] * item.quantity
      }
    }
    return total;

  }




  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://aid.ddns.net:8080/loadMenu'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, getTitle, getBody, getTotal}}>
      {children}
    </DataContext.Provider>
  );
};
