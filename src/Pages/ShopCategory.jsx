import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drown_up from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'
const ShopCategory = props => {
  const { all_product } = useContext(ShopContext)
  return (
    <>
      <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt='' />
        <div className='shopcategotry-indexsort'>
          <p>
            <span>Showing 1-12</span>
            out of 36 product
          </p>
          <div className='shopcategory-sort'>
            sort by <img src={drown_up} alt='' />
          </div>
        </div>
        <div className='shopcategory-products'>
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  name={item.name}
                  old_price={item.old_price}
                  new_price={item.new_price}
                  image={item.image}
                  id={item.id}
                />
              )
            } else {
              return null
            }
          })}
        </div>
        <div className="shopcategoty-loadmore">
          Explore More
        </div>
      </div>
    </>
  )
}

export default ShopCategory
