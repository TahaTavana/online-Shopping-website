import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [Menu, setmenu] = useState('Shop')
  const { GetTOtalCartItems } = useContext(ShopContext)
  return (
    <>
     <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='shopping-logo' />
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        
        <li onClick={()=>{setmenu("Shop")}}><Link to='/shop'>Shop</Link>{Menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Mens")}}><Link to='/mens'>Mens</Link>{Menu==="Mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Womens")}}><Link to='/womens'>Womens</Link>{Menu==="Womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Kids")}}><Link to='/kids'>Kids</Link>{Menu==="Kids"?<hr/>:<></>}</li>
      </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='cart'><img src={cart_icon} alt="cart-icon" /></Link>
          <div className="nav-cart-count">{GetTOtalCartItems()}</div>
        </div>
    </div>
    </>
  )
}

export default Navbar

// ##############################
 

