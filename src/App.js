import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import ProductCart from "./components/productCart/ProductCart"
import ProductView from "./components/productView/ProductView"
import {ProductsContext} from "./components/ProductsContext"


function App() {

  const [productsToAdd, setProductsToAdd] = useState(0)

  return (
    <ProductsContext.Provider value={{productsToAdd, setProductsToAdd}}>
      <div className="App">
        <Navbar />
        <ProductView />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
