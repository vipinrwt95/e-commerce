import React,{useContext} from "react";
import { Button, Container,Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from "../../store/CartContext";
import AddtoCart from "./AddtoCart";



const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

    const Store=(props)=>
    {
    
return(
    <Container>
        <h1 align='center' style={{font:'menu'}}><b>MUSIC</b></h1>
     <div>
        {
         productsArr.map(item=>
            
         <Row key={item.title}>
         <Col><Image src={item.imageUrl}/></Col>
         <Col>{item.price}</Col><Col><AddtoCart value={item}/></Col> 
         </Row>   )   
        }
        </div>   
     </Container>
   )
 }
 export default Store;