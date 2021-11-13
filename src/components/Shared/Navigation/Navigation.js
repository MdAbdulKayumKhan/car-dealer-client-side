import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo-dark.png';

const Navigation = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () =>{
        logOut();
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Nav.Link as={Link} to="/">
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={logo}
                                width="80%"
                                height="40"
                                className="d-inline-block align-top"
                            />{' '}

                        </Navbar.Brand>
                    </Nav.Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Explore</Nav.Link>
                            {!user?.email &&
                                <Nav>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </Nav>
                            }
                            {user?.email &&
                                <Nav>
                                    
                                    <Nav.Link as={Link} to="/dashboard">Deshboard</Nav.Link>{' '}
                                    {user.email &&  <Nav.Link><i className="fas fa-user-circle"></i>{user?.displayName}</Nav.Link>}
                                    <Nav.Link as={Link} to="/login"><button onClick={handleLogOut} type="button" className="btn btn-outline-dark">Logout</button></Nav.Link>
                                </Nav>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;