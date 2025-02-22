import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function WebsiteNav({onPublisherChange}) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" onClick={() => onPublisherChange(null)}>Programming-Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Manning" onClick={() => onPublisherChange('Manning')}>Manning</Nav.Link>
                        <Nav.Link href="#OReilly" onClick={() => onPublisherChange("O'Reilly")}>O'Reilly</Nav.Link>
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
        </Navbar>
    )
}

export default WebsiteNav;