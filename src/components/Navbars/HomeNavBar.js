import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { propTypes } from 'react-bootstrap/esm/Image';

function HomeNavbar(props) {
  return (
    <Navbar expand="lg" className="bg-dark">

      <Container>
        <Navbar.Brand href="/home" className="text-white">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
            <Nav.Link href="/aboutus" className="text-white">{props.aboutus}</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
  Navbar.propTypes = {
    title:propTypes.string,
    aboutus:propTypes.string

  }
  //not working.
  Navbar.defaultProps = {
    title:"set title here ",
    aboutus:"set about us here "
  }



export default HomeNavbar;