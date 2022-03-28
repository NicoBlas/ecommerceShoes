import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import ProductCart from "./components/productCart/ProductCart"
import ProductView from "./components/productView/ProductView"


function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductView />
    </div>
  );
}

export default App;
