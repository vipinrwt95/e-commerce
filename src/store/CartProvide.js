import CartContext from "./CartContext";
import React,{useState} from "react";
const CartProvider=props=>
{
 const [items,updateItems]=useState([]);
    const addItemToCartHandler=(item)=>
    {
     if(!items.find(i=>i.id===item.id))
     {
       updateItems([...items,item])
     }
     else
     {
       alert('already added') 
     }  
    }
const cartcontext={
      items:items,
      totalAmount:0,
      addItem:addItemToCartHandler,
    };

return(
<CartContext.Provider value={cartcontext}>
{props.children} 
</CartContext.Provider>
) 
}
export default CartProvider;