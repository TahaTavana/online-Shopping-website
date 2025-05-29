import React, { useContext } from 'react'
import './ProductDispaly.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addtocart}=useContext(ShopContext)
  return (
    <>
      <div className='productdispaly'>
        <div className="productdispaly-left">
            <div className="productdispaly-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdispaly-img">
                <img className='productdispaly-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdispaly-right">
            <h1>{product.name}</h1>
            <div className="productdispaly-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdispaly-right-prices">
            <div className="productdispaly-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdispaly-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdispaly-right-discription">
            Elevate your casual wardrobe with the Puma Green Solid Zippered Full-Zip Slim Fit Bomber Jacket. This stylish hoodie features a striking black logo on the chest, seamlessly blending sporty aesthetics with everyday functionality. Crafted for comfort, its slim fit design ensures a flattering silhouette while providing ample room for movement.

Perfect for layering or wearing on its own, this versatile bomber jacket is ideal for any occasion, whether you're heading to the gym or out with friends. The full-zip closure allows for easy wear, while the rich green color adds a fresh pop to your outfit. Make a statement and stay comfortable with this essential piece from Puma.
            </div>
            <div className="productdispaly-right-size">
                <h1>Select size : </h1>
                <div className="productdispaly-right-sizes">
                    <div className="">S</div>
                    <div className="">M</div>
                    <div className="">L</div>
                    <div className="">XL</div>
                    <div className="">XXL</div>
                </div>
            </div>
            <button onClick={()=>{addtocart(product.id)}}>ADD to Cart</button>
            <p className='productdispaly-right-category'><span>Category :</span>{product.category},T-Shirt</p>
            <p className='productdispaly-right-category'><span>Tags :</span>Modern,Letest</p>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay
