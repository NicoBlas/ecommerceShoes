import React,{useState, useEffect, useContext} from 'react'
import "./productCart.css"
import { ProductsContext } from '../ProductsContext'
import cart from "../../assets/icon-cart.svg"
import deletee from "../../assets/icon-delete.svg"
import image1 from "../../assets/image-product-1.jpg"

const productsInCartActive = []

const ProductCart = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const {productsInCart, setProductsInCart} = useContext(ProductsContext)
  const [value,setValue] = useState(false)

  const deleteProduct = () =>{
    return productsInCartActive.shift()
  }
  const pushProduct = () =>{
    return productsInCartActive.push(productsInCart)
  }

  useEffect(()=>{
    deleteProduct()
  },[value])

  useEffect(()=>{
    pushProduct()
  },[productsInCart])

  return (
    <div className='productCart'>
      <button className='productCartButton' type='button'><img id='productCart__icon' onClick={() => setToggleMenu(!toggleMenu)} src={cart} alt="product-cart" /></button>
      {toggleMenu && (
        <div className='productCart__open'>
          <div className='productCart__open-links'>
            <div className='productCart__open-links_products'>
              <ul className='productCart__ul'>
                
                {productsInCartActive.length > 0 &&
                  
                  productsInCartActive.map((elem,i)=>{
                    if (elem != 0)return(
                      <li className='productCart__li' key={i}>
                        <div className='productCart__open-links_products-image'>
                          <img src={image1} alt="imgprod" />
                        </div>
                        <div className='productCart__open-links_products-info'>
                          <p>Autumn Limited Edition...</p>
                          <p>{"$125.00 x "+elem+" ---- $ "+125*elem}</p>
                        </div>
                        <div className='productCart__open-links_products-delete'>
                          <button type='button' onClick={() => setValue(!value)} ><img src={deletee} alt="delete" /></button>
                        </div>
                      </li>
                      
                    )
                  } )}
                

              </ul>
              
              
            </div>
            <div className='productCart__open-links_checkout'>
              <button type='button'>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>

    

    
  )
}

export default ProductCart