import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function WebsiteNav() {
    return (<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Programming-Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Manning</Nav.Link>
                    <Nav.Link href="#link">O'Reilly</Nav.Link>
                    <NavDropdown title="Languages" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Java</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            JavaScript
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Scala</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            C
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default WebsiteNav;