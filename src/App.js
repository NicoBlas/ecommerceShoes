import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import ProductCart from "./components/productCart/ProductCart"
import ProductView from "./components/productView/ProductView"
import {ProductsContext} from "./components/ProductsContext"
import {ExpandImageContext} from "./components/ExpandImageContext"

function App() {

  const [productsToAdd, setProductsToAdd] = useState(0)
  const [expandImage, setExpandImage] = useState(false)

  return (
  
    <ProductsContext.Provider value={{productsToAdd, setProductsToAdd}}>
      <ExpandImageContext.Provider value={{expandImage, setExpandImage}}>
        <div className="App">
          <Navbar />
          <ProductView />
        </div>
      </ExpandImageContext.Provider>
      
    </ProductsContext.Provider>
  );
}

export default App;
