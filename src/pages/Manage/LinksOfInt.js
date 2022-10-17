import React, {Component} from 'react';
import {Button, Container, InputGroup, Navbar, Form, Row} from "react-bootstrap";
import './LinksOfInt.scss'

class LinksOfInt extends Component {
    render() {
        return (
            <>
                <Navbar expand={"lg"} bg={"light"} id={"loi_submenu"}>
                    <Container className={"justify-content-center"}>
                        <Button variant="outline-primary" size={"sm"} className={"me-2"}>Add</Button>
                        <Button variant="outline-primary" size={"sm"} className={"me-2"}>Delete</Button>
                        <Button variant="outline-primary" size={"sm"} className={"me-2"}>Update</Button>
                    </Container>
                </Navbar>
                <Container className={"d-flex align-items-center justify-content-center mt-4"}>
                    <h3>Links of interest</h3>
                </Container>
                <Container id={"search_box"}>
                    <Row>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="..."/>
                        </InputGroup>
                    </Row>
                </Container>

            </>
        );
    }
}

export default LinksOfInt;