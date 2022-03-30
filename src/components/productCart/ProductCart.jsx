import React,{useState, useContext} from 'react'
import "./productCart.css"
import { ProductsContext } from '../ProductsContext'
import cart from "../../assets/icon-cart.svg"
import deletee from "../../assets/icon-delete.svg"
import image1 from "../../assets/image-product-1.jpg"

const productsInCartActive = [{
  desc: "Autumn Limited Edition...",
  number: "$125.00 x 3",
  priceFinal: "375.00"
}]

const ProductCart = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const {productsInCart, setProductsInCart} = useContext(ProductsContext)
  
  return (
    <div className='productCart'>
      <button className='productCartButton' type='button'><img id='productCart__icon' onClick={() => setToggleMenu(!toggleMenu)} src={cart} alt="product-cart" /></button>
      {toggleMenu && (
        <div className='productCart__open'>
          <div className='productCart__open-links'>
            <div className='productCart__open-links_products'>
              {/* map here */}
              <div className='productCart__open-links_products-image'>
                <img src={image1} alt="imgprod" />
              </div>
              <div className='productCart__open-links_products-info'>
                <p>{productsInCartActive[0].desc}</p>
                <p>$125.00 x 3   $375.00</p>
              </div> 

              <div className='productCart__open-links_products-delete'>
                <button type='button'><img src={deletee} alt="delete" /></button>
              </div> 
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