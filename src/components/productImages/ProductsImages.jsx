import React,{useState,useContext} from 'react'
import "./productsImages.css"
import { ExpandImageContext } from '../ExpandImageContext'
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

const ProductsImages = () => {
    const {expandImage, setExpandImage} = useContext(ExpandImageContext)
    const images = [image1,image2,image3,image4]
    const [imageShowed, setImageShowed] = useState(0)
    const changeImagePlus = () =>{
        if(imageShowed < 3){
          return setImageShowed(imageShowed+1)
        }
        return 3
      }
    
    const changeImageMinus = () =>{
        if(imageShowed > 0){
          return setImageShowed(imageShowed-1)
        }
    return 0
    }


    return (
        <React.Fragment>

            <div className='productsImages-container_bigImage'>
                <img onClick={()=> setExpandImage(!expandImage)} id='bigImageId' src={images[imageShowed]} alt="imageBig" />

                <div className='productsImages-container_arrowLeft'>
                    <button type='button' onClick={changeImageMinus}><img src={arrowLeft} alt="arrowLeft" /></button>       
                </div>

                <div className='productsImages-container_arrowRight'>
                    <button type='button' onClick={changeImagePlus}><img src={arrowRight} alt="arrowRight" /></button>   
                </div>

            </div>

            <div className='productsImages-container_smallImages'>
                <div className='productsImages-container_smallImages-image'>
                    <img src={image1} alt="image1" onClick={() => setImageShowed(0)} />
                </div>

                <div className='productsImages-container_smallImages-image'>
                    <img src={image2} alt="image2" onClick={() => setImageShowed(1)} />
                </div>
                
                <div className='productsImages-container_smallImages-image'>
                    <img src={image3} alt="image3" onClick={() => setImageShowed(2)} />
                </div>

                <div className='productsImages-container_smallImages-image'>
                    <img src={image4} alt="image4" onClick={() => setImageShowed(3)} />
                </div>

            </div>

        </React.Fragment>
        
  )
}

export default ProductsImages