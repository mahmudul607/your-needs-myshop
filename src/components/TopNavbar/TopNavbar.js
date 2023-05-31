import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <>
     
        <Navbar key={'md'} bg="light" expand={'md'} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                   title="Shop"
                   id={`offcanvasNavbarDropdown-expand-${'md'}`}
                 ><NavDropdown.Item ><Link to="">All</Link></NavDropdown.Item>
                   <NavDropdown.Item ><Link to="">Mango</Link></NavDropdown.Item>
                   <NavDropdown.Item><Link to="">Banana</Link>
                   </NavDropdown.Item>
                   <NavDropdown.Item ><Link to="">Jam</Link>
                   </NavDropdown.Item>
                   <NavDropdown.Item ><Link to="">Lichu</Link>
                   </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   
    </>
  );
}

export default TopNavbar;