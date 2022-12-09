import React,{useState,useRef} from "react"
import   Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button,Card } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const Navigation = () => {
  // Toogle Menu
  const[Cartstatus,changeCartstatus]=useState(false)
  const[target,setTarget]=useState(null)
  const ref=useRef(null);
 const CartHandler=(event)=>
 {
  changeCartstatus((prev)=>!prev);
  setTarget(event.target)
 }

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            
          </Nav>
          <Button variant="outline-success" onClick={CartHandler}>CART - 0</Button>
          <div ref={ref}>
          <Overlay
        show={Cartstatus}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={10}
        display="block"
      >
        <section style={{backgroundColor:"white"}} id="popover-contained">
          
            <Cart></Cart>
          
        </section>
      </Overlay>
       </div>
          </Container>
      </Navbar>
  <Card bg="secondary">
     <div className="card-body">
     <h1 align="center">The Generics</h1> 
     </div>
     
</Card>  

    </>
  )
}

export default Navigation;