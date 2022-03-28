import React, {useState, useEffect} from 'react'
import { RiMenu3Line,  RiCloseLin, RiCloseLine} from "react-icons/ri"
import "./navbar.css"
import logo from "../../assets/logo.svg"
import cart from "../../assets/icon-cart.svg"
import avatar from "../../assets/image-avatar.png"

const Menu = () =>{
  return (
    <>
      <p><a href='#collections'>Collections</a></p>
      <p><a href='#men'>Men</a></p>
      <p><a href='#women'>Women</a></p>
      <p><a href='#about'>About</a></p>
      <p><a href='#contact'>Contact</a></p>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar__first-section'>
        
        <div className='navbar__menu'>
          {toggleMenu
            ? <RiCloseLine color='black' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='black' size={27} onClick={() => setToggleMenu(true)}  />
          }
          {toggleMenu && (
            <div className='navbar__menu-container scale-in-hor-left'>
              <div className='navbar__menu-container-links'>
                <Menu />
              </div>
            </div>

          )}
        </div>

        <div className='navbar__logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className='navbar__links'>
          <Menu />
      </div>

      <div className='navbar__product-cart'>
        <img src={cart} alt="product-cart" />
        <img id='navbar__product-cart-avatar' src={avatar} alt="loggin" />
      </div>

      <div></div>

    </div>
  )
}

export default Navbar