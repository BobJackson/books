import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default WebsiteNav;