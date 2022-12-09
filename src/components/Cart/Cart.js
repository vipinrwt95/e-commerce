import React,{useContext} from 'react';
import { Card, Container,Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from '../../store/CartContext';


const Cart = (props) => {
  
  const ctx=useContext(CartContext);
  return (
    <section style={{display:'block'}} width="50" >
      <Container>
      <div><h1 align="center">CART</h1><Button className='right'  variant='light' onClick={props.onClose}>X</Button></div>
      <Row>
      <Col xs={3}>ITEM</Col>
      <Col>PRICE</Col>  
      <Col>QUANTITY</Col>
      </Row>
       {<div>{ctx.items.map(item=>
      <Row id={item.title}>
      <Col xs={3}><Image fluid src={item.imageUrl} width="50" height="50" />{item.title}</Col>
      <Col>{item.price}</Col>  
      <Col>{item.quantity}<Button className='btn-sm' variant='danger'>REMOVE</Button></Col>
      </Row>)}
      </div>}
      <div className="d-grid gap-2">
      <Button align="center" variant="warning" size="lg">PURCHASE NOW</Button>
      </div> 
      </Container>
      </section>
 )
}

export default Cart;

