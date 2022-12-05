import React from 'react';
import classes from './AddCartbutton.module.css';
const AddCartbutton=()=>
{
return(
  <button className={classes['item-button']}>Add to cart</button>
)


}
export default React.memo(AddCartbutton)