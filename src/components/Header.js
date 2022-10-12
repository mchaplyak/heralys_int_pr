import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../assets/heralys_vector.png'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href={"/"}>
                        <img
                            src={logo}
                            width="40"
                            className="d-inline-block align-top"
                            alt="logo"
                        /> Héralys Talents & Immigrants </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav"/>
                    <Nav className="me-auto">
                        <Nav.Link href="/refLinks">Reference Links</Nav.Link>
                        <NavDropdown title="Clients" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/creatingContacts">Creating contacts</NavDropdown.Item>
                            <NavDropdown.Item href="/creatingClients">Creating clients</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Job offers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addAnOffer">Add an offer</NavDropdown.Item>
                            <NavDropdown.Item href="/joHistory">History of job offers</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Candidates" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/creatingContacts">Registration</NavDropdown.Item>
                            <NavDropdown.Item href="/listOfCandidates">List of candidates</NavDropdown.Item>
                            <NavDropdown.Item href="/listOfInterviews">List of interviews</NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Link href="/valCv">Validation CV</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
    }
    }

    export default Header;