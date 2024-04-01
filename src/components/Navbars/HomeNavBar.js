import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

function HomeNavbar(props) {
  return (
    <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              {props.aboutus}
            </Nav.Link>

            {/* 
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> 
            */}
          </Nav>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Select Mode</label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutus: propTypes.string,
};

Navbar.defaultProps = {
  title: "set title here ",
  aboutus: "set about us here ",
};

export default HomeNavbar;
