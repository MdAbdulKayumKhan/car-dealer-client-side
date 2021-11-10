import React from 'react';
import { Button, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../../img/logo-dark.png';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="80%"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;