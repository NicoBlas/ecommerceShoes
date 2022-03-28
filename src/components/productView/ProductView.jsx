import React, {useState} from 'react'
import "./productView.css"
import image1 from "../../assets/image-product-1.jpg"
import image2 from "../../assets/image-product-2.jpg"
import image3 from "../../assets/image-product-3.jpg"
import image4 from "../../assets/image-product-4.jpg"
import image1TH from "../../assets/image-product-1-thumbnail.jpg"
import image2TH from "../../assets/image-product-2-thumbnail.jpg"
import image3TH from "../../assets/image-product-3-thumbnail.jpg"
import image4TH from "../../assets/image-product-4-thumbnail.jpg"
import arrowLeft from "../../assets/icon-previous.svg"
import arrowRight from "../../assets/icon-next.svg"
import plus from "../../assets/icon-plus.svg"
import minus from "../../assets/icon-minus.svg"
import whiteCart from "../../assets/icon-cart copy.svg"

const ProductView = () => {

  let price = "125.00"
  const [numberProductToOrder, setNumberProductToOrder] = useState(0)

  const substractOne = () =>{
    if(numberProductToOrder > 0){
      return setNumberProductToOrder(numberProductToOrder-1)
    }
    return 0
  }
  const addOne = () =>{
    return setNumberProductToOrder(numberProductToOrder+1)
  }
  return (
    <div className='productView'>
      <div className='porductView__images-container'>
        <div className='porductView__images-container_bigImage'>
          <img src={image1} alt="imageBig" />

          <div className='porductView__images-container_arrowLeft'>
            <img src={arrowLeft} alt="arrowLeft" />       
          </div>

          <div className='porductView__images-container_arrowRight'>
            <img src={arrowRight} alt="arrowRight" />       
          </div>

        </div>

        

        <div className='porductView__images-container_smallImages'>
          <div className='porductView__images-container_smallImages-image'>
            <img src={image1} alt="image1" />
          </div>

          <div className='porductView__images-container_smallImages-image'>
            <img src={image2} alt="image2" />
          </div>

          <div className='porductView__images-container_smallImages-image'>
            <img src={image3} alt="image3" />
          </div>

          <div className='porductView__images-container_smallImages-image'>
            <img src={image4} alt="image4" />
          </div>

        </div>
      </div>
      
      <div className='porductView__info-container'> 
        <h3>SNEAKERS COMPANY</h3>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

        <div className='porductView__info-container_price'>
          <p id='p-finalPrice'>${price}</p>
          <p id='p-discount'>50%</p>
          <p id='p-price'>$250.00</p>
        </div>

        <div className='productView__info-container-cart'>
          <div className='productView__info-container-cart_number'>
            <button type='button' onClick={substractOne}><img src={minus} alt="substract" /></button>
            <p>{numberProductToOrder}</p>
            <button type='button' onClick={addOne}><img src={plus} alt="add" /></button>
          </div>

          <div className='productView__info-container-cart_addToCart'>
            <button type='button'><img src={whiteCart} />Add to cart</button>
          </div>
        </div>

      </div>

      

      <div className=''>

      </div>


    </div>
  )
}

export default ProductView