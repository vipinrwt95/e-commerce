import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import TokenContext from "../../store/TokenContext";


const AddtoCart=(props)=>
{
const ctx=useContext(CartContext);
console.log(ctx);
const authctx=useContext(TokenContext);
console.log(authctx.emailid);

const addingItemsHandler=()=>
{   props.value.quantity=1;
    props.value.id=props.value.title;
    ctx.addItem(props.value)
   
     fetch(`https://crudcrud.com/api/4431ca8a840a462f80d795bffbc706da/cartvipinrwt9gmailcom`,{
    method:'POST',
    body:JSON.stringify(
        {
          object:props.value,
        }
    ),
    headers:{
        'Content-Type':'application/json'
    }

}).then(res=>{
    return res.json().then(data=>
        {
            console.log(data)
        })
})

}



 
 return (
  
    <Button  variant='info' onClick={addingItemsHandler}>ADD TO CART</Button>
 )
}
export default AddtoCart;