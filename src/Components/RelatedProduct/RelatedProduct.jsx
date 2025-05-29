import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <>
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {
          data_product.map((item,i)=>{
            return <Item key={i} name={item.name} old_price={item.old_price} new_price={item.new_price}  image={item.image} id={item.id}/>

          })
        }
      </div>
    </div>
    </>
  )
}

export default RelatedProduct