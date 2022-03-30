import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import ProductCart from "./components/productCart/ProductCart"
import ProductView from "./components/productView/ProductView"
import {ProductsContext} from "./components/ProductsContext"


function App() {

  const [productsInCart, setProductsInCart] = useState(0)

  return (
    <ProductsContext.Provider value={{productsInCart, setProductsInCart}}>
      <div className="App">
        <Navbar />
        <ProductView />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
