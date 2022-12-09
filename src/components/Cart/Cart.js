import React from 'react';
import { Card, Container,Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cart = () => {
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

 
  return (
    <section style={{display:'block'}} fluid>
      <Container  style={{width:'5'}}>
      <div><h1 align="center">CART</h1><Button className='right' padding variant='light'>X</Button></div>
      <Row>
      <Col xs={6}><h2>ITEM</h2></Col>
      <Col><h2>PRICE</h2></Col>  
      <Col><h2>QUANTITY</h2></Col>
      </Row>
      <div>{cartElements.map(item=>
      <Row>
      <Col xs={6}><Image fluid src={item.imageUrl} />{item.title}</Col>
      <Col>{item.price}</Col>  
      <Col>{item.quantity}<Button variant='danger'>REMOVE</Button></Col>
      </Row>)}
      </div>
      </Container>
      </section>
 )
}

export default Cart;

