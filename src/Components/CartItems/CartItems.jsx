import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, addtocart, removefromcart } =
    useContext(ShopContext)
  return (
    <>
      <div className='cartitems'>
        <div className='cartitems-formate-main'>
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map(e => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className='cartitems-format cartitems-formate-main'>
                  <img className='carticon-product-icon' src={e.image} alt='' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitems-quantity'>
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img className='cartitems-remove-icon'
                    src={remove_icon}
                    onClick={() => {
                      removefromcart(e.id)
                    }}
                    alt=''
                  />
                </div>
                <hr />
              </div>
            )
          }
          return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div className="">
                    <div className="cartitems-total-item">
                        <p>Subtatal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Sheeping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
            <div className="cartitems-peromocode">
                <p>If you have a promo code, Enter it here </p>
                <div className="cartitem-peromobox">
                    <input type="text" placeholder='promo code : ' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default CartItems
