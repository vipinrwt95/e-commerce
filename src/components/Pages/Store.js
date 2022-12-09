import React from "react";
import { Button, Container,Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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

    const Store=()=>
    {
      
   return(
    <Container>
        <h1 align='center' style={{font:'menu'}}><b>MUSIC</b></h1>
     <div>
        {
         productsArr.map(item=>
            
         <Row>
         <Col><Image src={item.imageUrl}/></Col>
         <Row><Col>{item.price}</Col><Col><Button variant='info'>ADD TO CART</Button></Col></Row>  
         </Row>   )   
        }
        </div>   
     </Container>
   )
 }
 export default Store;