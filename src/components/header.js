import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return(
        <>
        <Navbar className="style-fonts">
            <LinkContainer to="/">
                <Navbar.Brand>
                    The Daily Prophet
                </Navbar.Brand>
            </LinkContainer>
        </Navbar>

        <Nav>
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav.Item>

        </Nav>
        </>
    );
}

export default Header;