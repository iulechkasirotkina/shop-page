import React from 'react';
import logo from './logo.svg';
import './App.css';
import OrderInfo from './components/OrderInfo';
import {OrderInfos} from './interfaces/OrderInfos';
import ProductsList from './components/ProductsList';
import { Products } from './interfaces/Products';
import OrderDetail from './components/OrderDetail';

function App() {
 

  return (
    <div className="App">
    <OrderInfo />
    <OrderDetail />    
    </div>
  );
}

export default App;
