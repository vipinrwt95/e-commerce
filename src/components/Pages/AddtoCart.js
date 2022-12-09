import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";


const AddtoCart=(props)=>
{
const ctx=useContext(CartContext)
const addingItemsHandler=()=>
{
 props.value.quantity=1;
 props.value.id=props.value.title;   
ctx.addItem(props.value)
}
return (
  
    <Button  variant='info' onClick={addingItemsHandler}>ADD TO CART</Button>
 )
}
export default AddtoCart;