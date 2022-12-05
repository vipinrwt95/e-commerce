import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

const LowerBar=()=> {
  return (
    <Navbar bg="secondary" expand="lg" variant="dark" style={{ height: '10rem'}}>
      <Container>
      The Generics
      </Container>
    </Navbar>
  );
}

export default LowerBar;