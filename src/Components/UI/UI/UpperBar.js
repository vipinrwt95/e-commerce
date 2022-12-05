import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const UpperBar=()=> {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#home">STORE</Navbar.Brand>
        <Navbar.Brand href="#home">ABOUT</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default UpperBar;