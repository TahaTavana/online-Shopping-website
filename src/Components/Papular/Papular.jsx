import React from 'react'
import './Papular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Papular = () => {
  return (
    <>
    <div className="papular">
      <h1>PAPULAR IN WOMEN</h1>
      <hr />
      <div className="papular-item">
        {data_product.map((item,i)=>{return <Item key={i} name={item.name} old_price={item.old_price} new_price={item.new_price}  image={item.image} id={item.id}/>})}
      </div>
    </div>
    </>
  )
}

export default Papular