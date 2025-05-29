import React, { createContext, useState } from "react";
import all_product from'../Components/Assets/all_product.js'
export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let index=0; index<all_product.length+1; index++){
        cart[index]=0
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const addtocart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removefromcart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }
    const GetTOtalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem
    }
    const contextValue={GetTOtalCartItems,getTotalCartAmount,all_product,cartItems,addtocart,removefromcart}
    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;