import React from 'react'
import Hero from '../Components/Hero/Hero'
import Papular from '../Components/Papular/Papular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <>
    <div className="">
      <Hero/>
      <Papular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      </div>
      </>
  )
}

export default Shop