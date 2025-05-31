import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [Menu, setmenu] = useState('shop')
  const { GetTOtalCartItems } = useContext(ShopContext)
  const navli=['shop','mens','womens','kids']
  return (
    <>
     <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='shopping-logo' />
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        {
          navli.map((item,i)=>(<li key={i} onClick={()=>{setmenu(item)}}><Link to={`/${item}`}>{item}</Link>{Menu===item?<hr/>:<></>}</li>))
        }
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

export default Navbar;
