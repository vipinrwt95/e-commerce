
import { Container, Image,Carousel, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Details=(props)=>
{

//console.log(props.data)

    
return(
    <>
  <Carousel>
      <Carousel.Item>
      <Image src={props.data.imageUrl} width={200}></Image> 
      <p>ANGLE 1</p> 
       </Carousel.Item>
      <Carousel.Item>
      <Image src={props.data.imageUrl} width={200}></Image>  
      <p>ANGLE 1</p> 
      </Carousel.Item>
      <Carousel.Item>
      <Image src={props.data.imageUrl} width={200}></Image> 
      <p>ANGLE 1</p> 
      </Carousel.Item>
      <Carousel.Item>
      <Image src={props.data.imageUrl} width={200}></Image>   
      </Carousel.Item>
    </Carousel>
    <Container>
  <h1 align="center">PRODUCT</h1>
    <section align="center">
        <h3>{props.data.title}</h3>
    <Image fluid src={props.data.imageUrl}></Image>
    
    </section>
    </Container>
    <section>
    <section align="center">
    <Button variant="success">ADD TO CART</Button>
    <Button variant="warning">BUY NOW</Button>
    </section>
     <h1>Product Details</h1>
     <h4>Rating and Revies</h4>
     <Container>
       <Row>
        <Col>Stars</Col>
        <Col>Comments about product</Col>
        </Row> 
        <Row>
        <Col>Stars</Col>
        <Col>Comments about product</Col>
        </Row>
        <Row>
        <Col>Stars</Col>
        <Col>Comments about product</Col>
        </Row> 
     </Container>

    </section>
    </>
    )

}
export default Details;