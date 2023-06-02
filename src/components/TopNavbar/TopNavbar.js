import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './TopNavbar.css'
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
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link ><Link to="../Home">Home</Link></Nav.Link>
                  <Nav.Link ><Link to="../Home">Shop</Link></Nav.Link>
                  <Nav.Link ><Link to="../Home" style={{textDecoration:'none'}}>Blogs</Link></Nav.Link>
                  <NavDropdown
                    title="Seller"
                    id={`offcanvasNavbarDropdown-expand-${'md'}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
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