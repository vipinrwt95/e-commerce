import React from "react";
const CartContext=React.createContext(
    {
    CartItems:[],
    TotalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
    }
);
export default CartContext;